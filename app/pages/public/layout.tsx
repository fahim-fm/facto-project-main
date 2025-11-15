import { Outlet } from "react-router";
import Header from "~/components/layout/header";

import Dashboard from "~/components/pages/home/dashboard/dashboard";
import HeroSection from "~/components/pages/home/hero-section";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <HeroSection />
      <Dashboard />
      
      <Outlet />
    </>
  );
}
