import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Input, Typography } from '@material-tailwind/react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import UserService from '@/services/user.service';

/**
 * RegisterForm component
 * @author Kenneth Sumang
 * @since  2023.05.16
 */
export default function RegisterForm() {
  const router = useRouter();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ retypePassword, setRetypePassword ] = useState('');

  /**
   * Handles register form submit event
   * @param event
   * @returns {Promise<any>}
   */
  async function handleRegisterFormSubmit(event: React.FormEvent<HTMLFormElement>): Promise<any> {
    event.preventDefault();
    const userService = new UserService();
    const response = await userService.processRegistration({
      name: name,
      email: email,
      password: password,
      retypePassword: retypePassword
    });
    console.log(response);
  }

  /**
   * Handles back button click
   * @returns {Promise<boolean>}
   */
  async function handleBackButtonClick(): Promise<boolean> {
    return router.push('/');
  }

  return (
    <div className="w-full px-5">
      <Typography variant="h4" color="blue-gray">
        Register
      </Typography>
      <Typography color="gray" className="mt-1 mb-6 font-normal">
        Enter your details to register.
      </Typography>

      <form onSubmit={(event) => handleRegisterFormSubmit(event)}>
        <div className="mb-6">
          <Input
            required
            id="register__name"
            type="text"
            value={name}
            label="Your Name"
            size="lg"
            onChange={ (e) => setName(e.target.value) }
          />
        </div>

        <div className="mb-6">
          <Input
            required
            id="register__email"
            type="email"
            value={email}
            label="Your Email"
            size="lg"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-6">
          <Input
            required
            id="register__password"
            type="password"
            value={email}
            label="Your Password"
            size="lg"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>

        <div className="mb-6">
          <Input
            required
            id="register__retype_password"
            type="password"
            value={email}
            label="Retype Your Password"
            size="lg"
            onChange={ (e) => setRetypePassword(e.target.value) }
          />
        </div>

        <div className="flex flex-row">
          <Button
            className="flex flex-row w-full mr-5 px-5 py-2.5 justify-center items-center text-center"
            variant="text"
            size="md"
            onClick={handleBackButtonClick}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-5 w-5 mr-3" />
            Back
          </Button>
          <Button
            type="submit"
            variant="filled"
            size="md"
            className="w-full px-5 py-2.5 text-center"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}