import InhabitantsCarousel from './InhabitantsCarousel/InhabitantsCarousel';

export default function InhabitantsSection() {
  return (
    <div id='inhabitants-section' className='w-full h-screen flex flex-col items-center bg-obsidian-purple'>
      <h1 id='inhabitants-header' className='mt-5 text-4xl text-center w-full'>
        Our Debut Mod
        <br />
        <strong className='text-6xl'>Inhabitants</strong>
      </h1>
      <p id='inhabitants-description' className='text-center w-[40%] p-5'>
        <strong>Inhabitants</strong> introduces a vibrant cast of original creatures, each designed with unique
        behaviors and secrets to uncover. Discover hidden lore, unexpected interactions, and creatures that feel right
        at home in Minecraft.
      </p>
      <InhabitantsCarousel className='w-full flex flex-row items-center gap-5 mt-5 overflow-x-hidden'></InhabitantsCarousel>
    </div>
  );
}
