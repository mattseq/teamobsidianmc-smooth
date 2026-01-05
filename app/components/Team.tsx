import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Catalyst",
    role: "Artist & Designer",
    avatar: "https://media.forgecdn.net/avatars/1466/483/638951911511335151.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    links: [
      { label: "Twitter", href: "https://x.com/catalyst2000251" },
      { label: "CurseForge", href: "https://www.curseforge.com/members/catalystmods/projects" },
    ],
    position: { top: "10%", left: "20%" }
  },
  {
    name: "JeremySeq",
    role: "Lead Coder",
    avatar: "https://avatars.githubusercontent.com/u/67425766?v=4",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    links: [
      { label: "GitHub", href: "https://github.com/JeremySeq" },
      { label: "CurseForge", href: "https://www.curseforge.com/members/JeremySeq/projects" },
    ],
    position: { top: "30%", left: "70%" }
  },
  {
    name: "mattseq",
    role: "Coder",
    avatar: "https://media.forgecdn.net/avatars/1456/0/638945103184476192.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    links: [
      { label: "GitHub", href: "https://github.com/mattseq" },
      { label: "CurseForge", href: "https://www.curseforge.com/members/mattseq/projects" },
    ],
    position: { top: "60%", left: "40%" }
  },
];

export default function Team({ className }: { className: string }) {
    return (
        <div className={`${className}`}>
            {team.map((member) => (
                // Card for each member, positioned based on member.position, starts w/o background
                <div 
                    key={member.name}
                    data-member={member.name}
                    className="member-container bg-transparent absolute w-70 flex flex-col items-center rounded-3xl p-2" 
                    style={member.position}
                >
                    {/* profile image */}
                    <img
                        key={member.name}
                        src={member.avatar}
                        alt={`${member.name} Avatar`}
                        data-member-avatar={member.name}
                        className="w-32 h-32 rounded-full border-4 border-obsidian-purple mb-4 mt-4"
                    />

                    {/* Hidden info that appears on hover */}
                    <div data-member-hide={member.name} className="member-hide opacity-0">
                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        <p className="text-obsidian-light-purple mb-2">{member.role}</p>
                        <p className="text-white mb-4 px-4">{member.description}</p>
                        <div className="flex space-x-4 justify-center">
                            {member.links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-obsidian-purple hover:underline"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}