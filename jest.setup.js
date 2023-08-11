import '@testing-library/jest-dom';
jest.mock('next/router', () => require('next-router-mock'));
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
global.console = {
  ...console,
  warn: jest.fn(),
};
expect.extend({
  toBeBoolean(received) {
    return typeof received === 'boolean'
      ? {
          message: () => `expected ${received} to be boolean`,
          pass: true,
        }
      : {
          message: () => `expected ${received} to be boolean`,
          pass: false,
        };
  },
});
