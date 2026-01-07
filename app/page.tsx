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
            <div id="inhabitants-section" className="sticky top-5 mt-5 w-full h-screen flex flex-col items-center">
              <h1 id="inhabitants-header" className=" text-4xl text-center w-full">Our Debut Mod<br /><strong className="text-6xl">Inhabitants</strong></h1>
              <p id="inhabitants-description" className="text-center w-[80%] p-5"><strong>Inhabitants</strong> introduces a vibrant cast of original creatures to the world, each designed with unique behaviors, roles, and secrets to uncover. From mysterious denizens lurking in the shadows to helpful companions and formidable foes, every mob enriches the ecosystem with new interactions and challenges. Discover hidden lore, form unlikely alliances, and experience the world of Minecraft like never before as you unravel the stories behind its inhabitants.</p>
              <InhabitantsCarousel className="w-full flex flex-col items-center mt-5"></InhabitantsCarousel>
            </div>
          </div>
        </div>

        <div id="trinkets" className="w-full h-[300vh] bg-obsidian-black ">

        </div>
      </main>
  );
}
