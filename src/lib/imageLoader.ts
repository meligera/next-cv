// lib/imageLoader.ts

interface ImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
  }
  
  export const imageLoader = ({ src, width, quality = 100 }: ImageLoaderProps) => {
    // If the image source is already a full URL, return it as is
    if (src.startsWith('http') || src.startsWith('data:')) {
      return src;
    }
  
    // For local images, return the path as is
    // You can modify this to use a CDN or other image optimization service
    return src;
  };