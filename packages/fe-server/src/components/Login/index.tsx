/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Form, { Field, FormFooter, ErrorMessage } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import { cardCss } from '../Card';
import { useCallback, Fragment } from 'react';

type Props = {
  onSubmit: (formData: { email: string; }, _form: any, callback: (errors?: Object) => void) => void;
};

export default ({ onSubmit }: Props) => {
  const emailValidate = useCallback((value: string): undefined | 'INVALID_EMAIL' => {
    return value.includes('@') ? undefined : 'INVALID_EMAIL';
  }, []);

  return (
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
            <Field name="email" defaultValue="" label="Email" isRequired validate={emailValidate}>
              {({ fieldProps, error }) => (
                <Fragment>
                  <TextField {...fieldProps} />
                  {error && <ErrorMessage>Please enter a valid email address</ErrorMessage>}
                </Fragment>
              )}
            </Field>
            <FormFooter>
              <div
                css={css`
                  > button {
                    background: #36b37e;
                  }
                `}
              >
                <Button type="submit" appearance="primary" isLoading={submitting}>
                  Submit
                </Button>
              </div>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  );
};
