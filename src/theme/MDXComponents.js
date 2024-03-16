import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SolutionAuthor from '@site/src/components/SolutionAuthor';
import TutorialAuthors from '@site/src/components/TutorialAuthors';
import Contributors from '@site/src/components/Contributors';
import Table from '@site/src/components/Table';
import ArrayVisualizations from '@site/src/components/DSA/arrays/ArrayVisualizations';
import SelectionSortVisualization from '@site/src/components/DSA/arrays/SelectionSortVisualization';
import BubbleSortVisualization from '@site/src/components/DSA/arrays/BubbleSortVisualization';
import BrowserWindow from '@site/src/components/BrowserWindow';
import GiscusComponent from '@site/src/components/GiscusComponent';
import CollectionList from '@site/src/components/CollectionList'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // custom
  SolutionAuthor,
  Tabs,
  TabItem,
  TutorialAuthors,
  Table,
  Contributors,
  BrowserWindow,
  GiscusComponent,
  ArrayVisualizations,
  BubbleSortVisualization,
  SelectionSortVisualization,
  CollectionList
};