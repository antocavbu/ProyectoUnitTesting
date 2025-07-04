export default {
  testEnvironment: 'node',

  // Jest que mapea TODO .js a babel-jest
  // fix para que entienda import/export ES6
  transform: {
    '^.+\\.js$': 'babel-jest'
  },

  // Extensiones que puede cargar
  moduleFileExtensions: ['js', 'json', 'node'],

  // Dónde buscar tests
  testMatch: ['**/tests/**/*.js'],

  // Cobertura
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: { branches: 80, functions: 80, lines: 80, statements: 80 }
  }
};