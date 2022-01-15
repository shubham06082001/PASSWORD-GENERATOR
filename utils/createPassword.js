TODO: // use npm link to activate globally and npm unlink to deactivate globally!!!

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : '';
  hasSymbols ? (chars += symbols) : '';

  return generatedPassword(length, chars);
};

const generatedPassword = (length, chars) => {
  let password = '';

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
};

module.exports = createPassword;
