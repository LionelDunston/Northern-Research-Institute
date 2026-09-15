"use client"

import { useEffect, useState } from "react"

const years = Array.from({length:11},(_,i)=> String(2026-i))

function countWords(s:string){ return s.trim() ? s.trim().split(/\s+/).length : 0 }

export default function ResearcherResearchPage() {
  const [projects,setProjects]=useState<any[]>([])
  const [loading,setLoading]=useState(true)
  const [showForm,setShowForm]=useState(false)
  const [submitting,setSubmitting]=useState(false)
  const [success,setSuccess]=useState(false)

  // Step 1 - Published status
  const [researchStatus,setResearchStatus]=useState<""|"published"|"unpublished">("")
  // Step 3 - pathway: commercial vs social impact (both can be industrial or rural)
  const [pathway,setPathway]=useState<""|"commercial"|"social"|"industrial"|"rural">("")
  // Step 2
  const [title,setTitle]=useState("")
  const [doi,setDoi]=useState("")
  const [journal,setJournal]=useState("")
  const [year,setYear]=useState("")
  const [authorAff,setAuthorAff]=useState("")
  const [unpubDesc,setUnpubDesc]=useState("")
  // Step 3
  const [trl,setTrl]=useState("")
  const [srl,setSrl]=useState("")
  // Step 4
  const [location,setLocation]=useState("")
  const [problem,setProblem]=useState("")
  const [valueProp,setValueProp]=useState("")
  // Step 5
  const [resourceReq,setResourceReq]=useState("")
  // Step 6
  const [filePaper,setFilePaper]=useState<File|null>(null)
  const [fileDeck,setFileDeck]=useState<File|null>(null)
  const [fileAssets,setFileAssets]=useState<File|null>(null)
  const [ipAgree,setIpAgree]=useState(false)
  const [error,setError]=useState("")

  function load(){
    fetch("/api/research").then(r=>r.json()).then(d=>{ setProjects(Array.isArray(d)?d:[]); setLoading(false)}).catch(()=>setLoading(false))
  }
  useEffect(()=>{ load() },[])

  function validateFile(f:File|null, maxMB:number, types:string[]){
    if(!f) return null
    if(types.length && !types.some(t=> f.name.toLowerCase().endsWith(t) || f.type.includes(t))) return `Invalid file type for ${f.name}`
    if(f.size > maxMB*1024*1024) return `${f.name} exceeds ${maxMB}MB`
    return null
  }

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    setError("")
    if(!researchStatus) return setError("Select Published or Unpublished (Step 1).")
    if(!title.trim()) return setError("Research Title is required.")
    if(!authorAff.trim()) return setError("Main Author & Affiliation is required.")
    if(researchStatus==="published"){
      if(!doi.trim()) return setError("DOI Link is required for published research.")
      if(!journal.trim()) return setError("Journal / Conference Name is required.")
      if(!year) return setError("Year of Publication is required.")
      if(!filePaper) return setError("Full Published Paper (PDF) is required for published research.")
      const e1 = validateFile(filePaper,10,[".pdf"])
      if(e1) return setError(e1)
    } else {
      if(!unpubDesc.trim()) return setError("Brief description of your unpublished research is required.")
      if(!year) return setError("Research Date is required.")
      if(filePaper){
        const e1 = validateFile(filePaper,10,[".pdf"])
        if(e1) return setError(e1)
      }
    }
    if(!pathway) return setError("Select an Implementation Pathway (Step 3).")
    if(pathway==="commercial"){
      if(!trl) return setError("Select a Technology Readiness Level.")
    } else {
      if(!srl) return setError("Select a Social Readiness Level.")
    }
    if(!location.trim()) return setError("Location is required.")
    if(countWords(problem)===0) return setError("Describe the Real-World Problem.")
    if(countWords(problem)>250) return setError("Real-World Problem exceeds 250 words.")
    if(countWords(valueProp)===0) return setError("Describe the Value Proposition.")
    if(countWords(valueProp)>250) return setError("Value Proposition exceeds 250 words.")
    if(!resourceReq.trim()) return setError("Describe your Resource Requirements.")
    if(!fileDeck) return setError("Slide Deck / Video Pitch is required.")
    if(!ipAgree) return setError("You must agree to the IP Declaration.")
    const e2 = validateFile(fileDeck,50,[".pdf",".ppt",".pptx",".mp4"])
    if(e2) return setError(e2)
    if(fileAssets){
      const e3 = validateFile(fileAssets,100,[".zip"])
      if(e3) return setError(e3)
    }

    setSubmitting(true)
    try{
      const fd = new FormData()
      fd.append("researchStatus", researchStatus)
      fd.append("pathway", pathway)
      fd.append("title", title)
      fd.append("doi", doi)
      fd.append("journal", journal)
      fd.append("year", year)
      fd.append("authorAff", authorAff)
      fd.append("unpubDesc", unpubDesc)
      fd.append("trl", trl)
      fd.append("srl", srl)
      fd.append("location", location)
      fd.append("problem", problem)
      fd.append("valueProp", valueProp)
      fd.append("resourceNeeds", resourceReq)
      if(filePaper) fd.append("filePaper", filePaper)
      if(fileDeck) fd.append("fileDeck", fileDeck)
      if(fileAssets) fd.append("fileAssets", fileAssets)

      const res = await fetch("/api/research",{ method:"POST", body: fd })
      const data = await res.json().catch(()=> ({}))
      if(!res.ok) throw new Error(data.error || "Submission failed")
      setSuccess(true)
      setShowForm(false)
      setResearchStatus(""); setPathway(""); setTitle(""); setDoi(""); setJournal(""); setYear(""); setAuthorAff(""); setUnpubDesc("")
      setTrl(""); setSrl(""); setLocation(""); setProblem(""); setValueProp("")
      setResourceReq("");
      setFilePaper(null); setFileDeck(null); setFileAssets(null); setIpAgree(false)
      load()
      setTimeout(()=> setSuccess(false), 4000)
    }catch(err:any){
      setError(err.message)
    }finally{ setSubmitting(false) }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Researcher Submissions</h1>
          <p className="text-sm text-muted">Submit research for implementation via NRI pathways</p>
        </div>
        <button onClick={()=> setShowForm(!showForm)} className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors">
          {showForm ? "Cancel" : "New Submission"}
        </button>
      </div>

      {success && <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6">✓ Submission received — our team will review and contact you.</div>}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 sm:p-8 mb-8 space-y-8">
          {error && <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>}

          {/* Step 1 - Published status */}
          <section className="border border-border rounded-xl p-5 bg-gray-50/50">
            <h2 className="font-bold text-primary">Step 1: Primary Routing</h2>
            <p className="text-sm text-muted mb-3">Choose whether your research is already published.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <label className={`p-4 rounded-lg border-2 cursor-pointer ${researchStatus==="published"?"border-primary bg-primary/5":"border-border bg-white"}`}>
                <input type="radio" name="researchStatus" value="published" checked={researchStatus==="published"} onChange={()=>setResearchStatus("published")} className="mr-2" />
                <span className="font-medium">Published Research</span>
                <p className="text-xs text-muted mt-1">Already published with DOI, journal and publication year</p>
              </label>
              <label className={`p-4 rounded-lg border-2 cursor-pointer ${researchStatus==="unpublished"?"border-primary bg-primary/5":"border-border bg-white"}`}>
                <input type="radio" name="researchStatus" value="unpublished" checked={researchStatus==="unpublished"} onChange={()=>setResearchStatus("unpublished")} className="mr-2" />
                <span className="font-medium">Unpublished Research</span>
                <p className="text-xs text-muted mt-1">Ongoing or completed research not yet formally published</p>
              </label>
            </div>
          </section>

          {/* Step 2 - Academic Verification (conditional) */}
          <section className="border border-border rounded-xl p-5">
            <h2 className="font-bold text-primary">Step 2: {researchStatus==="unpublished" ? "Author & Research Details" : "Academic Verification"}</h2>
            {!researchStatus && <p className="text-sm text-muted mt-2">Select Published or Unpublished in Step 1 to see the relevant fields.</p>}
            {researchStatus==="published" && (
              <div className="space-y-4 mt-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Original Research Title *</label>
                  <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter the exact title of your published paper." className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">DOI Link *</label>
                  <input type="url" value={doi} onChange={e=>setDoi(e.target.value)} placeholder="https://doi.org/..." className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Primary Journal / Conference Name *</label>
                  <input value={journal} onChange={e=>setJournal(e.target.value)} placeholder="e.g., IEEE Transactions, Nature, University Journal of Sri Lanka" className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent outline-none" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Year of Publication *</label>
                    <select value={year} onChange={e=>setYear(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-border bg-white focus:border-accent outline-none">
                      <option value="">Select year</option>
                      {years.map(y=> <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Main Author & Affiliation *</label>
                    <input value={authorAff} onChange={e=>setAuthorAff(e.target.value)} placeholder="Dr. Perera, University of Peradeniya" className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent outline-none" />
                  </div>
                </div>
              </div>
            )}
            {researchStatus==="unpublished" && (
              <div className="space-y-4 mt-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Research Title *</label>
                  <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Working title of your research" className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent outline-none" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Main Author & Affiliation *</label>
                    <input value={authorAff} onChange={e=>setAuthorAff(e.target.value)} placeholder="Your name and institution" className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Research Date *</label>
                    <select value={year} onChange={e=>setYear(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-border bg-white focus:border-accent outline-none">
                      <option value="">Select date</option>
                      {years.map(y=> <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Brief Description *</label>
                  <textarea value={unpubDesc} onChange={e=>setUnpubDesc(e.target.value)} rows={4} placeholder="Briefly describe your research, objectives and current stage." className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent outline-none" />
                  <p className="text-xs text-muted mt-1">For unpublished work, just the author info, date and a short description is enough.</p>
                </div>
              </div>
            )}
          </section>

          {/* Step 3 - Implementation Pathway - corrected: commercial vs social */}
          <section className="border border-border rounded-xl p-5 bg-accent/5">
            <h2 className="font-bold text-primary">Step 3: Implementation Pathway</h2>
            <p className="text-sm text-muted mb-1">Choose based on <span className="font-semibold">commercial intent</span>, not just topic.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <p className="text-xs text-blue-800"><span className="font-semibold">Note:</span> Rural livelihood projects that will <em>sell products/services for income</em> (e.g., agritech startup, cottage enterprise) → choose <strong>Enterprise & Commercial</strong>. Technology projects that are <em>free / open-source for public good</em> (e.g., health AI for clinics) → choose <strong>Social Impact</strong>.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <label className={`p-4 rounded-lg border-2 cursor-pointer ${pathway==="commercial"?"border-primary bg-primary/5":"border-border bg-white"}`}>
                <input type="radio" name="pathway" value="commercial" checked={pathway==="commercial"} onChange={()=>setPathway("commercial")} className="mr-2" />
                <span className="font-medium">Enterprise & Commercial Track</span>
                <p className="text-xs text-muted mt-1">For-profit: market, revenue, enterprise creation — can be industrial, tech, <em>or</em> rural cottage/farm products that are sold</p>
              </label>
              <label className={`p-4 rounded-lg border-2 cursor-pointer ${pathway==="social"?"border-primary bg-primary/5":"border-border bg-white"}`}>
                <input type="radio" name="pathway" value="social" checked={pathway==="social"} onChange={()=>setPathway("social")} className="mr-2" />
                <span className="font-medium">Social Impact & Community Track</span>
                <p className="text-xs text-muted mt-1">Non-profit: public good, open-access, community benefit — can be high-tech <em>or</em> grassroots, not primarily for profit</p>
              </label>
            </div>
            {!pathway && <p className="text-sm text-muted">Select a pathway to see readiness levels.</p>}
            {pathway==="commercial" && (
              <div className="bg-white rounded-lg border border-border p-4">
                <p className="text-sm font-semibold mb-2">Technology Readiness Level (TRL) *</p>
                <div className="space-y-2">
                  {[
                    ["TRL 3","Proof of Concept (Formulas, digital simulations, or software logic only)."],
                    ["TRL 4","Laboratory Validation (A raw, non-functional bench model exists)."],
                    ["TRL 5","Functional Prototype (Tested successfully strictly inside a lab environment)."],
                  ].map(([v,desc])=> (
                    <label key={v} className="flex gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="trl" value={v} checked={trl===v} onChange={()=>setTrl(v)} />
                      <span className="text-sm"><span className="font-medium">{v}:</span> {desc}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            {pathway==="social" && (
              <div className="bg-white rounded-lg border border-border p-4">
                <p className="text-sm font-semibold mb-2">Social Readiness Level (SRL) *</p>
                <div className="space-y-2">
                  {[
                    ["SRL 1","Survey & Policy Data (Gathered data on a rural problem, no physical solution yet)."],
                    ["SRL 2","Household Pilot (Tested with 1–5 local families)."],
                    ["SRL 3","Cooperative Ready (Tested and ready for entire village)."],
                  ].map(([v,desc])=> (
                    <label key={v} className="flex gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="srl" value={v} checked={srl===v} onChange={()=>setSrl(v)} />
                      <span className="text-sm"><span className="font-medium">{v}:</span> {desc}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Step 4 */}
          <section className="border border-border rounded-xl p-5">
            <h2 className="font-bold text-primary">Step 4: Regional Context & Impact Metrics</h2>
            <div className="mt-3 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Location *</label>
                <input value={location} onChange={e=>setLocation(e.target.value)} placeholder="e.g., Jaffna, Colombo, Kandy, or specific village / district" className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent outline-none" />
                <p className="text-xs text-muted mt-1">Target location where this research will be implemented.</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">The Real-World Problem * <span className="text-muted font-normal">({countWords(problem)}/250 words)</span></label>
                <textarea value={problem} onChange={e=>setProblem(e.target.value)} rows={4} placeholder="What urgent industry problem or rural community challenge does your research solve?" className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Value Proposition * <span className="text-muted font-normal">({countWords(valueProp)}/250 words)</span></label>
                <p className="text-xs text-muted mb-1">{pathway==="social" || pathway==="rural" ? "How does this increase or stabilize community well-being or household income without primary profit?" : pathway==="commercial" || pathway==="industrial" ? "How does this save money, increase production, or generate revenue/returns?" : "Describe the economic / social value."}</p>
                <textarea value={valueProp} onChange={e=>setValueProp(e.target.value)} rows={4} placeholder="Describe value..." className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent outline-none" />
              </div>
            </div>
          </section>

          {/* Step 5 */}
          <section className="border border-border rounded-xl p-5 bg-gray-50/50">
            <h2 className="font-bold text-primary">Step 5: Resource Requirements (The Implementation Gap)</h2>
            <p className="text-sm text-muted mb-3">Briefly tell us what you need — we’ll provide examples, no need to be highly specific.</p>
            <div>
              <label className="block text-sm font-medium mb-1">Resource Requirements *</label>
              <textarea value={resourceReq} onChange={e=>setResourceReq(e.target.value)} rows={3} placeholder="e.g., lab testing equipment, CNC/3D printer, raw materials or seeds, GPU cluster, training hall, field land — briefly list what you need" className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent outline-none" />
            </div>
          </section>

          {/* Step 6 */}
          <section className="border border-border rounded-xl p-5">
            <h2 className="font-bold text-primary">Step 6: Legal & File Repository</h2>
            <div className="mt-3 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">{researchStatus==="published" ? "Mandatory: Full Published Paper (PDF, Max 10MB) *" : "Optional: Research Document (PDF, Max 10MB)"}</label>
                <input type="file" accept=".pdf" onChange={e=> setFilePaper(e.target.files?.[0]||null)} className="w-full text-sm" />
                {filePaper && <p className="text-xs text-muted mt-1">{filePaper.name} — {(filePaper.size/1024/1024).toFixed(2)} MB</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slide Deck or Video Pitch (PPT, PDF, MP4, Max 50MB) *</label>
                <input type="file" accept=".pdf,.ppt,.pptx,.mp4" onChange={e=> setFileDeck(e.target.files?.[0]||null)} className="w-full text-sm" />
                {fileDeck && <p className="text-xs text-muted mt-1">{fileDeck.name} — {(fileDeck.size/1024/1024).toFixed(2)} MB</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Optional: Blueprints / CAD / Field Handbook (ZIP, Max 100MB)</label>
                <input type="file" accept=".zip" onChange={e=> setFileAssets(e.target.files?.[0]||null)} className="w-full text-sm" />
                {fileAssets && <p className="text-xs text-muted mt-1">{fileAssets.name} — {(fileAssets.size/1024/1024).toFixed(2)} MB</p>}
              </div>
              <label className="flex gap-2 p-3 rounded-lg border border-border bg-gray-50 cursor-pointer">
                <input type="checkbox" checked={ipAgree} onChange={e=>setIpAgree(e.target.checked)} />
                <span className="text-sm">I certify that I/my team own the rights to commercialize or implement this research. Submitting does not transfer my IP to NRI. All uploads will be kept confidential under NDA. *</span>
              </label>
            </div>
          </section>

          <button type="submit" disabled={submitting} className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors disabled:opacity-50">
            {submitting ? "Submitting..." : "Submit for Implementation Review"}
          </button>
        </form>
      )}

      {loading ? <p className="text-muted">Loading...</p> : projects.length===0 ? (
        <div className="bg-white rounded-xl border border-border p-12 text-center">
          <p className="text-muted">No submissions yet. Click “New Submission” above.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((p:any)=> (
            <div key={p.id} className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted">{p.journal || p.researcher_name}{p.year ? ` — ${p.year}`: ""} • {p.researchStatus || p.pathway || p.subject || ""}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${p.status==="approved"?"bg-green-100 text-green-700":p.status==="rejected"?"bg-red-100 text-red-700":"bg-yellow-100 text-yellow-700"}`}>{p.status}</span>
              </div>
              {p.doi && <p className="text-xs text-accent mt-1 break-all">{p.doi}</p>}
              {(p.problem || p.description) && <p className="text-sm text-muted mt-2 line-clamp-3">{p.problem || p.description}</p>}
              <div className="flex flex-wrap gap-2 mt-3">
                {(p.location || p.targetDistricts || p.district) && <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-muted">{p.location || (Array.isArray(p.targetDistricts)?p.targetDistricts.join(", "):p.targetDistricts) || p.district}</span>}
                {p.srl && <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-muted">{p.srl}</span>}
                {p.trl && <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-muted">{p.trl}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
