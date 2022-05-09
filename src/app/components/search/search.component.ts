import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { data } from 'src/app/services/data';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heading = 'angular url pattern validation with examples';
  urlForm: FormGroup;

  myusername: string = '';
  urlRegEx =
    '[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}(.[a-z]{2,4})?\b(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?';
  loading:boolean=true;
  result:boolean=false;
  url:string = "";
  Result :any;
  db64:string="";
  check:boolean=false;
  constructor(
    private router: Router, 
    private http:HttpClient, 
    private service:HttpService ) {  
      this.loading = false; 
      this.urlForm = new FormGroup({
        url: new FormControl('', {
          validators: [Validators.required, Validators.pattern(this.urlRegEx)],
          updateOn: 'blur',
        }),
      });
    }   


  ngOnInit(): void{
}

  

  onSearch(){
    
    if (this.url!=""){
     
        this.loading = true;
        this.service.send(this.url).subscribe(data=>{
          this.loading=false;
          this.result=true;
          this.Result=data;
          this.db64 = btoa(this.url);
          this.router.navigate(['predict', { data:this.db64  }]);
    
        },error =>{
          this.check=true;
          this.loading=false;
        }
        
        );
      
      
        

      
  
 
    } 
 
    

    

  }



  
}

