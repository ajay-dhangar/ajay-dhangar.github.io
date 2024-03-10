import {sortBy} from '../utils/jsUtils';

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'html'
  | 'css'
  | 'javascript'
  | 'react'
  | 'nodejs'
  | 'mongodb'
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'i18n'
  | 'versioning'
  | 'large'
  | 'meta'
  | 'personal'
  | 'templates'
  | 'portfolio'
  | 'nextjs'
  | 'vanilla'
  | 'typescript'
  | 'clone';

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export const Tags: {[type in TagType]: Tag} = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  html: {
    label: 'HTML',
    description:
      'Our favorite CodeHarborHub sites that you must absolutely check-out!',
    color: '#f06529',
  },
  css: {
    label: 'CSS',
    description:
      'Our favorite CodeHarborHub sites that you must absolutely check-out!',
    color: '#2965f1',
  },
  javascript: {
    label: 'JavaScript',
    description:
      'Our favorite CodeHarborHub sites that you must absolutely check-out!',
    color: '#f0db4f',
  },
  vanilla: {
    label: 'Vanilla',
    description:
      'Our favorite CodeHarborHub sites that you must absolutely check-out!',
    color: '#f0db4f',
  },
  react: {
    label: 'React.js',
    description:
      'Our favorite CodeHarborHub sites that you must absolutely check-out!',
    color: '#61dafb',
  },
  nextjs: {
    label: 'Next.js',
    description:
      'Our favorite CodeHarborHub sites that you must absolutely check-out!',
    color: '#000000',
  },
  typescript: {
    label: 'TypeScript',
    description:
      'Our favorite CodeHarborHub sites that you must absolutely check-out!',
    color: '#007acc',
  },
  nodejs: {
    label: 'Node.js',
    description:
      'Our favorite CodeHarborHub sites that you must absolutely check-out!',
    color: '#026e00',
  }, 
  
  mongodb: {
    label: 'MongoDB',
    description:
      'Our favorite CodeHarborHub sites that you must absolutely check-out!',
    color: '#13aa52',
  },
  
  favorite: {
    label: 'Favorite',
    description:
      'Our favorite CodeHarborHub sites that you must absolutely check-out!',
    color: '#e9669e',
  },
  opensource: {
    label: 'Open-Source',
    description:
      'Open-Source CodeHarborHub sites can be useful for inspiration!',
    color: '#39ca30',
  },

  product: {
    label: 'Product',
    description: 'CodeHarborHub sites associated to a commercial product!',
    color: '#dfd545',
  },

  design: {
    label: 'Design',
    description:
      'Beautiful CodeHarborHub sites, polished and standing out from the initial template!',
    color: '#a44fb7',
  },

  i18n: {
    label: 'I18n',
    description:
      'Translated CodeHarborHub sites using the internationalization support with more than 1 locale.',
    color: '#127f82',
  },

  versioning: {
    label: 'Versioning',
    description:
      'CodeHarborHub sites using the versioning feature of the docs plugin to manage multiple versions.',
    color: '#fe6829',
  },

  // Large sites, with a lot of content (> 200 pages, excluding versions)
  large: {
    label: 'Large',
    description:
      'Very large CodeHarborHub sites, including many more pages than the average!',
    color: '#8c2f00',
  },

  meta: {
    label: 'Meta',
    description: 'CodeHarborHub sites of Meta projects',
    color: '#4267b2', // CodeHarborHub blue
  },

  personal: {
    label: 'Personal',
    description:
      'Personal websites, blogs and digital gardens built with CodeHarborHub',
    color: '#14cfc3',
  },

  templates: {
    label: 'Templates',
    description:
      'CodeHarborHub sites using the templates reading direction support.',
    color: '#ffcfc3',
  },
  portfolio: {
    label: 'portfolio',
    description:
      'CodeHarborHub sites using the coding direction for portfolio.',
    color: '#ff4400',
  },

  clone: {
    label: 'Clone',
    description: 'CodeHarborHub sites using the clone projects reading',
    color: '#004400',
  },
};

// Add your site to this list
// prettier-ignore
const Users: User[] = [

  {
    title: 'You Tube Clone',
    description: 'Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5',
    preview: require('./showcase/YouTube-Clone.jpg'),
    website: 'https://my-youtube-ajay.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/youtube_clone',
    tags: ['opensource', 'clone', 'templates', 'react'],
  },  
  {
    title: 'Quiz App',
    description: 'Explore and test your knowledge with the Quiz app. Engaging quizzes to challenge your mind and expand your horizons. Try it now!',
    preview: require('./showcase/quiz-app.jpg'),
    website: 'https://quiz-app-ajay-dhangar.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/Quiz-app',
    tags: ['opensource', 'clone', 'templates'],
  },
  {
    title: 'Music App',
    description: 'Your music, your way. Explore and enjoy a world of tunes with our Spotify-inspired app. 🎶 ',
    preview: require('./showcase/music-app.jpg'),
    website: 'https://shivay-studio.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/music-app',
    tags: ['opensource', 'clone', 'templates'],
  }, 

  {
    title: 'TailwindBlog',
    description: 'The Starter app is a feature-rich Next.js and Tailwind CSS blogging starter template.',
    preview: require('./showcase/TailwindBlog.jpg'),
    website: 'https://starter-aj-zero-coding.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/starter',
    tags: ['opensource', 'clone', 'templates'],
  },

  {
    title: 'GERIGHT',
    description: 'Experience culinary excellence at Gericht Restaurant: Modern UI, showcasing The Key To Fine Dining.',
    preview: require('./showcase/gericht-restaurant-modern-ui.jpg'),
    website: 'https://ajay-1.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/gericht-restaurant-modern-ui',
    tags: ['opensource', 'templates', 'clone'],
  },
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();