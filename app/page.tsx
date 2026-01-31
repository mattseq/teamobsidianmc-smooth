"use client";

import PortalIntro from "./components/PortalIntro";
import ParticleField from "./components/ParticleField";
import Team from "./components/Team";
import InhabitantsCarousel from "./components/InhabitantsCarousel";
import { useLenis } from "lenis/react";

export default function Home() {
  const lenis = useLenis();
  
  return (
      <main className="w-full min-h-screen m-0 p-0">
        <div id="intro" className="w-full h-screen">
          <PortalIntro className="w-full"></PortalIntro>
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
          <div id="inhabitants-section" className="mt-5 w-full h-screen flex flex-col items-center">
            <h1 id="inhabitants-header" className=" text-4xl text-center w-full">Our Debut Mod<br /><strong className="text-6xl">Inhabitants</strong></h1>
            <p id="inhabitants-description" className="text-center w-[80%] p-5"><strong>Inhabitants</strong> introduces a vibrant cast of original creatures to the world, each designed with unique behaviors, roles, and secrets to uncover. From mysterious denizens lurking in the shadows to helpful companions and formidable foes, every mob enriches the ecosystem with new interactions and challenges. Discover hidden lore, form unlikely alliances, and experience the world of Minecraft like never before as you unravel the stories behind its inhabitants.</p>
            <InhabitantsCarousel className="w-full flex flex-col items-center mt-5"></InhabitantsCarousel>
          </div>
        </div>

        <div id="trinkets" className="w-full h-[300vh] bg-obsidian-black ">

        </div>

        <footer>
          <div className="w-full bg-obsidian-glass-outline flex flex-row items-center px-6 py-4 gap-4">
            <div className="flex flex-row items-center gap-6">
              {/* Logo or Brand */}
              <img src="/logo.png" alt="Team Obsidian Logo" className="w-20" />
              {/* Navigation Links */}
              <nav className="flex gap-6">
                <a href="#logo" onClick={() => lenis?.scrollTo("#team")} className="text-white hover:underline">Team</a>
                <a href="#inhabitants-section" onClick={() => lenis?.scrollTo("#inhabitants-section")} className="text-white hover:underline">Inhabitants</a>
                <a href="#trinkets" onClick={() => lenis?.scrollTo("#trinkets")} className="text-white hover:underline">Trinkets</a>
              </nav>
            </div>
            <div className="flex flex-row items-center ml-auto gap-6">
              {/* Social Links */}
              <div className="flex gap-4">
                <a className="icon" href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                  <img width="50" height="50" src="icons/icons8-discord.svg" alt="discord-logo--v1" className="h-6 w-6"/>
                </a>
                <a className="icon" href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <img width="50" height="50" src="/icons/icons8-x.svg" alt="twitterx--v2" className="h-6 w-6" />
                </a>
                <a className="icon" href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <img width="50" height="50" src="/icons/icons8-github-logo.svg" alt="github--v1" className="h-6 w-6"/>
                </a>
              </div>
              {/* Legal/Contact */}
              <div className="text-xs text-gray-300 text-center md:text-right">
                <p>© 2026 Team Obsidian. All rights reserved.</p>
              </div>
            </div>
            
          </div>
        </footer>
      </main>
  );
}
