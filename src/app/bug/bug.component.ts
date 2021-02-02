import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bug } from '../mybugs/mybugs.component';
import { BugService } from '../service/bug.service';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent implements OnInit {
id: number;
bug: Bug;
  
  constructor(private route:ActivatedRoute,private bugService: BugService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
   
    this.bug = new Bug(" ",this.id,"Open",new Date()," ", "Mike")

    if(this.id !=-1){
   this.bugService.retrieveBug('mike',this.id)
   .subscribe(
     data=> this.bug = data
   )
   }
  }

  saveBug(){
    if(this.id == -1){
      this.bugService.createBug('mike',this.bug).subscribe(
      data=> {
        
        this.router.navigate(['allbugs'])
      }
      )
        
    } else {
    this.bugService.updateBug('mike',this.id,this.bug)
    .subscribe(
      data=> {
        console.log(data)
        this.router.navigate(['allbugs'])
      }
      
    )
    }
  }
}
