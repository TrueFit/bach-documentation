---
id: version-1.0.10-bachrnelements-overview
title: Overview
original_id: bachrnelements-overview
---

This library allows components composed with [@truefit/bach](https://github.com/truefit/bach) to build their react native apps using [react-native-elements](https://react-native-training.github.io/react-native-elements/).

## Enhancer List

- [withStyles](/docs/bachrnelements-withstyles)
- [withBadges](/docs/bachrnelements-withbadges)

## Installation

```
npm install @truefit/bach-rn-elements
```

or

```
yarn add @truefit/bach-rn-elements
```

## Setup

The setup for this library is a little more involved than other enhancer packages due to the integration with the UI. There are a couple of critical pieces you need to have in place, but if the steps below are followed, both app level theming and individual component styling can be accomplished with ease and clarity.

### configureStyle

**This configuration method needs to be called prior to the creation of the themeReducer**

This function allows you to provide your configuration of themes and styles. This function is invoked with the configuration object detailed below:

| Parameter    | Type              | Description                                                       |
| ------------ | ----------------- | ----------------------------------------------------------------- |
| defaultStyle | js object         | the styles that should be available to every component            |
| themes       | js object         | the themes map that you are providing for the app                 |
| initialTheme | string (optional) | the key in themes object for the initial theme the app should use |

For further information on theming with react-native-elements, please see their [documentation](https://react-native-training.github.io/react-native-elements/docs/customization.html)

_Example_

```
import {configureStyle} from '@truefit/bach-rn-elements';

// themes
export const LIGHT = 'LIGHT';
export const DARK = 'DARK';

const light = {
  colors: {
    primary: '#E15554',
    secondary: '#E1BC29',
  },
};

const dark = {
  colors: {
    primary: '#1E2028',
    secondary: '#DF2935',
  },
};

const THEMES = {
  [LIGHT]: light,
  [DARK]: dark,
};

// styles
const defaultTheme = {
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
configureStyle({
  defaultStyle: defaultTheme,
  themes: THEMES,
  initialTheme: DARK,
});
```

### ThemeProvider

This component wraps the [ThemeProvider](https://react-native-training.github.io/react-native-elements/docs/customization.html#using-themeprovider) provided by react-native-elements.

This component should wrap your root app component (typically directly inside of the redux provider).

```
import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedNavigator} from '@truefit/rn-navigation';
import {ThemeProvider} from '@truefit/bach-rn-elements';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <ConnectedNavigator />
        </ThemeProvider>
      </Provider>
    );
  }
}
```

### Redux Tie-In

This library uses redux to store the name of the active theme. It follows the standard action creator -> action -> reducer paradigm. In addition, we also provide [reselect](https://github.com/reduxjs/reselect) selectors to provide easy access to the store values.

#### setActiveTheme

This is the action creator. It has the following signature:

| Parameter | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| theme     | string | the key in the themes map configured on app start |

#### themeReducer

This reducer keeps track of the active theme name.

**This reducer needs to be added to your root reducer configuration at the key: theme**

```
import {combineReducers} from 'redux';
import {themeReducer} from '@truefit/bach-rn-elements';

export default combineReducers({
  theme: themeReducer,
  // ... other reducers
});
```

#### themeNameSelector

This selector returns the name of the current active theme.

#### themeSelector

This selector returns the theme object defined in the map at the key of the current active theme.