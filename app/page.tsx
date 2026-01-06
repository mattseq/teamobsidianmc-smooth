import Image from "next/image";
import AnimationWrapper from "./AnimationProvider";
import PortalIntro from "./components/PortalIntro";
import ParticleField from "./components/ParticleField";
import Team from "./components/Team";
import InhabitantsCarousel from "./components/InhabitantsCarousel";

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
          <img id="logo" src="/logo.png" className="w-[50%] mt-[20%] z-10" alt="Team Obsidian Logo" />
          <ParticleField className="absolute top-0 left-0 w-full h-[350vh] z-10"></ParticleField>
          <Team className="relative w-full h-screen mt-[30vh] z-20"></Team>
          
        </div>
        <div id="inhabitants-transition" className="relative w-full h-fit bg-obsidian-purple rounded-b-3xl">
          <div id='curved-cover' className='absolute -top-[20vh] w-full h-[25vh] bg-obsidian-purple rounded-t-[50%]'/>
          <div id='inhabitants-wrapper' className='h-[600vh] pt-[10vh]'>
            <div id="inhabitants-section" className="sticky top-10 mt-[5vh] w-full h-screen flex flex-col items-center">
              <h1 id="inhabitants-header" className=" text-4xl text-center w-fullt">Our Debut Mod<br /><strong className="text-6xl">Inhabitants</strong></h1>
              <InhabitantsCarousel className="w-full flex flex-col items-center mt-10"></InhabitantsCarousel>
              <div id="inhabitants-carousel-dots" className="absolute right-[20%] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                  {[0,1,2].map((_, i) => (
                      <span
                          key={i}
                          className={`block w-3 h-3 rounded-full border-2 border-obsidian-deep bg-obsidian-purple-light`}
                      />
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div id="trinkets" className="w-full h-[300vh] bg-obsidian-black ">

        </div>
      </main>
  );
}
