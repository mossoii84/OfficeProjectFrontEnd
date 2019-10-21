import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ServiceZdanie{

  private url="http://localhost:8080/zdanie/";
  constructor(private http:HttpClient){}

  getAllZdanie(){
    return this.http.get(this.url);
  }

  savePostZdanie(MyPostZdanieForm){
    return this.http.post(this.url,MyPostZdanieForm);
  }

  putZdanie(MyPostZdanieForm){
    return this.http.put(this.url+MyPostZdanieForm.id,MyPostZdanieForm)
  }


  deleteZdanieInZdanie(id:number){
    return this.http.delete(this.url+id);
  }

}
