import React from "react";

import type { Props as Tweet } from "../components/Tweet";

export type TweetItem = Tweet & {
  showOnHomepage: boolean;
};

const TWEETS: TweetItem[] = [
  {
    url: "https://twitter.com/",
    handle: "acemarke",
    name: "Mark Erikson",
    date: "Oct 26, 2021",
    content: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque amet soluta, ea consequatur ut quaerat veniam perferendis unde error ad distinctio voluptatem commodi molestias aspernatur eum quasi excepturi doloribus.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "markerikson",
  },
  {
    url: "https://twitter.com/",
    handle: "arcanis",
    name: "Maël",
    date: "Jan 20, 2021",
    content: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque amet soluta, ea consequatur ut quaerat veniam perferendis unde error ad distinctio voluptatem commodi molestias aspernatur eum quasi excepturi doloribus.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "arcanis",
  },
  {
    url: "https://twitter.com/",
    handle: "maxlynch",
    name: "Max Lynch",
    date: "Mar 25, 2021",
    content: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque amet soluta, ea consequatur ut quaerat veniam perferendis unde error ad distinctio voluptatem commodi molestias aspernatur eum quasi excepturi doloribus.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "mlynch",
  },
  {
    url: "https://twitter.com/",
    handle: "supabase",
    name: "Supabase",
    date: "Nov 18, 2020",
    content: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque amet soluta, ea consequatur ut quaerat veniam perferendis unde error ad distinctio voluptatem commodi molestias aspernatur eum quasi excepturi doloribus.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "supabase",
  },
  {
    url: "https://twitter.com/",
    handle: "paularmstrong",
    name: "Paul Armstrong",
    date: "Apr 27, 2021",
    content: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque amet soluta, ea consequatur ut quaerat veniam perferendis unde error ad distinctio voluptatem commodi molestias aspernatur eum quasi excepturi doloribus.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "paularmstrong",
  },
];

export default TWEETS;
