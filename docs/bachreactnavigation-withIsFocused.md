---
id: bachreactnavigation-withisfocused
title: withIsFocused
---

We might want to render different content based on the current focus state of the screen.

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withIsFocused, IsFocused} from '@truefit/bach-react-navigation';
import {View, Text} from 'react-native';

type Props = {
} & IsFocused;

const Component = ({isFocused}: Props) => (
  <View>
    <Text>
      {isFocused ? 'Hi' : 'Shhh'}
    </Text>
  </View>
);

export default compose(
  withIsFocused()
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withIsFocused} from '@truefit/bach-react-navigation';
import {View, Text} from 'react-native';

const Component = ({isFocused}) => (
  <View>
    <Text>
      {isFocused ? 'Hi' : 'Shhh'}
    </Text>
  </View>
);

export default compose(
  withIsFocused()
)(Component);
```

## React Navigation Hook

[useIsFocused](https://reactnavigation.org/docs/use-is-focused)
