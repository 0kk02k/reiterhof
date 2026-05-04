/**
 * Storyblok Image URL Helper
 *
 * Storyblok images are served via https://a.storyblok.com/
 * and support on-the-fly transformations via URL parameters.
 *
 * Usage:
 *   storyblokImageUrl('https://a.storyblok.com/f/xxx/image.jpg', { width: 800, height: 600 })
 *   // => https://a.storyblok.com/f/xxx/image.jpg/m/800x600/filters:quality(80):format(webp)
 */

interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
  fit?: 'cover' | 'contain' | 'crop';
  smartCrop?: boolean;
}

export function storyblokImageUrl(url: string, options: ImageOptions = {}): string {
  if (!url) return '';

  // Only transform Storyblok CDN images
  if (!url.includes('a.storyblok.com')) return url;

  const {
    width,
    height,
    quality = 80,
    format = 'webp',
    fit = 'cover',
    smartCrop = true,
  } = options;

  const filters: string[] = [`quality(${quality})`, `format(${format})`];

  if (smartCrop) {
    filters.push('smart');
  }

  const dimensions = width && height ? `${width}x${height}` : width ? `${width}x0` : height ? `0x${height}` : '0x0';
  const fitParam = fit === 'contain' ? '/fit-contain' : fit === 'crop' ? '/smart' : '';

  return `${url}/m/${dimensions}${fitParam}/filters:${filters.join(':')}`;
}

/**
 * Get responsive image attributes for Next.js <Image>
 * Storyblok images need explicit width/height or fill={true}
 */
export function getStoryblokImageProps(url: string, alt: string = '') {
  if (!url) {
    return { src: '', alt };
  }

  return {
    src: url,
    alt,
    // Let Next.js handle format conversion via remotePatterns config
    // Storyblok params are for when we need specific sizes
  };
}
