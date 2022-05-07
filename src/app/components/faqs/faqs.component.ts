import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQSComponent implements OnInit {

  constructor( private router: Router) { }
  gotoFaqs(){
    this.router.navigate(['../faqs']);  // define your component where you want to go
}
  ngOnInit(): void {
  }

}
