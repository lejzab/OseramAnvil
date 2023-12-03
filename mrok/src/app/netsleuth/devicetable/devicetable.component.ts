import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Device } from '../device';

@Component({
  selector: 'app-devicestable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devicetable.component.html',
  styleUrl: './devicetable.component.css'
})
export class DevicestableComponent {
  expandedRowIndex: number | null = null;
  @Input() deviceList: Device[] = [];

  toggleDetails(index: number): void {
    this.expandedRowIndex = this.expandedRowIndex === index ? null : index;
  }
}
