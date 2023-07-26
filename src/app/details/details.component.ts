import { Component } from '@angular/core';
import {LIGHT_COLOR, LightService} from "../services/light.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  public LIGHT_COLOR = LIGHT_COLOR;
  constructor(public lightService: LightService) {}

  public selectColor(color: LIGHT_COLOR): void {
    if (this.lightService.selectedLight) {
      this.lightService.changeColor(this.lightService.selectedLight, color);
    }
  }
}
