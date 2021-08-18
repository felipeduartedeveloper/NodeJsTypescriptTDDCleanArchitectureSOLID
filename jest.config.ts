export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\ts$': 'ts-jest'
  }
}
