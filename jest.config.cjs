// jest.config.cjs
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Para transformar archivos JavaScript con Babel
    '^.+\\.tsx?$': 'ts-jest', // Para transformar archivos TypeScript con ts-jest
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};