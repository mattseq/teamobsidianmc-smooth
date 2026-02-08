import Image from 'next/image';

const mobs = [
  { name: 'Bogre', image: '/concept_showcases/bogre.png' },
  { name: 'Warped Clam', image: '/concept_showcases/warped_clam.png' },
  { name: 'Impaler', image: '/concept_showcases/impaler.png' },
];

export default function InhabitantsCarousel({ className }: { className?: string }) {
  return (
    <div className={className} id='inhabitants-carousel'>
      {mobs.map((mob) => (
        <Image
          src={mob.image}
          alt={mob.name}
          key={mob.name}
          className='mob-card w-[50vw] mb-4 rounded-lg'
          width={900}
          height={600}
        />
      ))}
    </div>
  );
}
