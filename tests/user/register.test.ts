import UserService from '../../services/user.service';

const userService = new UserService();

test('missing name', async () => {
  const data = {
    email: 'a@a.com',
    password: 'abc',
    retypePassword: 'abc',
  };
  expect(await userService.processRegistration(data))
    .toStrictEqual({
      success: false,
      message: 'Missing name.'
    });
});

test('missing email', async () => {
  const data = {
    name: 'abc',
    password: 'abc',
    retypePassword: 'abc',
  };
  expect(await userService.processRegistration(data))
    .toStrictEqual({
      success: false,
      message: 'Missing email.'
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
      message: 'Missing password.'
    });
});

test('missing retype password', async () => {
  const data = {
    name: 'abc',
    email: 'a@a.com',
    password: 'abc',
  };
  expect(await userService.processRegistration(data))
    .toStrictEqual({
      success: false,
      message: 'Missing retype password.'
    });
});

test('not equal retype password', async () => {
  const data = {
    name: 'abc',
    email: 'a@a.com',
    password: 'abc',
    retypePassword: 'abcd',
  };
  expect(await userService.processRegistration(data))
    .toStrictEqual({
      success: false,
      message: 'Retype password not equal.'
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
      message: 'Invalid email.'
    });
});