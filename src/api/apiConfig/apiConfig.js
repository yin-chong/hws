import { test } from './test';
import { search } from './search';
// import { login } from './login';
export const apiConfig = {
  baseUrl: {
    development: `http://10.188.128.54:9050/api`, // 开发
    test: `http://10.188.128.54:9050/api`, // 测试
    production: `/api`,
    // production: `http://10.188.128.54:9099/api`, // 打包使用
  },
  apiList: [
    ...test,
    ...search,
    // ...login,
  ],
};
