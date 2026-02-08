import path from 'path';
import fs from 'fs';

let cachedImages: string[] | null = null;

function getImages() {
  if (!cachedImages) {
    cachedImages = fs.readdirSync(path.join(process.cwd(), '/public/gallery')).map((file) => `/gallery/${file}`);
  }
  return cachedImages;
}

export default function Gallery({ className }: { className?: string }) {
  const images = getImages();

  return (
    <div className={`w-full p-4 ${className}`}>
      <h1 id='gallery-header' className=' text-4xl text-center w-full mt-10 mb-10'>
        Gallery
      </h1>
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
        {images.map((src, i) => (
          <a href={src} key={i} target='_blank' rel='noopener noreferrer'>
            <img
              src={src}
              alt={`Concept art ${i + 1}`}
              className='gallery-img block mb-4 rounded-lg shadow-lg break-inside-avoid'
            />
          </a>
        ))}
      </div>
    </div>
  );
}
