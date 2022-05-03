import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }
  gotoHome(){
    this.router.navigate(['../aboutus']);  // define your component where you want to go
}
  ngOnInit(): void {
  }

}
