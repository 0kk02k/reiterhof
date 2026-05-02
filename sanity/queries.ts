import { client } from './client'
import { groq } from 'next-sanity'

// Helper function to safely fetch data and avoid build crashes when Sanity is not configured
async function safeFetch(query: string, fallback: any = []) {
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'dummy-project-id' || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.warn('Sanity is not configured. Returning fallback data.');
    return fallback;
  }
  
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return fallback;
  }
}

export async function getNews() {
  return safeFetch(
    groq`*[_type == "news"] | order(date desc) {
      _id, title, date, excerpt, "img": image.asset->url, "slug": slug.current
    }`
  )
}

export async function getTeam() {
  return safeFetch(
    groq`*[_type == "teamMember"] | order(_createdAt asc) {
      _id, name, role, bio, "image": image.asset->url
    }`
  )
}

export async function getPricing() {
  return safeFetch(
    groq`*[_type == "priceCategory"] | order(_createdAt asc) {
      _id, title,
      "items": items[] { name, price, unit, description }
    }`
  )
}

export async function getGallery() {
  return safeFetch(
    groq`*[_type == "galleryImage"] | order(_createdAt asc) {
      _id, alt, caption, "url": image.asset->url,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height
    }`
  )
}

export async function getSiteSettings() {
  return safeFetch(
    groq`*[_type == "siteSettings"][0] {
      title, description,
      "heroImage": heroImage.asset->url,
      footerAddress, footerPhone
    }`,
    null
  )
}
