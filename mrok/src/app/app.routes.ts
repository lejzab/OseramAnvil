import { Routes } from '@angular/router';
import { DevicesComponent } from './netsleuth/devices/devices.component';
import { LocationsComponent } from './netsleuth/locations/locations.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // title: 'Net Sleuth'
    },
    {
        path: 'devices',
        component: DevicesComponent,
    },
    {
        path: 'locations',
        component: LocationsComponent,
        // title: 'Net Sleuth: locations'
    }
];
