---
id: bachformik-withfield
title: withField
---

Allows you to create your own primitive inputs connected to Formik.

_Helper Signature_

| Parameter  | Type                 | Description                                                                                                                            |
| ---------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| fieldProps | js object or js func | a js object (or lazy evaluated function) containing the props to pass to formik for the field - see formik documentation for full list |

_Example_

```
import React from 'react';
import {compose} from '@truefit/bach';
import {withFormik, withField} from '@truefit/bach-formik';

const TextField = compose(withField(({name}) => ({name})))(
  ({label, field, meta}) => (
    <>
      <div>
        <label>{label}</label>
        <input {...field} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </>
  ),
);

const WithFormik = ({handleSubmit}) => (
  <div>
    <TextField name="name" label="Name:" />
    <TextField name="address" label="Address:" />
    <TextField name="age" label="Age:" />

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

_ Formik Hook_

[useField](https://jaredpalmer.com/formik/docs/api/useField)