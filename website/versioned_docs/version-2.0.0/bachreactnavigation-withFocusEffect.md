---
id: version-2.0.0-bachreactnavigation-withfocuseffect
title: withFocusEffect
original_id: bachreactnavigation-withfocuseffect
---

Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using focus and blur events, it's not very ergonomic.

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withFocusEffect} from '@truefit/bach-react-navigation';
import {View, Text} from 'react-native';

const Component = () => (
  <View>
    <Text>
      Hello World
    </Text>
  </View>
);

export default compose(
  withFocusEffect(() => {
    console.log('Hello World');
  }),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withFocusEffect} from '@truefit/bach-react-navigation';
import {View, Text} from 'react-native';

const Component = () => (
  <View>
    <Text>
      Hello World
    </Text>
  </View>
);

export default compose(
  withFocusEffect(() => {
    console.log('Hello World');
  }),
)(Component);
```

## React Navigation Hook

[useFocusEffect](https://reactnavigation.org/docs/use-focus-effect)
