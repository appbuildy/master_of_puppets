import React, { useState } from 'react';
import Input from '../../../ui/input';
import Button from '../../../ui/button';
import tokenGif from './token.gif';
import axios from "axios";

import {
  Wrapper,
  ActiveZone,
  Title,
  SubTitle,
  InfoZone,
  GifContainer,
  Error,
} from './styles';

const Token = ({ setStepBase }) => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const pureToken = token.trim();
    if (pureToken === '') {
      setError('API Key should not be empty');
    } else if (!pureToken.startsWith('key')) {
      setError('API Key should start with key');
    } else {
      const authToken = localStorage.getItem('jwt');

      axios.patch('/api/user', {
        headers: { 'Authentication': `Bearer ${authToken}` },
        user: {
          airtable_api_key: pureToken
        }
      });
      setStepBase();
    }
  };

  return (
    <Wrapper>
      <ActiveZone>
        <div>
          <Title>Add your API Key</Title>
          <SubTitle>
            The API Key enables us to connect to your Airtable base <br />
            and link your Airtable data to this app.
          </SubTitle>
          <div style={{ marginLeft: '-3px' }}>
            <Input
              value={token}
              onChange={e => setToken(e.target.value)}
              placeholder="Paste your API key here"
            />
          </div>
          <Error>{error}</Error>
          {/*<Secured>Your API key is protected</Secured>*/}
        </div>
        <Button onClick={handleSubmit}>Continue</Button>
      </ActiveZone>
      <InfoZone>
        <span>You'll find the API Key in your</span>{' '}
        <a target="_blank" href="https://airtable.com/account">
          Airtable Account page
        </a>
        <GifContainer alt="token gif" src={tokenGif} />
        <Button
          onClick={() => window.open('https://airtable.com/account')}
          type="border"
        >
          Open Airtable Account
        </Button>
      </InfoZone>
    </Wrapper>
  );
};

export default Token;
