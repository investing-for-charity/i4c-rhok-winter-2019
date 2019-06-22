/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Form, { Field, FormFooter } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import { cardCss } from '../Card';

type Props = {
  onSubmit: (formData: { email: string }, _form: any, callback: (errors?: Object) => void) => void;
};

export default ({ onSubmit }: Props) => (
  <div css={cardCss}>
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
  </div>
);
