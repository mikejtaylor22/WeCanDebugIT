import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-newbug',
  templateUrl: './newbug.component.html',
  styleUrls: ['./newbug.component.css']
})
export class NewbugComponent implements OnInit {

id=null;
clientName: '';
bugDescription: '';
bugSubject: '';

newBug: {
  client: string,
  description: string,
  subject: string
};

  constructor(private route:Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.route.navigate(['bug', this.id])
    
    this.dataService.setBug(this.clientName,this.bugDescription,this.bugSubject)
    
  }

}
