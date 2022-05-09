import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-prediting',
  templateUrl: './prediting.component.html',
  styleUrls: ['./prediting.component.css']
})
export class PreditingComponent implements OnInit {
  loading:boolean=true;
  result:boolean=false;
  Result :any;
  url:string="";
  sub:any;
  constructor(private route: ActivatedRoute, private http:HttpClient, private service:HttpService ,private router:Router) {  this.loading = false; }   


  ngOnInit(): void{
    this.sub = this.route.params.subscribe(params => {
      this.url = params['data'];
      this.url=atob(this.url);
      this.onSearch();

       });
}

  

  onSearch(){
    this.loading = true;
    this.service.send(this.url).subscribe(data=>{
      console.log(data);
      this.loading=false;
      this.result=true;
      
      this.Result=data;
      console.log(this.Result.data.hostname)
    });

  }
  gotopredictin(){
 
    this.router.navigate(['../prediting']);  // define your component where you want to go
}


}
