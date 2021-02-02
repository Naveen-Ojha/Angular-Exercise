import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
 
 url:any='https://jsonplaceholder.typicode.com/photos?albumId=1'
 userdata:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
      this.getData(this.url).subscribe(d=>{
       this.userdata=d;
       console.log(d);
     });
    }

    getData(url:any):Observable<any[]>
    {
      return this.http.get<any[]>(url)
    }
  
  }

  
  


