import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private h:HttpClient) { 
    alert("I am Constructor"+h)
  }
  getData(){
    return this.h.get(this.url)
  }
}
