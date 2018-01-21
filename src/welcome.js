export class Welcome {
  _height = 0;
  _age = 0;
  _type = 0;

  get height() {
    return this._height;
  }

  set height(value){
    this._height = value;
  }

  get age() {
    return this._age;
  }

  set age(value){
    this._age = value;
  }

  get type() {
    return this._type;
  }

  set type(value){
    this._type = value;
  }

  submit() {
    alert(`Welcome, ${this.fullName}!`);
  }
}
