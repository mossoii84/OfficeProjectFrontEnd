import {Zdanie} from "../zdanie/zdanie";

export class  Office {
  constructor(
    public id:number,
    public nameOffice:string,
    public zdanie:Zdanie
  ){}
}
