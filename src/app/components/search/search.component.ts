import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loading:boolean=true;
  result:boolean=false;
  url:string = '';
  Result : any=[];
  constructor(private router: Router, private http:HttpClient, private service:HttpService) {  this.loading = false; }   


  ngOnInit(): void{
}

  

  onSearch():void{
    this.loading = true;
    this.service.send(this.url).subscribe(data=>{
      console.log(data);
      this.loading=false;
      this.result=true;
    });
  }

}
