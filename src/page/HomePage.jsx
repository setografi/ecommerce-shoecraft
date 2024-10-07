import React, { Suspense } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import NewsletterSignup from "../components/home/NewsletterSignup";

const FeaturedSection = React.lazy(() =>
  import("../components/home/FeaturedSection")
);

const NewArrivals = React.lazy(() => import("../components/home/NewArrivals"));
import AboutSection from "../components/home/AboutSection";

const ShopByCategory = React.lazy(() =>
  import("../components/home/ShopByCategory")
);

function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <HeroSection />
      <FeaturedSection />
      <NewArrivals />
      <AboutSection />
      <ShopByCategory />
      <NewsletterSignup />
      <Footer />
    </Suspense>
  );
}

export default HomePage;
