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
        <div id="team" className="relative w-full h-[350vh] text-center flex flex-col items-center">
          <div
            className="sticky w-full top-[90vh] h-[50vh] rounded-full"
            style={{
                background: "radial-gradient(circle, var(--obsidian-glass-outline) 0%, transparent 100%)",
                filter: "blur(100px)",
            }}
          />
          <img id="logo" src="/logo.png" className="w-[50%] mt-[30%] z-10" alt="Team Obsidian Logo" />
          <ParticleField className="absolute top-0 left-0 w-full h-[350vh] z-10"></ParticleField>
          <Team className="relative w-full h-screen mt-[30vh] z-20"></Team>
          
        </div>
        <div id="mods-transition" className="relative w-full h-[500vh] bg-obsidian-purple">
          <div id='curved-cover' className='absolute -top-[20vh] w-full h-[25vh] bg-obsidian-purple rounded-t-[50%]'/>
          <div id='mods' className='h-full flex flex-col flex-wrap pt-[10vh]'>
            <div id="inhabitants-section" className="mt-[5vh] w-full h-[300vh] flex flex-col items-center">
              <img id="inhabitants-img" src="/mods/inhabitants.png" alt="" className="sticky top-[30%] w-[50%]" />
              <h1 id="inhabitants-header" className="top-10 text-5xl text-left w-full">Inhabitants</h1>
              <div className="inhabitants-intro">
                
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
