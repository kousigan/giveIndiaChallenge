import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SlotService } from './services/slot.service';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MainRoutingModule
  ],
  providers: [SlotService]
})
export class MainModule { }
