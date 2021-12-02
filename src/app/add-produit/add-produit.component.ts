import { Component, OnInit } from '@angular/core';
import { ProduitsComponent } from '../produits/produits.component';
import { Produit}from "../model/produit.model";
import { ProduitService } from '../service/produit.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
newProduit=new Produit();
  constructor(private produitservice: ProduitService,
              private router :Router) { 

  }

  ngOnInit(): void {
  }
  addProduit(){
    this.produitservice.ajouterProduit(this.newProduit).subscribe(prod => {
    console.log(prod);
    });
    this.router.navigate(['produits']).then(() => {
      window.location.reload();
      });;
    }
}
