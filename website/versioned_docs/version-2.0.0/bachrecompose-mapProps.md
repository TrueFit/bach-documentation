---
id: version-2.0.0-bachrecompose-mapprops
title: mapProps
original_id: bachrecompose-mapprops
---

Allows you to transform the props from that point in the composition into a new map of props.

_Note: this can be a dangerous utility as it completely replaces the props object that has been built to this point. Consider that when writing your mapping logic_

## Helper Signature

| Parameter | Type        | Description                                                                            |
| --------- | ----------- | -------------------------------------------------------------------------------------- |
| fn        | js function | accepts a js object "props" and returns a js object to be used as "props" from then on |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {mapProps} from '@truefit/bach-recompose';

type PublicProps = {
  note: string;
};

type InternalProps = {
  message: string;
};

const ChildContent = ({message}: InternalProps) => (
  <div>
    <h1>mapProps</h1>
    <h2>Message: {message}</h2>
  </div>
);

const Child = compose<PublicProps>(
  mapProps<PublicProps, InternalProps>(({note, ...props}) => ({message: note, ...props})),
)(ChildContent);

export default () => <Child note="Hello World!" />;
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {mapProps} from '@truefit/bach-recompose';

const ChildContent = ({message}) => (
  <div>
    <h1>mapProps</h1>
    <h2>Message: {message}</h2>
  </div>
);

const Child = compose(
  mapProps(({note, ...props}) => ({message: note, ...props})),
)(ChildContent);

export default () => <Child note="Hello World" />;
```
