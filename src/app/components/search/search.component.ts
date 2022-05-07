import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { result } from '../../services/result';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Result : any=[];
  Predic : string="";
  private URL= 'https://phish-detection-api.herokuapp.com/predict?url=https%3A%2F%2Fgoogle.com&fbclid=IwAR37LChlFrQHXU_Et0cjpt3WaJzi8uRIwPxK-uPTjbpqv542iD7BLCQpzW4';
  constructor(private router: Router, private http:HttpClient, private results:HttpService) { }

  ngOnInit(): void{
    this.http.get(this.URL)
    .subscribe(Response => {
      console.log(Response);
      this.Result = Response;

    })
}

    
  onSubmit(form: NgForm){
    this.router.navigate(['search',form.value.search]);
  }


}
