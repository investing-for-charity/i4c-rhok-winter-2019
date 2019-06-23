import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const TEST_SITE_KEY = '6LfxNKoUAAAAAKiAptSHXNYktvQyd1olXzoS3Ibt';

type Props = {
  onCaptchaSuccess: () => void;
};

type State = {
  callback: string;
  value: string;
  load: boolean;
  expired: string;
};

export default class Captcha extends React.Component<Props, State> {
  _reCaptchaRef: any;

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: 'not fired',
      value: '[empty]',
      load: false,
      expired: 'false',
    };
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ load: true });
    console.log('didMount - reCaptcha Ref-', this._reCaptchaRef);
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

  render() {
    const { value, callback, load, expired } = this.state;
    return (
      <div>
        {load && (
          <ReCAPTCHA
            theme="light"
            ref={this._reCaptchaRef}
            sitekey={TEST_SITE_KEY}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
      </div>
    );
  }
}
