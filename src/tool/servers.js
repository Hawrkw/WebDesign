import axios from 'axios'
import qs from 'qs'
import {Msg} from './message'
import {version} from '../../package'
export class BaseApi {
  servers;
  hot;
  constructor(hot) {
    this.hot = hot;
    this.servers = axios.create({
      baseURL: hot,
      timeout: 600000
    });
    this.servers.interceptors.request.use(function (config) {
      return config
    }, function (error) {
      console.log(1)
      return Promise.reject(error || '网络繁忙，请稍候再试！');
    });
    this.servers.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      let msg = '';
      if (error.response) {
        switch (error.response.status) {
          case 400:
            msg = error.response.data.message;
            break;
          case 500:
            msg = error.response.data.message;
            break;
          default:
            console.log(2)
            msg = '网络繁忙，请稍候再试！'
        }
      } else {
        console.log(3)
        msg = '网络繁忙，请稍候再试！'
      }
      return Promise.reject(error.response || '网络繁忙，请稍候再试！');
    })
  }
  /**
   * fetch
   * @param method
   * @param url
   * @param body
   * @returns {Promise<any>}
   */
  connection(method = 'GET', url, body) {
    if (typeof body !== 'object') body = {};
    method = method.toLocaleLowerCase();
    if (method === 'get') {
      url = url + (url.indexOf('?') > 0 ? '&' : '?' + qs.stringify(body));
      body = {}
    }
    return Promise.resolve(this.servers[method](url, body))
  }
}

export const servers = new BaseApi('http://127.0.0.1:8080')

