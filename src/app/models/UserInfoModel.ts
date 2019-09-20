export class UserInfoModel {
  guid: string;
  customeUid: string;

  first_name: string;
  last_name: string;

  amail: string;
  zipcode: string;

  password: string;
  
  constructor(obj: any = null) {
    if(obj !=  null) {
      Object.assign(this, obj);
    }
  }
}