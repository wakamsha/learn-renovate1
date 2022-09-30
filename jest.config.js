const { readFileSync } = require('fs');
const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');

function builder() {
  const filepath = path.join(__dirname, './tsconfig.json');
  const tsconfig = readFileSync(filepath, 'utf8');
  const { compilerOptions } = JSON.parse(tsconfig);

  return {
    preset: 'ts-jest',
    clearMocks: true,
    testEnvironment: 'node',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    globals: {
      TextEncoder,
      'ts-jest': {
        // Unit Test のパフォーマンス向上のための施策。
        // これを指定しておくことで Jest 実行時に TypeScript の型チェックがスキップされる。
        // 詳細: https://huafu.github.io/ts-jest/user/config/isolatedModules
        isolatedModules: true,
      },
    }
  };
}

module.exports = builder();
