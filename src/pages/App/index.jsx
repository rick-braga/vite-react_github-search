import React, { useState } from 'react';
import { Container, Logo, Title, Form, Input, Button } from './styles';
import { MdSearch } from 'react-icons/md';

import githubLogo from '../../assets/images/github-logo.svg';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [login, setLogin] = useState('');

  //13 usando useNavigate
  const navigate = useNavigate();

  //14
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!login) return;

    navigate(`${login}/repositories`);

    setLogin('');
  };

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button onClick={handleSubmit}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default App;
