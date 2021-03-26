import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { MatButtonToggleModule } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})

export class FormComponent implements OnInit {
  TodayDate = Date.now();
  generalForm: FormGroup;
  tabs = ['Week 2'];
  selected = new FormControl(0);
  NoOfWeek = 2;
  gridsize: number = 30;
  stopTab: number = 0;

  onChangeWoundHeal($event) {
    this.stopTab = 1;
  }



  updateSetting($event) {
    this.gridsize = $event;
    console.log(1);
  }
  addTab($event, tabName: string) {


    if (this.stopTab == 1) {
      ($event.target as HTMLButtonElement).disabled = true;
      confirm("Patient is fully healed.");
    }
    else if (this.stopTab == 0) {
      this.NoOfWeek = this.NoOfWeek + 2;
      this.tabs.push('Week ' + this.NoOfWeek);
      confirm("Patient next Appointment will be in 2 weeks.");
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
