import { Component, OnInit } from '@angular/core';
import { ExternalService } from './services/external.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  data:any;
  constructor(private x:ExternalService){
    alert("I am Constructor")

  }
  ngOnInit() {
    this.x.getData()
      .subscribe(response => {
        this.data = response;
      });
}
  title = 'external-service';
}
