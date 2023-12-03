import { Injectable } from '@angular/core';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class NetsleuthService {

  deviceList: Device[] = [
    { id: 101, name: 'Device 1', ip: '192.168.1.1', location: 'Location 1', details: 'Details for Device 1' },
    { id: 202, name: 'Device 2', ip: '192.168.1.2', location: 'Location 2', details: 'Details for Device 2' },
    { id: 303, name: 'Device 3', ip: '192.168.1.3', location: 'Location 3', details: 'Details for Device 3' },
    { id: 404, name: 'Device 4', ip: '192.168.1.4', location: 'Location 4', details: 'Details for Device 4' },
    { id: 505, name: 'Device 5', ip: '192.168.1.5', location: 'Location 5', details: 'Details for Device 5' },
    { id: 606, name: 'Device 6', ip: '192.168.1.6', location: 'Location 6', details: 'Details for Device 6' },
    { id: 707, name: 'Device 7', ip: '192.168.1.7', location: 'Location 7', details: 'Details for Device 7' },
    { id: 808, name: 'Device 8', ip: '192.168.1.8', location: 'Location 8', details: 'Details for Device 8' },
    { id: 909, name: 'Device 9', ip: '192.168.1.9', location: 'Location 9', details: 'Details for Device 9' },
    { id: 1010, name: 'Device 10', ip: '192.168.1.10', location: 'Location 10', details: 'Details for Device 10' },
    { id: 1111, name: 'Device 11', ip: '192.168.1.11', location: 'Location 11', details: 'Details for Device 11' },
    { id: 1212, name: 'Device 12', ip: '192.168.1.12', location: 'Location 12', details: 'Details for Device 12' },
    { id: 1313, name: 'Device 13', ip: '192.168.1.13', location: 'Location 13', details: 'Details for Device 13' },
    { id: 1414, name: 'Device 14', ip: '192.168.1.14', location: 'Location 14', details: 'Details for Device 14' },
    { id: 1515, name: 'Device 15', ip: '192.168.1.15', location: 'Location 15', details: 'Details for Device 15' },
    { id: 1616, name: 'Device 16', ip: '192.168.1.16', location: 'Location 16', details: 'Details for Device 16' },
    { id: 1717, name: 'Device 17', ip: '192.168.1.17', location: 'Location 17', details: 'Details for Device 17' },
    { id: 1818, name: 'Device 18', ip: '192.168.1.18', location: 'Location 18', details: 'Details for Device 18' },
    { id: 1919, name: 'Device 19', ip: '192.168.1.19', location: 'Location 19', details: 'Details for Device 19' },
    { id: 2020, name: 'Device 20', ip: '192.168.1.20', location: 'Location 20', details: 'Details for Device 20' },
  ];

  getAllDevices(): Device[] {
    return this.deviceList;
  }

  getDeviceById(id: number): Device | undefined {
    return this.deviceList.find(device => device.id === id);
  }

  constructor() { }
}
