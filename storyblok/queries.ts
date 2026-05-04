/**
 * Storyblok Data Fetching Queries
 *
 * Each function fetches data from Storyblok and maps it to the
 * same interface that the Blueprint components expect.
 * Falls back to empty arrays when Storyblok is not configured.
 */

import Storyblok from './client';

// ---------------------------------------------------------------------------
// Types matching the Blueprint component interfaces
// ---------------------------------------------------------------------------

export interface NewsItem {
  _id: string;
  title: string;
  date: string;
  excerpt: string;
  body?: string;
  img: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface GalleryImage {
  _id: string;
  url: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

export interface PriceCategory {
  _id: string;
  title: string;
  items: PriceItem[];
}

export interface PriceItem {
  name: string;
  price: string;
  unit?: string;
  description?: string;
}

export interface EventItem {
  _id: string;
  title: string;
  date: string;
  description?: string;
  link?: string;
}

// ---------------------------------------------------------------------------
// Helper: safe fetch that returns [] when Storyblok is not configured
// ---------------------------------------------------------------------------

async function safeFetch<T>(fetcher: () => Promise<T[]>): Promise<T[]> {
  try {
    if (!process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN) {
      return [];
    }
    return await fetcher();
  } catch (error) {
    console.warn('[Storyblok] Fetch failed, using fallback data:', error);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

export async function getNews(): Promise<NewsItem[]> {
  return safeFetch(async () => {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'news/',
      sort_by: 'first_published_at:desc',
      per_page: 10,
      version: 'published',
    });

    return data.stories.map((story: any) => ({
      _id: story.id,
      title: story.content.title || story.name,
      date: story.first_published_at
        ? new Date(story.first_published_at).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })
        : '',
      excerpt: story.content.excerpt || '',
      body: story.content.body || '',
      img: story.content.image?.filename || story.content.image || '/images/news-placeholder.jpg',
    }));
  });
}

export async function getTeam(): Promise<TeamMember[]> {
  return safeFetch(async () => {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'team/',
      per_page: 20,
      version: 'published',
    });

    return data.stories.map((story: any) => ({
      _id: story.id,
      name: story.content.name || story.name,
      role: story.content.role || '',
      bio: story.content.bio || '',
      image: story.content.photo?.filename || undefined,
    }));
  });
}

export async function getPricing(): Promise<PriceCategory[]> {
  return safeFetch(async () => {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'preise/',
      per_page: 20,
      version: 'published',
    });

    return data.stories.map((story: any) => ({
      _id: story.id,
      title: story.content.title || story.name,
      items: (story.content.items || []).map((item: any) => ({
        name: item.name || '',
        price: item.price || '',
        unit: item.unit || undefined,
        description: item.description || undefined,
      })),
    }));
  });
}

export async function getGallery(): Promise<GalleryImage[]> {
  return safeFetch(async () => {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'galerie/',
      per_page: 30,
      version: 'published',
    });

    return data.stories.map((story: any) => {
      const img = story.content.image?.filename || story.content.image || '';
      return {
        _id: story.id,
        url: img,
        alt: story.content.alt || story.content.title || story.name,
        caption: story.content.caption || '',
        width: story.content.width || undefined,
        height: story.content.height || undefined,
      };
    });
  });
}

export async function getEvents(): Promise<EventItem[]> {
  return safeFetch(async () => {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'events/',
      sort_by: 'content.date:asc',
      per_page: 20,
      version: 'published',
      filter_query: {
        date: { gt_date: new Date().toISOString().split('T')[0] },
      },
    });

    return data.stories.map((story: any) => ({
      _id: story.id,
      title: story.content.title || story.name,
      date: story.content.date || '',
      description: story.content.description || '',
      link: story.content.link?.url || story.content.link?.cached_url || undefined,
    }));
  });
}

/**
 * Fetch archived events (past events) for event history
 */
export async function getEventsArchive(page: number = 1, perPage: number = 10): Promise<{ items: EventItem[]; total: number }> {
  return safeFetch(async () => {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'events/',
      sort_by: 'content.date:desc',
      per_page: perPage,
      page: page,
      version: 'published',
      filter_query: {
        date: { lt_date: new Date().toISOString().split('T')[0] },
      },
    });

    return {
      items: data.stories.map((story: any) => ({
        _id: story.id,
        title: story.content.title || story.name,
        date: story.content.date || '',
        description: story.content.description || '',
        link: story.content.link?.url || story.content.link?.cached_url || undefined,
      })),
      total: data.total,
    };
  });
}

/**
 * Fetch paginated news for archive view
 */
export async function getNewsPaginated(page: number = 1, perPage: number = 9): Promise<{ items: NewsItem[]; total: number }> {
  return safeFetch(async () => {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'news/',
      sort_by: 'first_published_at:desc',
      per_page: perPage,
      page: page,
      version: 'published',
    });

    return {
      items: data.stories.map((story: any) => ({
        _id: story.id,
        title: story.content.title || story.name,
        date: story.first_published_at
          ? new Date(story.first_published_at).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })
          : '',
        excerpt: story.content.excerpt || '',
        body: story.content.body || '',
        img: story.content.image?.filename || story.content.image || '/images/news-placeholder.jpg',
      })),
      total: data.total,
    };
  });
}

/**
 * Fetch paginated gallery images for archive view
 */
export async function getGalleryPaginated(page: number = 1, perPage: number = 12): Promise<{ items: GalleryImage[]; total: number }> {
  return safeFetch(async () => {
    const { data } = await Storyblok.get('cdn/stories', {
      starts_with: 'galerie/',
      sort_by: 'first_published_at:desc',
      per_page: perPage,
      page: page,
      version: 'published',
    });

    return {
      items: data.stories.map((story: any) => {
        const img = story.content.image?.filename || story.content.image || '';
        return {
          _id: story.id,
          url: img,
          alt: story.content.alt || story.content.title || story.name,
          caption: story.content.caption || '',
          width: story.content.width || undefined,
          height: story.content.height || undefined,
        };
      }),
      total: data.total,
    };
  });
}

/**
 * Fetch all data in parallel for the landing page.
 */
export async function getAllData() {
  const [newsData, teamData, pricingData, galleryData, eventData] = await Promise.all([
    getNews(),
    getTeam(),
    getPricing(),
    getGallery(),
    getEvents(),
  ]);

  return { newsData, teamData, pricingData, galleryData, eventData };
}
