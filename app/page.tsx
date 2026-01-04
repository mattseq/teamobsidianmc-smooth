import Image from "next/image";
import AnimationWrapper from "./AnimationProvider";
import ScrollImage from "./components/ScrollImage";

export default function Home() {
  return (
      <main>
        <div id="hero-container" className="top-0 left-0 w-full h-[700vh]">
          <ScrollImage className="w-full sticky top-0 bg-black"></ScrollImage>
        </div>
      </main>
  );
}
