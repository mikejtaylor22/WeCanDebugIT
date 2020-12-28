import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from '../mybugs/mybugs.component';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }

  getAllUserBugs(){
    return this.http.get<Bug[]>(`http://localhost:8080/users/bugs`)
  }

  getUserBugs(username){
    return this.http.get<Bug[]>(`http://localhost:8080/users/${username}/bugs`)
  }

  deleteBug(username,id){
    return this.http.delete(`http://localhost:8080/users/${username}/bugs/${id}`)
  }


}
