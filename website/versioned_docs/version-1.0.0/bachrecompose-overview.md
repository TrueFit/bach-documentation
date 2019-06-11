---
id: version-1.0.0-bachrecompose-overview
title: Overview
original_id: bachrecompose-overview
---

A set of enhancers for [@truefit/bach](https://github.com/TrueFit/bach) inspired by [recompose](https://github.com/acdlite/recompose).

As the author of recompose points out in his deprecation notice, you can accomplish many (although not all) of the same behaviors provided by this library with a combination of hooks. That said, we think there is still merit to writing code that can be understood at a glance without deep knowledge of the frameworks used and in our opinion that is the role many of these functions play.

Not all of the enhancers require hooks to accomplish their tasks, that said, they follow the same architectural design as all enhancers (logic to be combined into a single component).

## Enhancer List

- [mapProps](/docs/bachrecompose-mapprops)
- [renameProp](/docs/bachrecompose-renameprop)
- [renameProps](/docs/bachrecompose-renameprops)
- [renderIf](/docs/bachrecompose-renderif)
- [renderNothing](/docs/bachrecompose-rendernothing)
- [withProps](/docs/bachrecompose-withprops)
- [withHandlers](/docs/bachrecompose-withhandlers)
- [withLifecycle](/docs/bachrecompose-withlifecycle)

## Installation

```
npm install @truefit/bach-recompose
```

or

```
yarn add @truefit/bach-recompose
```
