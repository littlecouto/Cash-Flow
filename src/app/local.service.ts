import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable()
export class LocalService {

  private database;
  private _DB;

  constructor () {
    this.database = environment.database;
    this._setup();
  }

  _setup (){
    var dbName = this.database.name;
    if(!localStorage.getItem(dbName)) {
      localStorage.setItem(dbName, '{}');
    }

    this._DB = JSON.parse(localStorage.getItem(dbName));
  }

  setItem (item, value){
    this._DB[item] = value;
    this.update();
  }

  getItem (item){
    return this._DB[item];
  }

  remove (item){
    if(typeof this._DB[item]) delete this._DB[item];
    this.update();
  }

  update (){
    var dbName = this.database.name;
    localStorage.setItem(dbName, JSON.stringify(this._DB));
  }

}
