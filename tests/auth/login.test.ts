import AuthService from '../../services/auth.service';

const authService = new AuthService();

test('missing email and password', async () => {
  expect(await authService.processLogin({}))
    .toStrictEqual({
      success: false,
      message: 'Invalid credentials.'
    });
});

test('missing email', async () => {
  expect(await authService.processLogin({ password: '' }))
    .toStrictEqual({
      success: false,
      message: 'Invalid credentials.'
    });
});

test('missing password', async () => {
  expect(await authService.processLogin({ email: 'admin@example.com' }))
    .toStrictEqual({
      success: false,
      message: 'Invalid credentials.'
    });
});

test('invalid email', async () => {
  expect(await authService.processLogin({ email: 'a', password: '' }))
    .toStrictEqual({
      success: false,
      message: 'Invalid credentials.'
    });
});