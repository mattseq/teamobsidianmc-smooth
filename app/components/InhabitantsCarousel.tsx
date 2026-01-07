const mobs = [
    { name: "Bogre", image: "/concept_showcases/bogre.png" },
    { name: "Warped Clam", image: "/concept_showcases/warped_clam.png" },
    { name: "Impaler", image: "/concept_showcases/impaler.png" }
]

export default function InhabitantsCarousel({ className }: { className?: string }) {
    return (
        <div className={className} id="inhabitants-carousel">
            {
                mobs.map((mob) => (
                    <img src={mob.image} alt={mob.name} key={mob.name} className="absolute mob-card w-[50vw] mb-4 rounded-lg"/>
                ))
            }
            <div id="inhabitants-carousel-dots" className="absolute right-[20%] top-[25vh] flex flex-col gap-3 z-20">
                  {[0,1,2].map((_, i) => (
                      <span
                          key={i}
                          className={`block w-3 h-3 rounded-full border-2 border-obsidian-deep bg-obsidian-purple-light`}
                      />
                  ))}
              </div>
        </div>
    );
}