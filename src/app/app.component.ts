import { Component } from '@angular/core';

export interface PeriodicElement {
  deviceid: number ;
  deviceip: string;
  devicedescription: string;
  devicetype: string;
  status:string;
  actions: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {deviceid: 954143254, deviceip: '11.23.21.21', devicedescription: 'measuring temparture', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143255, deviceip: '11.23.21.22', devicedescription: 'measuring heartbeat', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143256, deviceip: '11.23.21.23', devicedescription: 'measuring humidity', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143257, deviceip: '11.23.21.24', devicedescription: 'measuring heatrate', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143258, deviceip: '11.23.21.25', devicedescription: 'measuring oxygen', devicetype: 'N/A', status: 'N/A', actions:'action1'},,
 
  
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  displayedColumns: string[] = ['deviceid', 'deviceip', 'devicedescription', 'devicetype', 'status', 'actions'];
  dataSource = ELEMENT_DATA;
}
