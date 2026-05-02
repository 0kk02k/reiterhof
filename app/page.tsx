import React from 'react';
import HomeContent from './HomeContent';
import { getNews, getTeam, getPricing, getGallery } from '../sanity/queries';

export const revalidate = 60; // Revalidate every minute

export default async function LandingPage() {
  const [newsData, teamData, pricingData, galleryData] = await Promise.all([
    getNews(),
    getTeam(),
    getPricing(),
    getGallery(),
  ]);

  return (
    <HomeContent 
      newsData={newsData}
      teamData={teamData}
      pricingData={pricingData}
      galleryData={galleryData}
    />
  );
}
