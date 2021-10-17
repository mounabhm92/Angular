import { Component, OnInit } from '@angular/core';
import { Cours } from '../models';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mesCours  : Cours[]= [{"id":1 ,"nom":"java" ,"vh":15},
  {"id":2 ,"nom":"spring-Boot" ,"vh":15},
  {"id":3 ,"nom":"Git" ,"vh":5}];
  formation: string = "fullStack";
  tabElements: string[] = [];

  constructor(private produitService :ProduitService) {
    //console.log("Construteur home");
  }

  ngOnInit(): void {
    //console.log("ngOnint home");
    this.getlist();


  }
  getlist() {
    this.tabElements.push("Spring-boot");
    this.tabElements.push("Git");
    this.tabElements.push("Scrum");
    this.tabElements.push("Angular");
  }

  cliquerici(){
   this.produitService.info();
  }

}
