import Hero from "@/components/hero"
import Features from "@/components/features"
import CourseCategories from "@/components/course-categories"
import PopularCourses from "@/components/popular-courses"
import Stats from "@/components/stats"
import SlidingPartners from "@/components/sliding-partners"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <CourseCategories />
      <PopularCourses />
      <Stats />
      <SlidingPartners />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
