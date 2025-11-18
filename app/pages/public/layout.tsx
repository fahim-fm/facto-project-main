import { Outlet } from "react-router";
import Header from "~/components/layout/header";
import AboutCasa from "~/components/pages/home/aboutcasa";

import Dashboard from "~/components/pages/home/dashboard/dashboard";
import Work from "~/components/pages/home/work";

import HeroSection from "~/components/pages/home/hero-section";
import Trust from "~/components/pages/home/trusted";
import Different from "~/components/pages/home/different";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <HeroSection />
      <Dashboard />     
      <Outlet />
      <Trust />
      <AboutCasa />
      <Work />
      <Different />
    </>
  );
}
