import { Injectable } from '@angular/core';

export enum LIGHT_COLOR {
  GREEN = 'green',
  RED = 'red',
  ORANGE = 'orange',
}

interface Light {
  color: LIGHT_COLOR;
  name: number;
}

@Injectable({
  providedIn: 'root'
})
export class LightService {
  private _lights: Light[] = [];
  private _selectedLight?: Light;
  private maxIndex: number = 0;
  private _redCount: number = 0;
  private _greenCount: number = 0;
  private _orangeCount: number = 0;

  public get lights(): Light[] {
    return this._lights;
  }

  public get redCount(): number {
    return this._redCount;
  }

  public get greenCount(): number {
    return this._greenCount;
  }

  public get orangeCount(): number {
    return this._orangeCount;
  }

  public get selectedLight(): Light | undefined {
    return this._selectedLight;
  }

  public addLight(): void {
    const newLight = {
      name: this.maxIndex + 1,
      color: this.getColor(this.maxIndex)
    };
    this.lights.push(newLight);
    this.maxIndex += 1;
    this.updateCounts();
    this._selectedLight = newLight;
  }

  public getColor(index: number): LIGHT_COLOR {
    const targetIndex = index % 3;
    switch (targetIndex) {
      case 0:
        return LIGHT_COLOR.RED;
      case 1:
        return LIGHT_COLOR.ORANGE;
      case 2:
        return LIGHT_COLOR.GREEN;
      default:
        return LIGHT_COLOR.RED;
    }
  }

  public selectLight(index: number): void {
    this._selectedLight = this.lights[index];
  }

  public changeColor(light: Light, color: LIGHT_COLOR): void {
    light.color = color;
    this.updateCounts();
  }

  public removeLight(): void {
    this._lights = this.lights.filter(light => light.name !== this.selectedLight?.name);
    this._selectedLight = undefined;
    this.updateCounts();
  }

  private updateCounts(): void {

    const colorsCounts = this.lights.reduce((colorsCounts, light) => {
      colorsCounts[light.color] += 1;
      return colorsCounts;
    }, { red: 0, green: 0, orange: 0 });
    this._redCount = colorsCounts.red;
    this._greenCount = colorsCounts.green;
    this._orangeCount = colorsCounts.orange;
  }
}
