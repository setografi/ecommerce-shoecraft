import React, { Suspense } from "react";

import HeroSection from "../components/home/HeroSection";
import NewsletterSignup from "../components/home/NewsletterSignup";
// import FeaturedSection from "../components/home/FeaturedSection";
// import NewArrivals from "../components/home/NewArrivals";
// import AboutSection from "../components/home/AboutSection";
// import ShopByCategory from "../components/home/ShopByCategory";

const FeaturedSection = React.lazy(() =>
  import("../components/home/FeaturedSection")
);

const NewArrivals = React.lazy(() => import("../components/home/NewArrivals"));
const AboutSection = React.lazy(() =>
  import("../components/home/AboutSection")
);
const ShopByCategory = React.lazy(() =>
  import("../components/home/ShopByCategory")
);

function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <FeaturedSection />
      <NewArrivals />
      <AboutSection />
      <ShopByCategory />
      <NewsletterSignup />
    </Suspense>
  );
}

export default HomePage;
