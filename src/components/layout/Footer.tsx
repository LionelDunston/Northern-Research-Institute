import Link from "next/link"
import { siteConfig } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 text-white font-bold text-lg">NRI</div>
              <div>
                <div className="text-sm font-semibold leading-tight">Northern Research</div>
                <div className="text-sm font-semibold leading-tight">Institute</div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/gri" className="text-sm text-white/70 hover:text-white transition-colors">GRI Programme</Link></li>
              <li><Link href="/research-programmes" className="text-sm text-white/70 hover:text-white transition-colors">Research</Link></li>
              <li><Link href="/innovation" className="text-sm text-white/70 hover:text-white transition-colors">Innovation</Link></li>
              <li><Link href="/publications" className="text-sm text-white/70 hover:text-white transition-colors">Publications</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Stakeholders</h3>
            <ul className="space-y-2">
              <li><Link href="/gri#graduate-portal" className="text-sm text-white/70 hover:text-white transition-colors">Graduates</Link></li>
              <li><Link href="/gri#investor-portal" className="text-sm text-white/70 hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="/gri#government-portal" className="text-sm text-white/70 hover:text-white transition-colors">Government</Link></li>
              <li><Link href="/partnerships" className="text-sm text-white/70 hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="/knowledge" className="text-sm text-white/70 hover:text-white transition-colors">Knowledge Centre</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Plot 123, Independence Avenue</li>
              <li>Lusaka, Zambia</li>
              <li>+260 211 234 567</li>
              <li>info@nri.org.zm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">&copy; {new Date().getFullYear()} Northern Research Institute. All rights reserved.</p>
          <div className="flex gap-4">
            {["LinkedIn", "Twitter", "Facebook", "YouTube"].map((platform) => (
              <Link key={platform} href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                {platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
