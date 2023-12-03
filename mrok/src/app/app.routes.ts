import { Routes } from '@angular/router';
import { DevicesComponent } from './netsleuth/devices/devices.component';
import { LocationsComponent } from './netsleuth/locations/locations.component';

export const routes: Routes = [
    {
        path: '',
        component: DevicesComponent,
        title: 'devices'
    },
    {
        path: 'devices',
        component: DevicesComponent,
        title: 'devices'
    },
    {
        path: 'locations',
        component: LocationsComponent,
        title: 'locations'
    }
];
