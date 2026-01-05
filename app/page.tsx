import Image from "next/image";
import AnimationWrapper from "./AnimationProvider";
import PortalIntro from "./components/PortalIntro";
import ParticleField from "./components/ParticleField";
import Team from "./components/Team";

export default function Home() {
  return (
      <main>
        <div id="intro" className="top-0 left-0 w-full h-[300vh]">
          <PortalIntro className="sticky w-full h-screen top-0"></PortalIntro>
        </div>
        <div id="team" className="relative w-full h-[300vh] text-center flex flex-col items-center">
          <img id="logo" src="/logo.png" className="w-[50%] mt-[30%] z-10" alt="Team Obsidian Logo" />
          <ParticleField className="absolute top-0 left-0 w-full h-[300vh] z-10"></ParticleField>
          <Team className="relative w-full h-screen mt-[30vh] z-20"></Team>
        </div>
      </main>
  );
}
