---
id: bachformik-withformik
title: withFormik
---

Allows you to specify that the composed component should be wrapped in a Formik element. This enhancer uses the [Formik component](https://jaredpalmer.com/formik/docs/api/formik).

## Helper Signature

| Parameter   | Type      | Description                                                                                             |
| ----------- | --------- | ------------------------------------------------------------------------------------------------------- |
| formikProps | js object | a js object containing the props to pass to the formik element - see formik documentation for full list |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withFormik} from '@truefit/bach-formik';
import {FormikProps} from 'formik';

type FormValues = {
  name: string;
  address: string;
  age: number;
};

type Props = {
  handleFormSubmit: () => void;
  formik: FormikProps<FormValues>;
};

const WithFormik = ({formik: {values, handleChange, handleBlur}, handleFormSubmit}: Props) => (
  <div>
    <input name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
    <input name="address" onChange={handleChange} onBlur={handleBlur} value={values.address} />
    <input name="age" onChange={handleChange} onBlur={handleBlur} value={values.age} />

    <button type="submit" onClick={handleFormSubmit}>
      Submit
    </button>
  </div>
);

export default compose(
  withFormik({
    initialValues: {name: 'John Doe', address: '', age: 0},
    onSubmit: (values: FormValues) => {
      console.log(values); // eslint-disable-line
    },
  }),

  // this is needed to handle the type disparity between formik and onClick
  withCallback<Props>('handleFormSubmit', ({formik: {handleSubmit}}: Props) => () => {
    handleSubmit();
  }),
)(WithFormik);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withFormik} from '@truefit/bach-formik';

const WithFormik = (formik: {values, handleChange, handleBlur, handleSubmit}) => (
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
