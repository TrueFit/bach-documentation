---
id: version-2.0.0-index
title: Getting Started
original_id: index
---

Bach is a utility library the allows React developer to compose their components in functional manner.

The goal is to help create a codebase that is readable, flexible, testable, and maintainable. In our experience, following this convention generally leads to a collection of single use, small functions that can easily be shared across a codebase. The ideal is that components should be focused on rendering, allowing other concerns to be coded elsewhere and passed in.

You can find a full React project with simple working examples of each hook, as well as more complex examples that combine hooks here: [https://github.com/TrueFit/bach-examples](https://github.com/TrueFit/bach-examples).

## Version 2.0

With the release of version 2.0, Bach has been updated to Typescript.

We did our best to maintain backwards compatibility and believe we have. If you find something, please let us know.

## Conception

At a high level, we liked the syntax that [Recompose](https://github.com/acdlite/recompose) enabled in our source. The advent of React hooks has forced us to move away from recompose since it has a couple of major drawbacks in this new world (no hooks, HOC hell, and the author deprecated it). We searched for a comparable library in the community, but were unable to find one that fit our needs.

At this point you may be asking, why not just use hooks - which is a fair question. In short, we aren't really fans of the syntax of hooks. In our opinion, they tend to add a lot of code and concerns to a component that don't belong in a presentational function. That said, we definitely embrace the push towards functional components that has come along with React's introduction of hooks - we just find the compositional approach to produce "better" code.

Thus we decided to write this library to fill the hole in the community the deprecation of recompose left. We set the following guidelines for the library:

- Allow developers to compose a series of functional concerns around components
- Have only one HOC component wrapper regardless of the number of enhancers
- Prefer the use of React hooks for implementation
- Provide a simple interface to support the addition of custom enhancers

We are pretty happy with where we ended up and hope it will prove helpful not just to us, but also the React community at large. We welcome questions, thoughts, and contributions from the community (see Contributing below). If you use it and find it helpful, we'd love to hear about that as well.

## Installation

```
npm install @truefit/bach
```

or

```
yarn add @truefit/bach
```

## Composition

```
import React from 'react';
import {compose, withCallback} from '@truefit/bach';

const Component = ({handleClick}) => (
  <div>
    <button onClick={handleClick}>
      Click Me
    </button>
  </div>
);

export default compose(
  withCallback('handleClick', () => () => {
    alert('Hello There');
  }),
)(Component);
```
