import UserService from '../../services/user.service';

const userService = new UserService();

test('missing name', async () => {
  const data = {
    email: 'a@a.com',
    password: 'a1Bc!def',
    retypePassword: 'a1Bc!def',
  };
  expect(await userService.processRegistration(data))
    .toStrictEqual({
      success: false,
      message: 'Name is required.'
    });
});

test('missing email', async () => {
  const data = {
    name: 'abc',
    password: 'a1Bc!def',
    retypePassword: 'a1Bc!def',
  };
  expect(await userService.processRegistration(data))
    .toStrictEqual({
      success: false,
      message: 'Email is required.'
    });
});

test('missing password', async () => {
  const data = {
    name: 'abc',
    email: 'a@a.com',
    retypePassword: 'abc',
  };
  expect(await userService.processRegistration(data))
    .toStrictEqual({
      success: false,
      message: 'Password is required.'
    });
});

test('missing retype password', async () => {
  const data = {
    name: 'abc',
    email: 'a@a.com',
    password: 'a1Bc!def',
  };
  expect(await userService.processRegistration(data))
    .toStrictEqual({
      success: false,
      message: 'Passwords do not match.'
    });
});

test('not equal retype password', async () => {
  const data = {
    name: 'abc',
    email: 'a@a.com',
    password: 'a1Bc!def',
    retypePassword: 'abcd',
  };
  expect(await userService.processRegistration(data))
    .toStrictEqual({
      success: false,
      message: 'Passwords do not match.'
    });
});

test('invalid email', async () => {
  const data = {
    name: 'abc',
    email: 'abc',
    password: 'abc',
    retypePassword: 'abc',
  };
  expect(await userService.processRegistration(data))
    .toStrictEqual({
      success: false,
      message: 'Email must be a valid email address.'
    });
});