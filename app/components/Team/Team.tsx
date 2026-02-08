import ParticleField from './ParticleField/ParticleField';
import TeamCards from './TeamCards/TeamCards';

export default function Team() {
  return (
    <div id='team' className='relative w-full h-[350vh] text-center flex flex-col items-center'>
      <div
        className='sticky w-full top-[90vh] h-[50vh] rounded-t-full z-25 pointer-events-none'
        style={{
          background: 'radial-gradient(circle, var(--obsidian-glass-outline) 0%, transparent 100%)',
          filter: 'blur(100px)',
        }}
      />
      <img id='logo' src='/logo.png' className='w-[50%] mt-[20%] z-15' alt='Team Obsidian Logo' />
      <ParticleField className='absolute top-0 left-0 w-full h-[350vh] z-10'></ParticleField>
      <TeamCards className='relative w-full h-screen mt-[30vh] z-20'></TeamCards>
    </div>
  );
}
