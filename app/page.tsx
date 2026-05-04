import React from 'react';
import HomeContent from './HomeContent';
import { getNews, getTeam, getPricing, getGallery, getEvents } from '../sanity/queries';

export const revalidate = 60; // Revalidate every minute

export default async function LandingPage() {
  const [newsData, teamData, pricingData, galleryData, eventData] = await Promise.all([
    getNews(),
    getTeam(),
    getPricing(),
    getGallery(),
    getEvents(),
  ]);

  return (
    <HomeContent 
      newsData={newsData}
      teamData={teamData}
      pricingData={pricingData}
      galleryData={galleryData}
      eventData={eventData}
    />
  );
}
