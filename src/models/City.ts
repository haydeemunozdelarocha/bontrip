import {Addresses} from "../helpers/Addresses";
import * as uuidv4 from 'uuid/v4';

const randomColor = require('randomcolor');

export interface ICityCoordinates {
  lng: number;
  lat: number;
}

export class City {
  public name: string;
  public endDate: string;
  public startDate: string;
  public id: string;
  public coordinates: ICityCoordinates;
  public color: string;
  public distance: string;
  public duration: string;

  constructor(data?) {
    this.name = (data || {}).name || '';
    this.startDate = (data || {}).startDate || null;
    this.endDate = (data || {}).endDate || null;
    this.id = (data || {}).id || uuidv4();
    this.coordinates = {...(data || {}).coordinates} || {};
    this.color = (data || {}).color || null;
    this.distance = (data || {}).distance || null;
    this.duration = (data || {}).duration || null;
  }

  public generateColor(index: number): void {

    if (!this.color) {
      if (index % 2) {
        this.color = randomColor({
          luminosity: 'bright',
          hue: 'red'
        });
      } else if (index % 3) {
        this.color =  randomColor({
          luminosity: 'bright',
          hue: 'orange'
        });
      } else {
        this.color =  randomColor({
          luminosity: 'bright',
          hue: 'blue'
        });
      }
    }
  }

  public getCoordinatesArray() {
    return [this.coordinates.lat, this.coordinates.lng];
  }

  public normalize() {
    return {
      id: this.id,
      color: this.color,
      startDate: this.startDate,
      endDate: this.endDate,
      name: this.name,
      coordinates: this.coordinates,
      distance: this.distance,
      duration: this.duration
    }
  }

  public parseCityObject(cityObject) {
    const city: City = new City();
    const address_components = cityObject.address_components;

    address_components.forEach(function(component) {
      if (Addresses.isComponentValid(component)) {
        const componentType = Addresses.getComponentType(component);
        city[componentType] = component.long_name;
      }
    });

    city.coordinates = cityObject.geometry.location;

    return city;
  }
}
