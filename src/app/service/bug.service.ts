import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from '../mybugs/mybugs.component';
import { API_URL } from '../app.constants';
import { JPA_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class BugService {
  constructor(private http: HttpClient) {}

  getAllUserBugs() {
    return this.http.get<Bug[]>(`${JPA_API_URL}/users/bugs`);
  }

  getUserBugs(username) {
    return this.http.get<Bug[]>(`${JPA_API_URL}/users/${username}/bugs`);
  }

  deleteBug(username, id) {
    return this.http.delete(`${JPA_API_URL}/users/${username}/bugs/${id}`);
  }

  retrieveBug(username, id) {
    return this.http.get<Bug>(`${JPA_API_URL}/users/${username}/bugs/${id}`);
  }

  updateBug(username, id, bug) {
    return this.http.put(`${JPA_API_URL}/users/${username}/bugs/${id}`, bug);
  }

  createBug(username, bug) {
    return this.http.post(`${JPA_API_URL}/users/${username}/bugs/`, bug);
  }
}
