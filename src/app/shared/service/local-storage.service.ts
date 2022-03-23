import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocalStorage(name:string, data:any){
    if(data){
      JSON.stringify(localStorage.setItem(name, data))
    }
    
  }

  getLocalStorage(name:string){
    const value = localStorage.getItem(name)
    if(value){
      return JSON.parse(value)
    }
    return null
  }

}
