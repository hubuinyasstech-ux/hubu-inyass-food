import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import FeaturedRestaurants from "@/components/home/FeaturedRestaurants";
import PopularMeals from "../components/home/PopularMeals";
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
      <Footer />
    </>
  );
}
