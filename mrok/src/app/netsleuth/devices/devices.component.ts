import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css'
})
export class DevicesComponent {
  data = [
    { id: 1, name: 'Item 1', ip: '10.20.30.40', location: 'lokalizacja 1', details: 'Details for Item 1' },
    { id: 2, name: 'Item 2', ip: '11.12.13.11', location: 'lokalizacja inna', details: 'Details for Item 2' },
    // Add more data as needed
  ];
  expandedRowIndex: number | null = null;

  toggleDetails(index: number): void {
    this.expandedRowIndex = this.expandedRowIndex === index ? null : index;
  }
}
