export type VideoCategory = 'Main Reels' | 'Breakdowns' | 'Technical Demos';

export interface VfxVideo {
  id: string;
  title: string;
  category: VideoCategory;
  url: string;
  thumbnailPath: string;
}

export const mainReels: VfxVideo[] = [
  {
    id: '983360818',
    title: 'Alex Bonacci Visualization Reel',
    category: 'Main Reels',
    url: 'https://player.vimeo.com/video/983360818?autoplay=1',
    thumbnailPath: '/thumbnails/vfx/983360818.jpg',
  },
  {
    id: '458259067',
    title: 'Alex Bonacci VFX Compositor/Paint Reel',
    category: 'Main Reels',
    url: 'https://player.vimeo.com/video/458259067?autoplay=1',
    thumbnailPath: '/thumbnails/vfx/458259067.jpg',
  },
  {
    id: '992348525',
    title: 'Last Station On The Left Reel',
    category: 'Main Reels',
    url: 'https://player.vimeo.com/video/992348525?autoplay=1',
    thumbnailPath: '/thumbnails/vfx/992348525.jpg',
  },
];

export const breakdowns: VfxVideo[] = [
  {
    id: '992348476',
    title: 'Last Station On The Left Breakdown',
    category: 'Breakdowns',
    url: 'https://player.vimeo.com/video/992348476?autoplay=1',
    thumbnailPath: '/thumbnails/vfx/992348476.jpg',
  },
  {
    id: '135648405',
    title: 'Momentum Breakdown',
    category: 'Breakdowns',
    url: 'https://player.vimeo.com/video/135648405?autoplay=1',
    thumbnailPath: '/thumbnails/vfx/135648405.jpg',
  },
  {
    id: '138166193',
    title: 'Goma Breakdown',
    category: 'Breakdowns',
    url: 'https://player.vimeo.com/video/138166193?autoplay=1',
    thumbnailPath: '/thumbnails/vfx/138166193.jpg',
  },
];

export const technicalDemos: VfxVideo[] = [
  {
    id: '900217344',
    title: 'BGFT Scrolling Split Screen',
    category: 'Technical Demos',
    url: 'https://player.vimeo.com/video/900217344?autoplay=1',
    thumbnailPath: '/thumbnails/vfx/900217344.jpg',
  },
  {
    id: '819150185',
    title: 'CopyCat Test',
    category: 'Technical Demos',
    url: 'https://player.vimeo.com/video/819150185?autoplay=1',
    thumbnailPath: '/thumbnails/vfx/819150185.jpg',
  },
  {
    id: '826550850',
    title: 'Beauty Pass',
    category: 'Technical Demos',
    url: 'https://player.vimeo.com/video/826550850?autoplay=1',
    thumbnailPath: '/thumbnails/vfx/826550850.jpg',
  },
  {
    id: '812161490',
    title: 'Key Practice',
    category: 'Technical Demos',
    url: 'https://player.vimeo.com/video/812161490?autoplay=1',
    thumbnailPath: '/thumbnails/vfx/812161490.jpg',
  },
];

export const allVideos: VfxVideo[] = [
  ...mainReels,
  ...breakdowns,
  ...technicalDemos,
];
