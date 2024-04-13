import { risk } from './risk';
let basePath = window.location.href.split('//')[1].split('/')[0];
export const apiConfig = {
  baseUrl: {
    development: `http://${basePath}/api`, // 开发
    test: `http://10.188.128.54:9050/api`, // 测试
    production: `/api`,
    // production: `http://10.188.128.54:9099/api`, // 打包使用
  },
  apiList: [
    ...risk,
    // ...login,
  ],
};
