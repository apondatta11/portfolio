import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";

const Root = () => {
  return (
    <div className=" bg-background ">
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center "
        opacity={0.45}
        gap={10}
        radius={1.6}
        colorLightVar="--color-muted"
        glowColorLightVar="--color-ring"
        colorDarkVar="--color-muted"
        glowColorDarkVar="--color-primary"
        backgroundOpacity={0.05}
        speedMin={0.3}
        speedMax={1.4}
        speedScale={1}
      />
    </div>
  );
};

export default Root;
