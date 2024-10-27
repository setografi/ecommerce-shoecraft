import React, { Suspense, useState, useEffect } from "react";

import Loading from "../components/layout/LoadingPage";
import HeroSection from "../components/home/HeroSection";
import NewsletterSignup from "../components/home/NewsletterSignup";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading time minimal
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(minLoadTime);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
