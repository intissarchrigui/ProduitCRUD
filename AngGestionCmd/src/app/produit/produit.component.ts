
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
//import { PopAddEditComponent } from "../pop-add-edit/pop-add-edit.component";
import { ProduitService } from '../service.service';
import { Produit} from '../produit.model';
import { NgForm } from '@angular/forms';

declare var M: any;
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
  providers: [ProduitService]
})

export class ProduitComponent implements OnInit {
/*   data: any = [
    { id: 1, name: "Produit1", price: 10, amount: 1005 },
    { id: 2, name: "Produit2", price: 20, amount: 500 },
    { id: 3, name: "Produit3", price: 30, amount: 700 },
    { id: 4, name: "Produit4", price: 40, amount: 2300 },
  ]; */
  constructor(public produitService:ProduitService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshProduitList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.produitService.selectedProduit = {
      _id: "",
      name: "",
      Prix: null,
      Quantite: null

    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.produitService.postProduit(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProduitList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.produitService.putProduit(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProduitList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshProduitList() {
    this.produitService.getProduitList().subscribe((res) => {
      this.produitService.produits = res as Produit[];
    });
  }

  onEdit(pdt: Produit) {
    this.produitService.selectedProduit = pdt;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.produitService.deleteProduit(_id).subscribe((res) => {
        this.refreshProduitList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
