---
id: bachformik-withformik
title: withFormik
---

Allows you to specify that the composed component should be wrapped in a Formik element. This enhancer uses the [Formik component](https://jaredpalmer.com/formik/docs/api/formik).

_Helper Signature_

| Parameter | Type                 | Description                                                                                                                          |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| formProps | js object or js func | a js object (or lazy evaluated function) containing the props to pass to the formik element - see formik documentation for full list |

_Example_

```
import React from 'react';
import {compose} from '@truefit/bach';
import {withFormik} from '@truefit/bach-formik';

const WithFormik = ({values, handleChange, handleBlur, handleSubmit}) => (
  <div>
    <input
      name="name"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
    />
    <input
      name="address"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.address}
    />
    <input
      name="age"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.age}
    />

    <button type="submit" onClick={handleSubmit}>
      Submit
    </button>
  </div>
);

export default compose(
  withFormik({
    initialValues: {name: 'John Doe', address: '', age: ''},
    onSubmit: values => {
      console.log(values); // eslint-disable-line
    },
  }),
)(WithFormik);
```
