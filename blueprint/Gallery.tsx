'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const masks = [
  'url(/masks/edge-1.svg)', 'url(/masks/edge-2.svg)', 'url(/masks/edge-3.svg)'
];

const gridClasses = [
  'md:col-span-7', 
  'md:col-span-5 md:mt-40', 
  'md:col-span-5 md:-mt-12', 
  'md:col-span-7 md:mt-24', 
  'md:col-span-8 md:-mt-8', 
  'md:col-span-4 md:mt-32'
];

const textPositions = [
  '-bottom-10 -right-4 md:-right-8',   // 0: right
  '-bottom-12 -left-4 md:-left-8',     // 1: left
  '-bottom-8 -right-4 md:-right-8',    // 2: right
  '-bottom-14 -left-4 md:-left-12',    // 3: left
  '-bottom-10 -right-4 md:-right-10',  // 4: right
  '-bottom-12 -left-4 md:-left-8'      // 5: left
];

const GalleryItem = ({ img, index }: { img: GalleryImage; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  
  // Sanftes Parallax-Verhalten
  const yImage = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const yText = useTransform(scrollYProgress, [0, 1], [40, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1 }}
      className={`relative w-full ${gridClasses[index % gridClasses.length]} mb-24 md:mb-0`}
    >
      {/* Akzent-Element (Bildnummer) bricht die äußere Kante */}
      <span className="absolute -top-12 -left-6 md:-top-16 md:-left-10 text-7xl md:text-9xl font-display text-bark-900/5 z-0 select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Container für das asymmetrische Bild */}
      <motion.div 
        className="relative w-full z-10"
        style={{ y: yImage }}
      >
        <div
          className="relative w-full bg-sand-200 overflow-hidden shadow-rustic group"
          style={{
            WebkitMaskImage: masks[index % masks.length],
            WebkitMaskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskImage: masks[index % masks.length],
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
      </motion.div>

      {/* Überlappende Textbox (15-20%) mit Parallax-Scroll */}
      <motion.div
        className={`absolute ${textPositions[index % textPositions.length]} w-4/5 md:w-3/4 bg-paper p-6 md:p-8 shadow-2xl z-20 border border-sand-200/50`}
        style={{ y: yText }}
      >
        <p className="font-caption italic text-bark-800 text-lg md:text-xl leading-relaxed">
          {img.caption}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Gallery: React.FC<GalleryProps> = ({ images = defaultImages }) => {
  return (
    <section id="galerie" className="py-32 relative bg-sand-100 overflow-hidden">
      {/* Subtile Leinen-Textur für den Modern Rustic Look */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
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
          className="text-center mb-24 md:mb-40"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-bark-900 mb-6">Impressionen vom Hof</h2>
          <p className="text-bark-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Einblicke in unseren Alltag, unsere Pferde und die friedliche Landschaft rund um Kloster Lehnin.
          </p>
        </motion.div>

        {/* Asymmetrisches CSS-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 lg:gap-x-16">
          {images.map((img, i) => (
            <GalleryItem key={img.url + i} img={img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;