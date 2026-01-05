import Image from "next/image";
import AnimationWrapper from "./AnimationProvider";
import Intro from "./components/Intro";

export default function Home() {
  return (
      <main>
        <div id="hero-container" className="top-0 left-0 w-full h-[700vh]">
          <Intro className="sticky w-full h-screen top-0"></Intro>
        </div>
      </main>
  );
}
