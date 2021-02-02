import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BugService} from '../service/bug.service';

export class Bug{
constructor(
  public subject: string,
  public id: number,
  public status: string,
  public date: Date,
  public description: string,
  public username: string
  ){}

}

@Component({
  selector: 'app-mybugs',
  templateUrl: './mybugs.component.html',
  styleUrls: ['./mybugs.component.css']
})
export class MybugsComponent implements OnInit {
  bugs: Bug[]
  username='mike'
  deleteMessage: string;

  constructor(private bugService: BugService, private router:Router) { }

  ngOnInit(): void {

    this.bugService.getUserBugs(this.username).subscribe(
      response => {
        console.log(response)
        this.bugs = response;
      }
    )
  }

  deleteBug(id){
    this.bugService.deleteBug(this.username,id).subscribe(
      response => {
        console.log(response)
      this.deleteMessage = `Deleted ${id} Bug`
      
      this.bugService.getUserBugs(this.username).subscribe(
        response => {
          this.bugs = response;
        }
      )
      }
    )
  }

  updateBug(id){
    this.router.navigate(['bugs',id])
  }

  addBug(){
    this.router.navigate(['bugs',-1])
  }

  

}
