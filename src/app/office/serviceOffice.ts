import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ServiceOffice{

  private url="http://localhost:8080/office/";
  constructor(private http:HttpClient){}

  getAllOffice(){
    return this.http.get(this.url);
  }

  savePostOffice(MyPostOfficeForm){
    return this.http.post(this.url,MyPostOfficeForm);
  }

  putOffice(MyPostOfficeForm){
    return this.http.put(this.url+MyPostOfficeForm.id,MyPostOfficeForm)
  }


  deleteOfficeInOffice(id:number){
    return this.http.delete(this.url+id);
  }

}
