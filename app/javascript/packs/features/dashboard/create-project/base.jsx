import React, { useState } from 'react';
import Input from '../../../ui/input';
import Button from '../../../ui/button';
import baseGif from './base.gif';

import {
  Wrapper,
  ActiveZone,
  Title,
  SubTitle,
  Secured,
  InfoZone,
  GifContainer,
  Error,
} from './styles';

const Base = ({ setStepBase }) => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const [isProtected, setIsProtected] = useState(false);
  const [protectedPassword, setProtectedPassword] = useState('');

  const handleSubmit = () => {
    const pureToken = token.trim();
    if (pureToken === '') {
      setError('Base link should not be empty');
    } else {
      setStepBase();
    }
  };

  return (
    <Wrapper>
      <ActiveZone>
        <div>
          <Title>Share a Link to your Base</Title>
          <SubTitle>
            Choose the base that you use as a database for this app. <br />
            Paste a link to this base.
          </SubTitle>
          <div style={{ marginLeft: '-3px' }}>
            <Input
              value={token}
              onChange={e => setToken(e.target.value)}
              placeholder="Paste the Link here"
            />
          </div>
          <Error>{error}</Error>
          <Secured onClick={() => setIsProtected(s => !s)}>
            My shared base is password protected
          </Secured>
          {isProtected && (
            <Input
              style={{ marginTop: '5px', marginLeft: '-3px' }}
              value={protectedPassword}
              onChange={e => setProtectedPassword(e.target.value)}
              placeholder="Your shared base password"
            />
          )}
        </div>
        <Button onClick={handleSubmit}>Continue</Button>
      </ActiveZone>
      <InfoZone>
        <span>
          You'll find this in the Share menu, which you can access <br />
          from the top right-hand corner of your Airtable base.
        </span>
        <GifContainer alt="token gif" src={baseGif} />
        <Button
          onClick={() => window.open('https://airtable.com')}
          type="border"
        >
          Open Airtable
        </Button>
      </InfoZone>
    </Wrapper>
  );
};

export default Base;
