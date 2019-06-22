/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Button from '@atlaskit/button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header
        css={css`
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            & > button {
              width: 300px;
              height: 50px;

              & > * {
                width: 100%;
              }
            }
          `}
        >
          <Button appearance="primary">Log in</Button>
        </div>
      </header>
      <div
        css={css`
          color: pink;
        `}
      >
        Test
      </div>
    </div>
  );
}

export default App;
