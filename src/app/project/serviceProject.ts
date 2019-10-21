import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ServiceProject {
  private url="http://localhost:8080/project/";
  constructor(private http:HttpClient){}


  getAllProject(){return this.http.get(this.url);}

  savePostProject(MyPostProjectForm){
    return this.http.post(this.url,MyPostProjectForm);
  }

  putProject(MyPostProjectForm){
    return this.http.put(this.url+MyPostProjectForm.id,MyPostProjectForm)
  }

  deleteProjectInProject(id:number){
    return this.http.delete(this.url+id);
  }

}
