import {servers} from '../../tool/servers'

export class storageApi {
  //获取存储信息
  static getStorage(data) {
    return servers.connection('GET', `/admin/storage`, data)
  }
}
