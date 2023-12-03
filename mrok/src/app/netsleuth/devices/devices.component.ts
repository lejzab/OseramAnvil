import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicestableComponent } from "../devicetable/devicetable.component";
import { Device } from '../device';
import { NetsleuthService } from '../netsleuth.service';

@Component({
  selector: 'app-devices',
  standalone: true,
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css',
  imports: [CommonModule, DevicestableComponent]
})
export class DevicesComponent {
  
  deviceList: Device[] = [];
  filteredDeviceList: Device[] = [];

  constructor(private netsleuthService: NetsleuthService) {
    this.deviceList = this.netsleuthService.getAllDevices();
  }
}
