---
id: version-1.0.10-bach-withstaticprops
title: withStaticProps
original_id: bach-withstaticprops
---

Allows you to attach static props to the resultant HOC component. Bach will also copy any static properties defined on the component passed to compose up to the generated HOC.

_Helper Signature_

| Parameter | Type      | Description                                                     |
| --------- | --------- | --------------------------------------------------------------- |
| props     | js object | an object containing the key-value pairs to use as static props |

_Example_

```
import React from 'react';
import {compose, withStaticProps} from '@truefit/bach';

const Component = () => (
  <div>
    <h1>With Static Props</h1>
  </div>
);

export default compose(
  withStaticProps({
    navigationOptions: {
      headerTitle: 'Bach',
    },
  }),
)(Component);
```
