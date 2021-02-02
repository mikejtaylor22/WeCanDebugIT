import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bug } from '../mybugs/mybugs.component';
import { BugService } from '../service/bug.service';

  
  

@Component({
  selector: 'app-allbugs',
  templateUrl: './allbugs.component.html',
  styleUrls: ['./allbugs.component.css']
})
export class AllbugsComponent implements OnInit {
  bugs: Bug[]
  deleteMessage: string

  constructor(private bugService:BugService, private router: Router) { }

  ngOnInit(): void {
    this.bugService.getAllUserBugs().subscribe(
      response => {
        this.bugs = response;
      }
    )
  }

  deleteBug(username, id){
    this.bugService.deleteBug(username,id).subscribe(
      response => {
        console.log(response)
        this.deleteMessage = `Deleted Bug ${id}`
        this.bugService.getAllUserBugs().subscribe(
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
