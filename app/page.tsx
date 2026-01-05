import Image from "next/image";
import AnimationWrapper from "./AnimationProvider";
import PortalIntro from "./components/PortalIntro";
import ParticleField from "./components/ParticleField";

export default function Home() {
  return (
      <main>
        <div id="intro" className="top-0 left-0 w-full h-[300vh]">
          <PortalIntro className="sticky w-full h-screen top-0"></PortalIntro>
        </div>
        <div id="team" className="relative w-full h-[200vh] text-center flex justify-center items-center">
          <img id="logo" src="/logo.png" className="w-[50%] z-10" alt="Team Obsidian Logo" />
          <ParticleField className="absolute top-0 left-0 w-full h-[200vh] z-0"></ParticleField>
        </div>
      </main>
  );
}
