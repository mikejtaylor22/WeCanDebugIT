import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  bugClientName: string;
  bugDescription: string;
  newBug ={
    client:'',
    description:'',
    subject:''
  };

  constructor() { }

  public getClientName(){
    console.log('Service client name: ' + this.bugClientName)
    return this.bugClientName

  }
  public getBugDescription(){
    console.log('Service client desc: ' + this.bugDescription)
    return this.bugDescription
  }

  // public setClientName(client:string){
  //   this.bugClientName = client
  // }
  // public setDescription(description: string){
  //   this.bugDescription = description
  // }

  public setBug(client:string,description: string,subject: string){
      this.newBug.client = client;
      this.newBug.description = description;
      this.newBug.subject = subject;
  }

  public getBug(){
    return this.newBug;
  }
}
