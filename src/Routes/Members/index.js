import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axiosConfig';
import { AuthContext } from '../../Context/AuthContext';
import styled from 'styled-components/macro';
import StyledRow from "../../Templates/StyledRow";
import StyledCol from "../../Templates/StyledCol";

const BioWrapper = styled.div`
  max-width:700px;
`;

const BandLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BandLogo = styled.img`
  width:75%;
`;

const BioText = styled.p`
  font-size: 1.1rem;
  color: #D2D9E2;
  margin: 0 0 1rem;

  @media (max-width: 900px) {
    font-size: .9rem;
  }

  @media (max-width: 600px) {
    font-size: .8rem;
    margin: 1rem 0 1rem 0;
  }
`;

const LoginFormWrapper = styled.div`
    display: inline-block;
`;

const FormSubmitField = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
`;

const FormField = styled.div`
    margin-top: 1rem;
    display: flex;
`;

const FormLabel = styled.label`
  min-width: 100px;
  text-align: right;
`;

const SubmitButton = styled.button`
    background: black;
    color:#FF7B12;
    font-weight: 100;
    padding: 1rem;
    border: 0;
    font-size: 1rem;

    font-family: 'Rye', sans-serif;
`;

const Members = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationPassword, setRegistrationPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const { isAuthed, setIsAuthed } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsAuthed(false);
    if (registrationPassword !== confirmPassword) {
      setRegistrationError('Passwords must match.');
    } else {
      try {
        const res = await axios.post('/auth/register', {
          email: registrationEmail,
          password
        }, {headers: {'Content-Type': 'application/json'}});
        localStorage.setItem('token', res.data.token);

        if (res.data.token) {
          setIsAuthed(true);
          history.push('/');
        } else {
          setRegistrationError('Invalid Credentials.');
        }
      } catch (error) {
        setRegistrationError('An unexpected error occurred. Please try again.');
        console.error('Error during registration:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAuthed(false);
    try {
      const res = await axios.post('/auth/login', {email, password}, { headers: { 'Content-Type': 'application/json' } });
      localStorage.setItem('token', res.data.token);
      history.push('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    if (isAuthed) {
      history.push('/');
    }
  }, [isAuthed, history])

  return (
    <>
      <StyledRow>
        <StyledCol title='Membership'>
          <BioWrapper>
            <BioText>
              Coming Soon!
            </BioText>
          </BioWrapper>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol title='Login'>
          <LoginFormWrapper>
              <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <FormField>
                  <FormLabel>
                    Email :
                  </FormLabel>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormField>
                <FormField>
                  <FormLabel>
                    Password :
                  </FormLabel>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormField>
                <FormSubmitField>
                  <SubmitButton type="submit">Submit</SubmitButton>
                </FormSubmitField>
              </form>
            </LoginFormWrapper>
        </StyledCol>
        {/*<StyledCol>*/}
        {/*    <SubPageHeader>Register</SubPageHeader>*/}
        {/*    <LoginFormWrapper>*/}
        {/*      <form onSubmit={handleRegister}>*/}
        {/*        {registrationError && <p>{registrationError}</p>}*/}
        {/*        <FormField>*/}
        {/*          <FormLabel>*/}
        {/*            Email :*/}
        {/*          </FormLabel>*/}
        {/*          <input*/}
        {/*            type="email"*/}
        {/*            placeholder="Email"*/}
        {/*            value={registrationEmail}*/}
        {/*            onChange={(e) => setRegistrationEmail(e.target.value)}*/}
        {/*            required*/}
        {/*          />*/}
        {/*        </FormField>*/}
        {/*        <FormField>*/}
        {/*          <FormLabel>*/}
        {/*            Password :*/}
        {/*          </FormLabel>*/}
        {/*          <input*/}
        {/*            type="password"*/}
        {/*            placeholder="Password"*/}
        {/*            value={registrationPassword}*/}
        {/*            onChange={(e) => setRegistrationPassword(e.target.value)}*/}
        {/*            required*/}
        {/*          />*/}
        {/*        </FormField>*/}
        {/*        <FormField>*/}
        {/*          <FormLabel>*/}
        {/*            Confirm Password :*/}
        {/*          </FormLabel>*/}
        {/*          <input*/}
        {/*            type="password"*/}
        {/*            placeholder="Password"*/}
        {/*            value={confirmPassword}*/}
        {/*            onChange={(e) => setConfirmPassword(e.target.value)}*/}
        {/*            required*/}
        {/*          />*/}
        {/*        </FormField>*/}
        {/*        <FormSubmitField>*/}
        {/*          <SubmitButton type="submit">Submit</SubmitButton>*/}
        {/*        </FormSubmitField>*/}
        {/*      </form>*/}
        {/*    </LoginFormWrapper>*/}
        {/*</StyledCol>*/}
      </StyledRow>
    </>
  );
};

export default Members;
