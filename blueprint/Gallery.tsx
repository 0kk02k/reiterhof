'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const viewportOnce = { once: true, margin: '-60px' } as const;

interface GalleryImage {
  _id?: string;
  url: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

interface GalleryProps {
  images?: GalleryImage[];
}

const defaultImages = [
  { url: '/images/gallery-pferde-weide.jpg', alt: 'Pferde auf der Weide', caption: 'Unsere Schulpferde auf den Brandenburger Wiesen', width: 900, height: 600 },
  { url: '/images/gallery-reitunterricht.jpg', alt: 'Reitunterricht', caption: 'Individueller Unterricht in kleiner Gruppe', width: 400, height: 600 },
  { url: '/images/gallery-pferdeportrait.jpg', alt: 'Pferdeportrait', caption: 'Harmonie zwischen Mensch und Tier', width: 600, height: 400 },
  { url: '/images/gallery-hof-atmosphaere.jpg', alt: 'Hof-Atmosphäre', caption: 'Ein Ort zum Durchatmen', width: 400, height: 400 },
  { url: '/images/gallery-landschaft.jpg', alt: 'Weite Landschaften', caption: 'Kloster Lehnin – Natur pur', width: 900, height: 600 },
  { url: '/images/gallery-sonnenuntergang.jpg', alt: 'Sonnenuntergang', caption: 'Abendstimmung über dem Mühlenberg', width: 900, height: 600 },
];

const rotations = [
  '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1', '-rotate-[1.5deg]', 'rotate-[2.5deg]'
];

const masks = [
  'url(/masks/edge-1.svg)', 'url(/masks/edge-2.svg)', 'url(/masks/edge-3.svg)'
];

const colSpans = [
  'md:col-span-7', 'md:col-span-5', 'md:col-span-6', 'md:col-span-6', 'md:col-span-8', 'md:col-span-4'
];

const margins = [
  'mt-0', 'mt-12 md:-ml-8', 'mt-8', 'mt-4 md:-ml-12', 'mt-16', 'mt-8 md:-ml-6'
];

const Gallery: React.FC<GalleryProps> = ({ images = defaultImages }) => {
  return (
    <section id="galerie" className="py-28 relative bg-paper overflow-hidden">
      {/* Subtle Linen Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-4">Impressionen vom Hof</h2>
          <p className="text-bark-500 max-w-xl text-lg leading-relaxed">
            Einblicke in unseren Alltag, unsere Pferde und die friedliche Landschaft rund um Kloster Lehnin.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-16 pt-4 px-6 md:px-[20vw] hide-scrollbar -mx-6">
          {images.map((img, i) => (
            <motion.div
              key={img.url + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex-none w-[85vw] md:w-[450px] snap-center group cursor-grab active:cursor-grabbing ${rotations[i % rotations.length]}`}
            >
              <div className="bg-sand-50 p-4 md:p-5 pb-10 md:pb-14 shadow-rustic rounded-sm transition-all duration-500 group-hover:rotate-0 group-hover:-translate-y-4 group-hover:shadow-2xl border border-sand-200/50">
                <div 
                  className="relative overflow-hidden bg-sand-200 shadow-inner"
                  style={{
                    WebkitMaskImage: masks[i % masks.length],
                    WebkitMaskSize: '100% 100%',
                    WebkitMaskRepeat: 'no-repeat',
                    maskImage: masks[i % masks.length],
                    maskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                    aspectRatio: `${img.width || 4} / ${img.height || 3}`,
                  }}
                >
                  <Image 
                    src={img.url} 
                    alt={img.alt} 
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
                  />
                </div>
                
                <div className="mt-6 px-2 text-center transform -rotate-1">
                  <p className="font-caption italic text-bark-800 text-xl leading-snug">
                    {img.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for hide-scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default Gallery;
