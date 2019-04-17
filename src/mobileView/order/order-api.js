import {servers} from "../../tool/servers";

export class orderApi{
  static saveStorage(storage){
    return servers.connection('POST','/save/saveStorage',storage);
  }

  static saveSending(sending){
    return servers.connection('POST','/save/saveSending',sending);
  }

  static findArea(){
    return servers.connection('POST','/save/findArea');
  }

  static findPackage(areaId){
    return servers.connection('GET','/save/findPackage',areaId);
  }
}
