import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp=this.http.get("https://jsonplaceholder.typicode.com/users")
    resp.subscribe((data)=>console.log(data));
  }

}
