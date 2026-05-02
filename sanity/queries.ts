import { client } from './client'
import { groq } from 'next-sanity'

export async function getNews() {
  return client.fetch(
    groq`*[_type == "news"] | order(date desc) {
      _id, title, date, excerpt, "img": image.asset->url, "slug": slug.current
    }`
  )
}

export async function getTeam() {
  return client.fetch(
    groq`*[_type == "teamMember"] | order(_createdAt asc) {
      _id, name, role, bio, "image": image.asset->url
    }`
  )
}

export async function getPricing() {
  return client.fetch(
    groq`*[_type == "priceCategory"] | order(_createdAt asc) {
      _id, title,
      "items": items[] { name, price, unit, description }
    }`
  )
}

export async function getGallery() {
  return client.fetch(
    groq`*[_type == "galleryImage"] | order(_createdAt asc) {
      _id, alt, caption, "url": image.asset->url,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height
    }`
  )
}

export async function getSiteSettings() {
  return client.fetch(
    groq`*[_type == "siteSettings"][0] {
      title, description,
      "heroImage": heroImage.asset->url,
      footerAddress, footerPhone
    }`
  )
}
