import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import FeaturedRestaurants from "@/components/home/FeaturedRestaurants";
import PopularMeals from "../components/home/PopularMeals";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import AppDownload from "@/components/home/AppDownload";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <FeaturedRestaurants />
      <PopularMeals />
      <HowItWorks />
      <Testimonials />
      <AppDownload />
      <Newsletter />
      <Footer />
    </>
  );
}
