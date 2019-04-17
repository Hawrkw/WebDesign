import {servers} from '../../tool/servers'

export class loginApi {
  static login(data) {

    return servers.connection('GET', `/user/login`, data)
  }
  static register(data) {
    return servers.connection('GET', `/user/register`, data)
  }
}
