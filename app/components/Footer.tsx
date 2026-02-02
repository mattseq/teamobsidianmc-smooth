"use client";

import { useLenis } from "lenis/react";

export default function Footer({ className }: { className?: string }) {
    const lenis = useLenis();

    return (
        <div className="w-full bg-obsidian-glass-outline flex flex-row items-center px-6 py-4 gap-4">
            <div className="flex flex-row items-center gap-6">
              {/* Logo */}
              <img src="/logo.png" alt="Team Obsidian Logo" className="w-30" />
              {/* Navigation Links */}
              <nav className="flex gap-6">
                <a href="#logo" onClick={() => lenis?.scrollTo("#team")} className="text-white text-lg hover:underline">Team</a>
                <a href="#inhabitants-section" onClick={() => lenis?.scrollTo("#inhabitants-section")} className="text-white text-lg hover:underline">Inhabitants</a>
                <a href="#trinkets" onClick={() => lenis?.scrollTo("#trinkets")} className="text-white text-lg hover:underline">Trinkets</a>
                <a href="#gallery-header" onClick={() => lenis?.scrollTo("#gallery-header")} className="text-white text-lg hover:underline">Gallery</a>
              </nav>
            </div>
            <div className="flex flex-row items-center ml-auto gap-6">
              {/* Social Links */}
              <div className="flex gap-4">
                <a className="icon" href="https://discord.gg/uEh2pBVU88" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                  <img width="50" height="50" src="icons/icons8-discord.svg" alt="discord-logo--v1" className="h-8 w-8"/>
                </a>
                <a className="icon" href="https://x.com/catalyst2000251" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <img width="50" height="50" src="/icons/icons8-x.svg" alt="twitterx--v2" className="h-8 w-8" />
                </a>
                <a className="icon" href="https://github.com/JeremySeq/Inhabitants" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <img width="50" height="50" src="/icons/icons8-github-logo.svg" alt="github--v1" className="h-8 w-8"/>
                </a>
              </div>
              {/* Legal/Contact */}
              <div className="text-xs text-gray-300 text-center md:text-right">
                <p>© 2026 Team Obsidian. All rights reserved.</p>
              </div>
            </div>
        </div>
    )
}