// src/data/instagramPosts.ts

export interface InstagramMedia {
  type: 'image' | 'video';
  url: string;
  thumbnailUrl?: string; // For videos
}

export interface InstagramPost {
  id: number;
  media: InstagramMedia[]; // Array of media items
  caption: string;
  instagramUrl: string;
  alt: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    media: [
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      }
    ],
    caption: 'Experience the future of electric driving with BYD. #BYDUK #ElectricVehicle',
    instagramUrl: 'https://www.instagram.com/p/DKNEAizuiLo/',
    alt: 'BYD vehicle exterior shot',
  },
  {
    id: 2,
    media: [
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      },
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      },
      {
        type: 'video',
        url: '/Home/instagram/post2.mp4',
        thumbnailUrl: '/Home/instagram/post1.jpg',
      },
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      },
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      }
    ],
    caption: 'Our latest showcase with 5 amazing shots! Swipe to see them all. #BYDShowcase',
    instagramUrl: 'https://www.instagram.com/p/ABC123/',
    alt: 'BYD showcase carousel',
  },
  {
    id: 3,
    media: [
      {
        type: 'video',
        url: '/Home/instagram/post2.mp4',
        thumbnailUrl: '/Home/instagram/post1.jpg',
      }
    ],
    caption: 'Innovative technology at your fingertips. #BYDTech #Innovation',
    instagramUrl: 'https://www.instagram.com/p/XYZ789/',
    alt: 'BYD dashboard technology',
  },
  {
    id: 4,
    media: [
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      },
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      },
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      }
    ],
    caption: 'Join us at the BYD showcase event! Three perspectives. #BYDEvent #Community',
    instagramUrl: 'https://www.instagram.com/p/DEF456/',
    alt: 'BYD event showcase',
  },
  {
    id: 5,
    media: [
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      }
    ],
    caption: 'Sleek design meets sustainability. #BYDDesign #Sustainable',
    instagramUrl: 'https://www.instagram.com/p/GHI789/',
    alt: 'BYD vehicle detail shot',
  },
  {
    id: 6,
    media: [
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      }
    ],
    caption: 'The road ahead is electric. #ElectricFuture #BYD',
    instagramUrl: 'https://www.instagram.com/p/JKL012/',
    alt: 'BYD on the road',
  },
  {
    id: 7,
    media: [
      {
        type: 'video',
        url: '/Home/instagram/post2.mp4',
        thumbnailUrl: '/Home/instagram/post1.jpg',
      },
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      }
    ],
    caption: 'Discover the BYD Dolphin. Video + photo combo! #BYDDolphin',
    instagramUrl: 'https://www.instagram.com/p/MNO345/',
    alt: 'BYD Dolphin showcase',
  },
  {
    id: 8,
    media: [
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      }
    ],
    caption: 'Charging into the future. #ElectricCharging #BYD',
    instagramUrl: 'https://www.instagram.com/p/PQR678/',
    alt: 'BYD charging station',
  },
  {
    id: 9,
    media: [
      {
        type: 'image',
        url: '/Home/instagram/post1.jpg',
      }
    ],
    caption: 'Premium comfort, zero emissions. #LuxuryEV #BYD',
    instagramUrl: 'https://www.instagram.com/p/STU901/',
    alt: 'BYD interior',
  },
];
