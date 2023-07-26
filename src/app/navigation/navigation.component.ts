import { Component } from '@angular/core';
import {LightService} from "../services/light.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(public lightService: LightService) {
  }

  public addLight(): void {
    this.lightService.addLight();
  }
}
