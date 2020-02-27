import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmergencyService } from '../../../store/emergency.service';

@Component({
  templateUrl: 'emergencies.component.html'
})
export class EmergenciesComponent {

  @ViewChild(NgForm) public formGroup: NgForm;
  
  constructor(private emergencyService: EmergencyService) {
  }

  ngOnInit() {
    this.reset();
  }

  emergencies = [
    { name: "Little Hiccup",     position: "pos1", size: 5   },
    { name: "Huge Disaster",     position: "pos2", size: 50  },
    { name: "Doomsday Disaster", position: "pos3", size: 100 },
  ]

  save() {
    this.emergencyService.add(this.emergency).subscribe(result => {
      this.reset();
    })
  }

  reset() {
    this.emergency = { name: "", position: "", size: 0 };
  }

  emergency;

}
