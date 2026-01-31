import PortalIntro from "./components/PortalIntro";
import ParticleField from "./components/ParticleField";
import Team from "./components/Team";
import InhabitantsCarousel from "./components/InhabitantsCarousel";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function Home() {  
  return (
      <main id="main" className="w-full min-h-screen m-0 p-0">
        <div id="intro" className="w-full h-screen">
          <PortalIntro className="w-full"></PortalIntro>
        </div>
        <div id="team" className="relative w-full h-[350vh] text-center flex flex-col items-center">
          <div
            className="sticky w-full top-[90vh] h-[50vh] rounded-t-full z-25"
            style={{
                background: "radial-gradient(circle, var(--obsidian-glass-outline) 0%, transparent 100%)",
                filter: "blur(100px)",
            }}
          />
          <img id="logo" src="/logo.png" className="w-[50%] mt-[20%] z-15" alt="Team Obsidian Logo" />
          <ParticleField className="absolute top-0 left-0 w-full h-[350vh] z-10"></ParticleField>
          <Team className="relative w-full h-screen mt-[30vh] z-20"></Team>
        </div>
        <div id="inhabitants-transition" className="relative w-full h-fit bg-obsidian-purple rounded-b-3xl">
          <div id='curved-cover' className='absolute -top-[20vh] w-full h-[25vh] bg-obsidian-purple rounded-t-[50%]'/>
          <div id="inhabitants-section" className="mt-5 w-full h-screen flex flex-col items-center">
            <h1 id="inhabitants-header" className=" text-4xl text-center w-full">Our Debut Mod<br /><strong className="text-6xl">Inhabitants</strong></h1>
            <p id="inhabitants-description" className="text-center w-[80%] p-5"><strong>Inhabitants</strong> introduces a vibrant cast of original creatures to the world, each designed with unique behaviors, roles, and secrets to uncover. From mysterious denizens lurking in the shadows to helpful companions and formidable foes, every mob enriches the ecosystem with new interactions and challenges. Discover hidden lore, form unlikely alliances, and experience the world of Minecraft like never before as you unravel the stories behind its inhabitants.</p>
            <InhabitantsCarousel className="w-full flex flex-col items-center mt-5"></InhabitantsCarousel>
          </div>
        </div>

        <div id="trinkets" className="w-full h-[300vh] bg-obsidian-black ">
            
        </div>

        <Gallery className="h-max bg-obsidian-deep"></Gallery>

        <footer id="footer">
          <Footer></Footer>
        </footer>
      </main>
  );
}
