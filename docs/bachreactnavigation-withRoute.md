---
id: bachreactnavigation-withroute
title: withRoute
---

Gives access to route object. It's useful when you cannot pass the route prop into the component directly, or don't want to pass it in case of a deeply nested child.

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withRoute} from '@truefit/bach-react-navigation';

import {RouteProp} from '@react-navigation/native';
import {NavigationProp} from '<your navigation prop>';

import {View, Text} from 'react-native';

type Props = {
  route: RouteProp<NavigationProp, 'RouteKey'>;
}

const Component = ({route}: Props) => (
  <View>
    <Text>{route.key}</Text>
  </View>
);

export default compose<Props>(
  withRoute(),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withRoute} from '@truefit/bach-react-navigation';

import {View, Text} from 'react-native';

const Component = ({route}) => (
  <View>
    <Text>{route.key}</Text>
  </View>
);

export default compose<Props>(
  withRoute(),
)(Component);
```

## React Navigation Hook

[useRoute](https://reactnavigation.org/docs/use-route)
