import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-device-temp',
  templateUrl: './device-temp.component.html',
  styleUrls: ['./device-temp.component.css']
})
export class DeviceTempComponent implements OnInit {
  displayedColumns: string[] = ['deviceid', 'deviceip', 'devicedescription', 'devicetype', 'status', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

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
  {deviceid: 954143254, deviceip: '11.23.21.21', devicedescription: 'measuring temparture', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143255, deviceip: '11.23.21.22', devicedescription: 'measuring heartbeat', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143256, deviceip: '11.23.21.23', devicedescription: 'measuring humidity', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143257, deviceip: '11.23.21.24', devicedescription: 'measuring heatrate', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143258, deviceip: '11.23.21.25', devicedescription: 'measuring oxygen', devicetype: 'N/A', status: 'N/A', actions:'action1'},,
  {deviceid: 954143254, deviceip: '11.23.21.21', devicedescription: 'measuring temparture', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143255, deviceip: '11.23.21.22', devicedescription: 'measuring heartbeat', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143256, deviceip: '11.23.21.23', devicedescription: 'measuring humidity', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143257, deviceip: '11.23.21.24', devicedescription: 'measuring heatrate', devicetype: 'N/A', status: 'N/A', actions:'action1'},
  {deviceid: 954143258, deviceip: '11.23.21.25', devicedescription: 'measuring oxygen', devicetype: 'N/A', status: 'N/A', actions:'action1'},,
 
];


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */