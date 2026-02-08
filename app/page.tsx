import Intro from './components/Intro/Intro';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import InhabitantsSection from './components/InhabitantsSection/InhabitantsSection';

export default function Home() {
  return (
    <main id='main' className='w-full min-h-screen m-0 p-0'>
      <Intro></Intro>

      <Team></Team>

      <InhabitantsSection></InhabitantsSection>

      <div id='trinkets' className='w-full h-[300vh] bg-obsidian-black '></div>

      <Gallery className='h-max bg-obsidian-deep'></Gallery>

      <Footer></Footer>
    </main>
  );
}
