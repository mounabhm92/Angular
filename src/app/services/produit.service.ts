import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }


  info(){
    alert("Mon premier Service");
  }
}
