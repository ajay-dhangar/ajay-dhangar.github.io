import React from "react";
import Link from "@docusaurus/Link";
import MagicButton from "../../../ui/MagicButton";
function Skill({
  icon,
  to,
  name,
}: {
  icon: string;
  name: string;
  to?: string;
}) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center rounded-lg border border-gray-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline animate-fadeIn bg-gray-100 dark:bg-gray-800"
    >
      <img src={icon} className="mr-2 h-7 w-7" />
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function Skills() {
  return (
    <section className="mx-auto mb-4 flex w-full flex-col p-4">
      <h1 className="heading text-4xl text-center lg:text-6xl mb-10">
        Let&apos;s Talk About <span className="text-primaryColor">Skills</span>{" "}
        and <span className="text-primaryColor">Tools</span>
      </h1>

      <p className="animate-fadeIn mb-4 tracking-wider md:tracking-normal text-center">
        I'm a software engineer specialized in the MERN stack with problem
        solving skills and a passion for clean, efficient code. I turn ideas
        into solutions through curiosity and collaboration.
      </p>

      <div className="mt-4 mb-10">
        <h4 className="mb-2 text-2xl">Skills</h4>

        <p className="mb-6 text-text-400">
          I'm using skills that are available for{" "}
          <span className="font-semibold">Frontend</span> and{" "}
          <span className="font-semibold">Backend</span> development.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Skill name="HTML" to="#" icon="/icons/html.svg" />
          <Skill name="CSS" to="#" icon="/icons/css.svg" />
          <Skill name="JavaScript" to="#" icon="/icons/js.svg" />
          <Skill name="React" to="#" icon="/icons/jsx.svg" />
          <Skill name="Node.js" to="#" icon="/icons/nodejs.svg" />
          <Skill name="MongoDB" to="#" icon="/icons/mongodb.svg" />
          <Skill name="Express" to="#" icon="/icons/express.svg" />
          <Skill name="Tailwind" to="#" icon="/icons/tailwind.svg" />
          <Skill name="Bootstrap" to="#" icon="/icons/bootstrap.svg" />
          <Skill name="Material-UI" to="#" icon="/icons/material-ui.svg" />
          <Skill name="Python" to="#" icon="/icons/py.svg" />
          <Skill name="Git" to="#" icon="/icons/git.svg" />
          <Skill name="GitHub" to="#" icon="/icons/github.svg" />
          <Skill name="Next.js" to="#" icon="/icons/nextjs.svg" />
          <Skill name="TypeScript" to="#" icon="/icons/ts.svg" />
          <Skill name="Netlify" to="#" icon="/icons/netlify.svg" />
          <Skill name="Vercel " to="#" icon="/icons/vercel.svg" />
          <Skill name="GitHub Pages" to="#" icon="/icons/github.svg" />
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-2xl">Tools</h4>

        <p className="mb-6 text-text-400">
          I'm using tools that are available for{" "}
          <span className="font-semibold">Design</span> and{" "}
          <span className="font-semibold">Development</span> purposes.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Skill name="Figma" to="#" icon="/icons/figma.svg" />
          <Skill name="VS Code" to="#" icon="/icons/vs-code.svg" />
          <Skill name="CodePen" to="#" icon="/icons/codepen.svg" />
          <Skill name="Stack Overflow" to="#" icon="/icons/stack-overflow.svg" />
          <Skill name="Google" to="#" icon="/icons/google.svg" />
          <Skill name="MDN Web Docs" to="#" icon="/icons/mdn.png" />
          <Skill name="Dev.to" to="#" icon="/icons/dev.svg" />
          <Skill name="Unsplash" to="#" icon="/icons/unsplash.svg" />
          <Skill name="Canva" to="#" icon="/icons/canva.svg" />
          <Skill name="Slack" to="#" icon="/icons/slack.svg" />
          <Skill name="Zoom" to="#" icon="/icons/zoom.svg" />
          <Skill name="Trello" to="#" icon="/icons/trello.svg" />
          <Skill name="Notion" to="#" icon="/icons/notion.svg" />
          <Skill name="NPM" to="#" icon="/icons/npm.svg" />
          <Skill name="Yarn" to="#" icon="/icons/yarn.svg" />
          <Skill name="Postman" to="#" icon="/icons/postman.svg" />
          <Skill name="Webpack" to="#" icon="/icons/webpack.svg" />
          <Skill name="Babel" to="#" icon="/icons/babel.svg" />
          <Skill name="Dotenv" to="#" icon="/icons/dotenv.svg" />
          <Skill name="ESLint" to="#" icon="/icons/eslint.svg" />
          <Skill name="Prettier" to="#" icon="/icons/prettier.png" />
          <Skill name="Docker" to="#" icon="/icons/docker.svg" />
          <Skill name="GitHub Actions" to="#" icon="/icons/gitHub-actions.svg" />
          <Skill name="Lighthouse" to="#" icon="/icons/lighthouse.svg" />
          <Skill name="Google Analytics" to="#" icon="/icons/ga.svg" />
          <Skill name="Firefox Developer Tools" to="#" icon="/icons/firefox.svg" />
          <Skill name="Chrome DevTools" to="#" icon="/icons/chrome.svg" />
        </div>
      </div>
    </section>
  );
}