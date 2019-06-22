/** @jsx jsx */
import { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import Form, { Field, FormFooter } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';

type Props = {
  onSubmit: (formData: { email: string }, _form: any, callback: (errors?: Object) => void) => void;
};

export default ({ onSubmit }: Props) => (
  <Fragment>
    <h1
      css={css`
        font-size: 18px;
        color: #505f79;
      `}
    >
      Log in to donor portal
    </h1>
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Field name="email" defaultValue="" label="Email" isRequired>
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>
          <FormFooter>
            <Button type="submit" appearance="primary" isLoading={submitting}>
              Submit
            </Button>
          </FormFooter>
        </form>
      )}
    </Form>
  </Fragment>
);
