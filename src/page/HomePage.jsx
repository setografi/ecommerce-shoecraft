import React from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import FeaturedSection from "../components/home/FeaturedSection";
import NewArrivals from "../components/home/NewArrivals";
import AboutSection from "../components/home/AboutSection";
import CustomerReviews from "../components/home/CustomerReviews";
import ShopByCategory from "../components/home/ShopByCategory";
import NewsletterSignup from "../components/home/NewsletterSignup";
import SocialMediaFeed from "../components/home/SocialMediaFeed";

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedSection />
      <NewArrivals />
      <AboutSection />
      {/* <CustomerReviews /> */}
      <ShopByCategory />
      <NewsletterSignup />
      <SocialMediaFeed />
      <Footer />
    </div>
  );
}

export default HomePage;
