import { Component, OnInit } from '@angular/core';
import { SlotService } from '../services/slot.service';
import { Slot } from 'src/app/structures/slot';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  space: Slot = {
    id: 0,
    slotId: 0,
    vehicle: '',
    inTime: null
  } ;
  totalSlots: Slot[] = [];
  total: number;
  getCount: number;

  constructor( private slot: SlotService) {

  }

  ngOnInit() {
    this.getTotal();
  }

  getTotal(){
    this.slot.getSlots().subscribe(res => {
      this.totalSlots = res;
      this.total = this.totalSlots.length;
     });
  }
  addSpace(i: number) {
    if ( i !== 0) {
     this.slot.addSlot(this.space).subscribe(res => {
       console.log(res);
        this.getTotal();
        i--;
        this.getCount--;
        this.addSpace(i);
     });

    } else {
      this.getCount = 0;
    }
  }

}
