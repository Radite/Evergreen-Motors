import { useState, useEffect, useRef } from 'react';

// Optimized Image Component with lazy loading and progressive enhancement
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '',
  priority = false,
  objectFit = 'cover'
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return; // Skip observer for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading slightly before visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div 
      ref={imgRef}
      className={`optimized-image-wrapper ${className}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Blur placeholder */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
          opacity: isLoaded ? 0 : 1,
          transition: 'opacity 0.5s ease'
        }}
      />
      
      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
        />
      )}
    </div>
  );
};

// Optimized Background Image Component
export const OptimizedBackground = ({
  src,
  children,
  className = '',
  priority = false,
  style = {}
}: {
  src: string;
  children?: React.ReactNode;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px',
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (!shouldLoad) return;

    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [shouldLoad, src]);

  return (
    <div
      ref={divRef}
      className={className}
      style={{
        ...style,
        position: 'relative',
        backgroundImage: isLoaded ? `url(${src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease'
      }}
    >
      {/* Blur placeholder for background */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            filter: 'blur(20px)',
            zIndex: 0
          }}
        />
      )}
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

// Preload critical images
export const preloadImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Preload multiple images
export const preloadImages = (sources: string[]) => {
  sources.forEach(src => preloadImage(src));
};
