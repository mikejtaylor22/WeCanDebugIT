import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent implements OnInit {
id='';
  bug : {
  client: string,
  description:string,
  subject:string
  };
  constructor(private route:ActivatedRoute,private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.bug = this.dataService.getBug();
    console.log(this.bug)
   
    
  }

}
