export default {
  testEnvironment: 'node',
  transform: {},  // ya que Babel se activa vía @babel/register
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: { branches: 80, functions: 80, lines: 80, statements: 80 }
  }
};