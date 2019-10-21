import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ServiceEmployee{

  private url="http://localhost:8080/employee/";
  constructor(private http:HttpClient){}

  getAllEmployee(){
   return this.http.get(this.url);
  }

  savePostEmployee(MyPostEmployeeForm){
    return this.http.post(this.url,MyPostEmployeeForm);
  }

  putEmployee(MyPostEmployeeForm){
    return this.http.put(this.url+MyPostEmployeeForm.id,MyPostEmployeeForm)
  }


  deleteEmployeeInEmployee(id:number){
    return this.http.delete(this.url+id);
  }



}
