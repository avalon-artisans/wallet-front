import React, { useState } from 'react';
import AuthService from '@/services/auth.service';
import { useRouter } from 'next/router';
import { Button, Input, Typography } from '@material-tailwind/react';

/**
 * LoginForm component
 * @author Kenneth Sumang
 * @since  2023.05.16
 */
export default function LoginForm() {
  const router = useRouter();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  /**
   * Handles sign up button click event
   * @returns {Promise<boolean>}
   */
  async function handleSignUpButtonClick(): Promise<boolean> {
    return router.push('/register');
  }

  /**
   * Handles login button click
   * @param {React.FormEvent<HTMLFormElement>} event
   * @returns {Promise<void>}
   */
  async function handleLoginFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const authService = new AuthService();
    const response = await authService.processLogin({
      email: email,
      password: password
    });

    if (response.success) {
      return redirectToDashboard();
    }

    alert(response.message);
  }

  /**
   * Redirect to dashboard
   * @returns {Promise<boolean>}
   */
  async function redirectToDashboard(): Promise<boolean> {
    return router.push('/dashboard');
  }

  return (
    <div className="w-full px-5">
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 mb-5 font-normal">
        Login with your credentials.
      </Typography>
      <form onSubmit={(e) => handleLoginFormSubmit(e)}>
        <div className="mb-6">
          <Input
            required
            id="email"
            type="text"
            value={email}
            label="Your Email"
            size="lg"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-6">
          <Input
            required
            id="password"
            type="password"
            value={password}
            label="Your Password"
            size="lg"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <Button
            variant="outlined"
            size="sm"
            className="flex w-full rounded-full mt-3 md:mt-0 md:mr-5 items-center justify-center"
            onClick={handleSignUpButtonClick}
          >
            {  "Sign up" }
          </Button>
          <Button
            type="submit"
            variant="filled"
            className="flex w-full rounded-full items-center justify-center"
          >
            { "Continue" }
          </Button>
        </div>
      </form>
    </div>
  );
}