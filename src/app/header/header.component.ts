import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  debug = '{Debug}';

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  addBug(){
    this.router.navigate(['bugs',-1])
  }

}
