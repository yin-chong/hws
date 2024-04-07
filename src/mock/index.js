import Mock from "mockjs";
import { apiConfig } from '../api/apiConfig/apiConfig';
import { mockConfig } from './mockConfig/index';
let { baseUrl,  apiList } = apiConfig;
apiList.map(item => {
  if( !(Object.prototype.hasOwnProperty.call(item, 'mock') && item.mock) ) return void 666;
  const env = process.env.NODE_ENV;
  Mock.mock(`${baseUrl[env]}${item.url}`, mockConfig[item.name])
})
Mock.setup({
  timeout: '1000-5000',
  // timeout: '10000-500000',
})
