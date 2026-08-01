import { Hero } from "@/components/sections/Hero"
import { StatsBar } from "@/components/sections/StatsBar"
import { WelcomeMessage } from "@/components/sections/WelcomeMessage"
import { FeaturedResearch } from "@/components/sections/FeaturedResearch"
import { SuccessStories } from "@/components/sections/SuccessStories"
import { NewsSection } from "@/components/sections/NewsSection"
import { QuickLinks } from "@/components/sections/QuickLinks"

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WelcomeMessage />
      <FeaturedResearch />
      <SuccessStories />
      <NewsSection />
      <QuickLinks />
    </>
  )
}
