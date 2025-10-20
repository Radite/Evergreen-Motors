import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface InstagramMedia {
  type: 'image' | 'video';
  url: string;
  thumbnailUrl?: string;
}

interface InstagramPost {
  id: number;
  media: InstagramMedia[];
  caption: string;
  instagramUrl: string;
  alt: string;
}

interface InstagramLightboxProps {
  posts: InstagramPost[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const InstagramLightbox = ({ posts, initialIndex, isOpen, onClose }: InstagramLightboxProps) => {
  const [currentPostIndex, setCurrentPostIndex] = useState(initialIndex);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setCurrentPostIndex(initialIndex);
    setCurrentMediaIndex(0); // Reset to first media when changing posts
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPreviousItem();
      if (e.key === 'ArrowRight') goToNextItem();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentPostIndex, currentMediaIndex]);

  // Auto-play video when it changes
  useEffect(() => {
    if (videoRef.current && currentMedia.type === 'video') {
      videoRef.current.play();
    }
  }, [currentPostIndex, currentMediaIndex]);

  const goToNextItem = () => {
    const currentPost = posts[currentPostIndex];
    
    // If there are more media items in current post, show next media
    if (currentMediaIndex < currentPost.media.length - 1) {
      setCurrentMediaIndex(prev => prev + 1);
    } else {
      // Go to next post and reset media index
      setCurrentPostIndex((prev) => (prev + 1) % posts.length);
      setCurrentMediaIndex(0);
    }
  };

  const goToPreviousItem = () => {
    // If not at first media, go to previous media in current post
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(prev => prev - 1);
    } else {
      // Go to previous post and show its last media
      const prevPostIndex = (currentPostIndex - 1 + posts.length) % posts.length;
      setCurrentPostIndex(prevPostIndex);
      setCurrentMediaIndex(posts[prevPostIndex].media.length - 1);
    }
  };

  const goToNextPost = () => {
    setCurrentPostIndex((prev) => (prev + 1) % posts.length);
    setCurrentMediaIndex(0);
  };

  const goToPreviousPost = () => {
    setCurrentPostIndex((prev) => (prev - 1 + posts.length) % posts.length);
    setCurrentMediaIndex(0);
  };

  const goToMediaIndex = (index: number) => {
    setCurrentMediaIndex(index);
  };

  if (!isOpen) return null;

  const currentPost = posts[currentPostIndex];
  const currentMedia = currentPost.media[currentMediaIndex];
  const hasMultipleMedia = currentPost.media.length > 1;

  return (
    <div className="instagram-lightbox-overlay" onClick={onClose}>
      <style>{`
        .instagram-lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .instagram-lightbox-container {
          position: relative;
          max-width: 1200px;
          width: 90%;
          max-height: 90vh;
          display: flex;
          background: #000;
          border-radius: 4px;
          overflow: hidden;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .instagram-lightbox-media {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          position: relative;
          min-width: 0;
        }

        .instagram-lightbox-media img,
        .instagram-lightbox-media video {
          max-width: 100%;
          max-height: 90vh;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        .instagram-lightbox-sidebar {
          width: 400px;
          background: #fff;
          display: flex;
          flex-direction: column;
          border-left: 1px solid #dbdbdb;
        }

        .instagram-lightbox-header {
          padding: 20px;
          border-bottom: 1px solid #dbdbdb;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .instagram-lightbox-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .instagram-lightbox-username {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: #262626;
        }

        .instagram-lightbox-caption-area {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
        }

        .instagram-lightbox-caption {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #262626;
        }

        .instagram-lightbox-caption strong {
          font-weight: 600;
          margin-right: 8px;
        }

        .instagram-lightbox-footer {
          padding: 20px;
          border-top: 1px solid #dbdbdb;
        }

        .instagram-view-original {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: transparent;
          border: 1px solid #dbdbdb;
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #262626;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          justify-content: center;
          width: 100%;
        }

        .instagram-view-original:hover {
          background: #fafafa;
          border-color: #262626;
        }

        .instagram-lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .instagram-lightbox-close:hover {
          background: white;
          transform: rotate(90deg);
        }

        .instagram-lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .instagram-lightbox-nav:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
        }

        .instagram-lightbox-nav-left {
          left: 20px;
        }

        .instagram-lightbox-nav-right {
          right: 20px;
        }

        .instagram-lightbox-counter {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        /* Media indicators (dots) for carousels */
        .instagram-media-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 5;
        }

        .instagram-media-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .instagram-media-dot.active {
          background: white;
          transform: scale(1.2);
        }

        .instagram-media-dot:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        /* Carousel icon overlay on grid */
        .instagram-carousel-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          z-index: 3;
        }

        @media (max-width: 1024px) {
          .instagram-lightbox-sidebar {
            display: none;
          }

          .instagram-lightbox-container {
            width: 95%;
          }
        }

        @media (max-width: 768px) {
          .instagram-lightbox-nav {
            width: 40px;
            height: 40px;
          }

          .instagram-lightbox-nav-left {
            left: 10px;
          }

          .instagram-lightbox-nav-right {
            right: 10px;
          }

          .instagram-lightbox-close {
            top: 10px;
            right: 10px;
          }

          .instagram-media-indicators {
            bottom: 10px;
          }

          .instagram-media-dot {
            width: 6px;
            height: 6px;
          }
        }
      `}</style>

      <div className="instagram-lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="instagram-lightbox-close" onClick={onClose} aria-label="Close">
          <X size={24} color="#000" />
        </button>

        {/* Post Counter */}
        <div className="instagram-lightbox-counter">
          {currentPostIndex + 1} / {posts.length}
          {hasMultipleMedia && ` • ${currentMediaIndex + 1}/${currentPost.media.length}`}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="instagram-lightbox-nav instagram-lightbox-nav-left" 
          onClick={goToPreviousItem}
          aria-label="Previous"
        >
          <ChevronLeft size={28} color="#000" />
        </button>

        <button 
          className="instagram-lightbox-nav instagram-lightbox-nav-right" 
          onClick={goToNextItem}
          aria-label="Next"
        >
          <ChevronRight size={28} color="#000" />
        </button>

        {/* Media Area */}
        <div className="instagram-lightbox-media">
          {currentMedia.type === 'image' ? (
            <img src={currentMedia.url} alt={currentPost.alt} />
          ) : (
            <video 
              ref={videoRef}
              src={currentMedia.url} 
              controls 
              autoPlay 
              loop
              playsInline
            />
          )}

          {/* Media Indicators (dots) for carousel posts */}
          {hasMultipleMedia && (
            <div className="instagram-media-indicators">
              {currentPost.media.map((_, index) => (
                <div
                  key={index}
                  className={`instagram-media-dot ${index === currentMediaIndex ? 'active' : ''}`}
                  onClick={() => goToMediaIndex(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Sidebar (Desktop Only) */}
        <div className="instagram-lightbox-sidebar">
          <div className="instagram-lightbox-header">
            <div className="instagram-lightbox-avatar">B</div>
            <div className="instagram-lightbox-username">BYD.UK</div>
          </div>

          <div className="instagram-lightbox-caption-area">
            <div className="instagram-lightbox-caption">
              <strong>BYD.UK</strong>
              {currentPost.caption}
            </div>
          </div>

          <div className="instagram-lightbox-footer">
            <a 
              href={currentPost.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-view-original"
            >
              <ExternalLink size={16} />
              View on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLightbox;