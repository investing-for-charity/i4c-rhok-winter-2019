/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '@atlaskit/button';

const TEST_SITE_KEY = '6LfxNKoUAAAAAKiAptSHXNYktvQyd1olXzoS3Ibt';

type Props = {
  onCaptchaSuccess: () => void;
  text?: string;
};

type State = {
  callback: string;
  value: string;
  load: boolean;
  expired: string;
};

export default class Captcha extends React.Component<Props, State> {
  recaptchaRef: React.RefObject<any>;

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: 'not fired',
      value: '[empty]',
      load: false,
      expired: 'false',
    };
    this.recaptchaRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ load: true });
    console.log('didMount - reCaptcha Ref-', this.recaptchaRef);
  }

  handleChange = value => {
    console.log('Captcha value:', value);
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) {
      this.setState({ expired: 'true' });
    } else {
      this.props.onCaptchaSuccess();
    }
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: 'called!' });
  };

  onClick = () => {
    if (this.recaptchaRef.current) {
      this.recaptchaRef.current.execute();
    }
  };

  render() {
    const { value, callback, load, expired } = this.state;
    return (
      <div
        css={css`
          > button {
            background: #36b37e;
          }
        `}
      >
        <Button appearance="primary" isLoading={!load} onClick={this.onClick}>
          {this.props.text || 'Donate More'}
          {load && (
            <ReCAPTCHA
              theme="light"
              ref={this.recaptchaRef}
              sitekey={TEST_SITE_KEY}
              onChange={this.handleChange}
              asyncScriptOnLoad={this.asyncScriptOnLoad}
              size="invisible"
            />
          )}
        </Button>
      </div>
    );
  }
}
