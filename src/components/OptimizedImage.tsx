import { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  webpSrc?: string;
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  webpSrc,
  fallbackSrc,
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isWebpSupported, setIsWebpSupported] = useState(false);

  useEffect(() => {
    // Check WebP support
    const checkWebPSupport = () => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        setIsWebpSupported(webP.height === 2);
      };
      webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    };

    checkWebPSupport();

    // Load appropriate image
    const loadImage = () => {
      const img = new Image();
      img.onload = () => {
        setImageSrc(img.src);
      };

      // Use WebP if supported and available, otherwise fallback
      if (isWebpSupported && webpSrc) {
        img.src = webpSrc;
      } else if (fallbackSrc) {
        img.src = fallbackSrc;
      } else {
        img.src = src;
      }
    };

    loadImage();
  }, [src, webpSrc, fallbackSrc, isWebpSupported]);

  if (!imageSrc) {
    return (
      <div className={`bg-muted animate-pulse ${className}`}>
        <div className="w-full h-full bg-muted/50 rounded" />
      </div>
    );
  }

  return <img src={imageSrc} alt={alt} className={className} loading={loading} />;
}
