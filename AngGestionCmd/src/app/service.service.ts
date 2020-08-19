import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Produit } from './produit.model';

@Injectable()
export class ProduitService {
  selectedProduit: Produit;
  produits: Produit[];
  readonly baseURL = 'http://localhost:3000/produits';

  constructor(private http: HttpClient) { }

  postProduit(pdt: Produit) {
    return this.http.post(this.baseURL, pdt);
  }

  getProduitList() {
    return this.http.get(this.baseURL);
  }

  putProduit(pdt: Produit) {
    return this.http.put(this.baseURL + `/${pdt._id}`, pdt);
  }

  deleteProduit(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
