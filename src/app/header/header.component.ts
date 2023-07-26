import { Component } from '@angular/core';
import {LightService} from "../services/light.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public lightService: LightService) {}
}
