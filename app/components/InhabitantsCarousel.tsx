const mobs = [
    { name: "Bogre", image: "/concept_showcases/bogre.png", description: "" },
    { name: "Warped Clam", image: "/concept_showcases/warped_clam.png", description: "" },
    { name: "Impaler", image: "/concept_showcases/impaler.png", description: "" }
]

export default function InhabitantsCarousel({ className }: { className?: string }) {
    return (
        <div className={className} id="inhabitants-carousel">
            {
                mobs.map((mob) => (
                    <img src={mob.image} alt={mob.name} key={mob.name} className="absolute mob-card w-[50vw] mb-4 rounded-lg"/>
                ))
            }
        </div>
    );
}