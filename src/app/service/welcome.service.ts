import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';

export class HelloWorldBean {
  constructor(public message: String) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world-bean`
    );
  }

  executeHelloWorldServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world/path-variable/${name}`
    );
  }
}
