---
sidebar_position: 2
---

## Diagrams

```bash
npm install --save @docusaurus/theme-mermaid
```

````md title="Example Mermaid diagram"
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## Tabs

```md title="Example Tabs"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

## Interactive code editor

```bash
npm install --save @docusaurus/theme-live-codeblock
```

````md title="Example Live Code Block"
```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```
````

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

## Multi-language support code blocks

<Tabs>
<TabItem value="js" label="JavaScript">

```js
function helloWorld() {
  console.log("Hello, world!");
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def hello_world():
  print("Hello, world!")
```

</TabItem>
<TabItem value="java" label="Java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
<TabItem value="c" label="C">

```c
#include <stdio.h>

int main() {
  printf("Hello, World\n");
  return 0;
}
```

</TabItem>
</Tabs>

## Add Apple Style Window

import BrowserWindow from '@site/src/components/BrowserWindow';

 <BrowserWindow minHeight="500" url="http://hello.com/intro/">
    <img src="https://github.com/Ajay-Dhangar.png" width="150" /> <br />
    <button onClick={() => alert('Hello, world!')}>Click Me</button>
 </BrowserWindow>


## Highlighting with metadata string

```jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```

## Line numbering

```jsx {1,4-6,11} showLineNumbers
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```

## npm2yarn

```bash npm2yarn
npm install @docusaurus/remark-plugin-npm2yarn
```

## warning

:::warning
Beware of the dark side.
:::

## danger

:::danger
I find your lack of faith disturbing.
:::

## info

:::info
Luke, I am your father.
:::

## success

:::success
The Force will be with you, always.
:::

## Admonitions

:::caution
This is a caution admonition
:::

:::note
This is a note admonition
:::

:::tip
This is a tip admonition
:::

:::important
This is an important admonition
:::

:::seealso
This is a seealso admonition
:::

---

