import { Component } from '@angular/core';

@Component({
  templateUrl: 'vessels.component.html'
})
export class VesselsComponent {

  vessels = [
    { name: "Tiny Vessel", position: "pos1", size: 5 },
    { name: "Big Vessel", position: "pos2", size: 50 },
  ]

}
