export interface Model {
  id: number;
  name: string;
  type: 'electric' | 'hybrid';
  images: string[]; // array of images
  videos: string[]; // array of video URLs
}

export const models: Model[] = [
  { 
    id: 1, 
    name: 'ATTO 2', 
    type: 'electric', 
    images: [
      '/models/BYD-ATTO-2/BYD_ATTO_2.jpg',
      '/models/BYD-ATTO-2/BYD_ATTO_2_side.jpg',
      '/models/BYD-ATTO-2/BYD_ATTO_2_interior.jpg',
      '/models/BYD-ATTO-2/Banner.avif'
    ],
    videos: [
      '/videos/BYD-ATTO-2/Overview.mp4',
      '/videos/BYD-ATTO-2/Drive.mp4'
    ]
  },
  { 
    id: 2, 
    name: 'DOLPHIN SURF', 
    type: 'electric', 
    images: [
      '/models/BYD-DOLPHIN-SURF/BYD-DOLPHIN-SURF.webp',
      '/models/BYD-DOLPHIN-SURF/BYD-DOLPHIN-SURF_side.webp',
      '/models/BYD-DOLPHIN-SURF/BYD-DOLPHIN-SURF_interior.webp',
      '/models/BYD-DOLPHIN-SURF/Banner.webp'
    ],
    videos: [
      '/videos/BYD-DOLPHIN-SURF/Overview.mp4',
      '/videos/BYD-DOLPHIN-SURF/TestDrive.mp4'
    ]
  },
  { 
    id: 3, 
    name: 'SEALION 7', 
    type: 'electric', 
    images: [
      '/models/BYD-SEALION-7/BYD-SEALION-7.webp',
      '/models/BYD-SEALION-7/BYD-SEALION-7_side.webp',
      '/models/BYD-SEALION-7/BYD-SEALION-7_interior.webp',
      '/models/BYD-SEALION-7/Banner.jpg'
    ],
    videos: [
      '/videos/BYD-SEALION-7/Overview.mp4',
      '/videos/BYD-SEALION-7/Drive.mp4'
    ]
  },
  { 
    id: 4, 
    name: 'SEAL U DM-i', 
    type: 'hybrid', 
    images: [
      '/models/BYD-SEAL-U-DM-i/BYD-SEAL-U-DM-i.webp',
      '/models/BYD-SEAL-U-DM-i/BYD-SEAL-U-DM-i_side.webp',
      '/models/BYD-SEAL-U-DM-i/BYD-SEAL-U-DM-i_interior.webp',
      '/models/BYD-SEAL-U-DM-i/Banner.jpg'
    ],
    videos: [
      '/videos/BYD-SEAL-U-DM-i/Overview.mp4',
      '/videos/BYD-SEAL-U-DM-i/TestDrive.mp4'
    ]
  },
  { 
    id: 5, 
    name: 'SEAL', 
    type: 'electric', 
    images: [
      '/models/BYD-SEAL/BYD-SEAL.webp',
      '/models/BYD-SEAL/BYD-SEAL_side.webp',
      '/models/BYD-SEAL/BYD-SEAL_interior.webp',
      '/models/BYD-SEAL/Banner.webp'
    ],
    videos: [
      '/videos/BYD-SEAL/Overview.mp4'
    ]
  },
  { 
    id: 6, 
    name: 'ATTO 3', 
    type: 'electric', 
    images: [
      '/models/BYD-ATTO3/BYD-ATTO3.webp',
      '/models/BYD-ATTO3/BYD-ATTO3_side.webp',
      '/models/BYD-ATTO3/BYD-ATTO3_interior.webp',
      '/models/BYD-ATTO3/Banner.jpg'
    ],
    videos: [
      '/videos/BYD-ATTO3/Overview.mp4'
    ]
  },
  { 
    id: 7, 
    name: 'DOLPHIN', 
    type: 'electric', 
    images: [
      '/models/BYD-DOLPHIN/BYD-DOLPHIN.webp',
      '/models/BYD-DOLPHIN/BYD-DOLPHIN_side.webp',
      '/models/BYD-DOLPHIN/BYD-DOLPHIN_interior.webp',
      '/models/BYD-DOLPHIN/Banner.jpg',
    ],
    videos: [
      '/videos/BYD-DOLPHIN/Overview.mp4'
    ]
  },
];
