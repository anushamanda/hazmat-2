import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'  

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material/material.module';
import { DeviceComponent } from './device/device.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceTempComponent } from './device-temp/device-temp.component';
import { DeviceTempModule } from './device-temp/device-temp.module';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    DeviceTempComponent
  ],
  imports: [
    BrowserModule, 
    DemoMaterialModule, BrowserAnimationsModule, HttpClientModule, DeviceTempModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
