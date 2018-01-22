import { inject } from "aurelia-framework";
import { SkiLengthCalculatorApi } from "../apis/ski-length-calculator-api";
import { json } from "aurelia-fetch-client";

@inject(SkiLengthCalculatorApi)
export class SkiLengthCalculator {

  _height = 0;
  _age = 0;
  _selectedTypeId = 1;

  constructor(skiLengthCalculatorApi) {
    this._skiLengthCalculatorApi = skiLengthCalculatorApi;
  }

  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }

  get selectedTypeId() {
    return this._selectedTypeId;
  }
  set selectedTypeId(value) {
    this._selectedTypeId = value;
  }

  calculate() {
    this._skiLengthCalculatorApi.getLength(this._height, this._age, this._selectedTypeId).then(x => {
      x.json().then(response => {

        if (response.Errors) {
          this.isValid = false;
          this.validationErrors = response.Errors;
        }
        else {
          this.isValid = true;
          if (response.MinLength == response.MaxLength) {
            this.skiLength = response.MinLength + ' cm';
          }
          else {
            this.skiLength = response.MinLength + ' - ' + response.MaxLength + ' cm';
          }
        }
      });
    });
  }
}
