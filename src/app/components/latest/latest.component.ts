import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  constructor(private router:Router) { }
  gotolatest(){
    this.router.navigate(['../latest']);  // define your component where you want to go
}

  ngOnInit(): void {
  }

}
