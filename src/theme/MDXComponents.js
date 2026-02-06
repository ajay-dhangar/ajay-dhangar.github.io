import Head from "@docusaurus/Head";
import BrowserWindow from "@site/src/components/BrowserWindow";
import File from "@site/src/components/File";
import GiscusComponent from "@site/src/components/GiscusComponent";
import MDXComponents from "@theme-original/MDXComponents";
import DocCardList from "@theme/DocCardList";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import { FaReact } from "react-icons/fa";
import MagicButton from "../ui/MagicButton";
import Link from "@docusaurus/Link";
import { FaLocationArrow } from "react-icons/fa";
import YoutubeVideo from "../components/YoutubeVideo";
import ContributorList from "../components/ContributorList";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // custom
  Tabs,
  TabItem,
  BrowserWindow,
  Highlight,
  GiscusComponent,
  DocCardList,
  FaReact,
  File,
  YoutubeVideo,
  Head,
  MagicButton,
  Link,
  FaLocationArrow,
  ContributorList,
};
