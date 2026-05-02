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
  { url: '/images/gallery-hof-atmosphaere.jpg', alt: 'Hof-Atmosphäre', caption: 'Ein ort zum Durchatmen', width: 400, height: 400 },
  { url: '/images/gallery-landschaft.jpg', alt: 'Weite Landschaften', caption: 'Kloster Lehnin – Natur pur', width: 900, height: 600 },
  { url: '/images/gallery-sonnenuntergang.jpg', alt: 'Sonnenuntergang', caption: 'Abendstimmung über dem Mühlenberg', width: 900, height: 600 },
];

const Gallery: React.FC<GalleryProps> = ({ images = defaultImages }) => {
  return (
    <section id="galerie" className="py-28 bg-sand-100/60">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display text-bark-900 mb-4"
        >
          Impressionen vom Mühlenberg
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-bark-500 mb-14 max-w-xl"
        >
          Einblicke in unseren Hofalltag, unsere Pferde und die Landschaft rund um Kloster Lehnin.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {/* Image 0: Feature – col-span-5, row-span-2 (16:10 landscape) */}
          {images[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer md:col-span-5 md:row-span-2"
            >
              <Image 
                src={images[0].url} 
                alt={images[0].alt} 
                width={images[0].width || 900}
                height={images[0].height || 600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900/60 via-bark-900/0 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">{images[0].alt}</span>
                <p className="text-white text-sm font-medium mt-0.5">{images[0].caption}</p>
              </div>
            </motion.div>
          )}

          {/* Image 1: Portrait – col-span-3, row-span-2 (2:3) */}
          {images[1] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer md:col-span-3 md:row-span-2"
            >
              <Image 
                src={images[1].url} 
                alt={images[1].alt} 
                width={images[1].width || 400}
                height={images[1].height || 600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900/60 via-bark-900/0 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">{images[1].alt}</span>
                <p className="text-white text-sm font-medium mt-0.5">{images[1].caption}</p>
              </div>
            </motion.div>
          )}

          {/* Image 2: Small landscape – col-span-4, row-span-1 (3:2) */}
          {images[2] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer md:col-span-4"
            >
              <Image 
                src={images[2].url} 
                alt={images[2].alt} 
                width={images[2].width || 600}
                height={images[2].height || 400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900/50 via-bark-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">{images[2].alt}</span>
                <p className="text-white text-sm font-medium mt-0.5">{images[2].caption}</p>
              </div>
            </motion.div>
          )}

          {/* Image 3: Square – col-span-2, row-span-1 (1:1) */}
          {images[3] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer md:col-span-2"
            >
              <Image 
                src={images[3].url} 
                alt={images[3].alt} 
                width={images[3].width || 400}
                height={images[3].height || 400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900/50 via-bark-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">{images[3].alt}</span>
                <p className="text-white text-sm font-medium mt-0.5">{images[3].caption}</p>
              </div>
            </motion.div>
          )}

          {/* Image 4: Wide landscape – col-span-6, row-span-1 (16:9) */}
          {images[4] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer md:col-span-6"
            >
              <Image 
                src={images[4].url} 
                alt={images[4].alt} 
                width={images[4].width || 900}
                height={images[4].height || 600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900/50 via-bark-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">{images[4].alt}</span>
                <p className="text-white text-sm font-medium mt-0.5">{images[4].caption}</p>
              </div>
            </motion.div>
          )}

          {/* Image 5: Medium landscape – col-span-6, row-span-1 (16:9) */}
          {images[5] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer md:col-span-6"
            >
              <Image 
                src={images[5].url} 
                alt={images[5].alt} 
                width={images[5].width || 900}
                height={images[5].height || 600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900/50 via-bark-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">{images[5].alt}</span>
                <p className="text-white text-sm font-medium mt-0.5">{images[5].caption}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
