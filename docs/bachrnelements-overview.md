---
id: bachrnelements-overview
title: Overview
---

This library allows components composed with [@truefit/bach](https://github.com/truefit/bach) to build their react native apps using [react-native-elements](https://react-native-training.github.io/react-native-elements/).

## Enhancer List

- [withStyles](/docs/bachrnelements-withstyles)

## Installation

```
npm install @truefit/bach-rn-elements react-native-elements react-native-vector-icons
```

or

```
yarn add @truefit/bach-rn-elements react-native-elements react-native-vector-icons
```

## Setup

### configureStyle

This function allows you to provide your configuration shared styles. It is not required, but can prove helpful when using a design system.

| Parameter   | Type      | Description                                            |
| ----------- | --------- | ------------------------------------------------------ |
| sharedStyle | js object | the styles that should be available to every component |

## Example

#### Typescript

```Typescript
import {configureStyle, NamedStyles} from '@truefit/bach-rn-elements';

// styles
const sharedStyle: NamedStyles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

#### Javascript

// configure
configureStyle({sharedStyle});
```

```Javascript
import {configureStyle} from '@truefit/bach-rn-elements';

// styles
const sharedStyle = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

// configure
configureStyle({sharedStyle});
```
