import React from "react";
import path from "path";
import fs from "fs";

export default function Gallery({ className }: { className?: string }) {
    const images = fs.readdirSync(path.join(process.cwd(), "/public/gallery")).map(file => `/gallery/${file}`);

    return (
        <div className={`w-full p-4 ${className}`}>
            <h1 className=" text-4xl text-center w-full mt-10 mb-10">Gallery</h1>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`Concept art ${i + 1}`}
                    className="block mb-4 rounded-lg shadow-lg break-inside-avoid"
                />
                ))}
            </div>
        </div>
    );
}