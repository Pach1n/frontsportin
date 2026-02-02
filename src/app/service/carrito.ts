import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverURL } from '../environment/environment';
import { IPage } from '../model/plist';
import { ICarrito } from '../model/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor(private oHttp: HttpClient) {}

  getPage(
    page: number,
    rpp: number,
    order: string = '',
    direction: string = '',
    filter: string = '',
    idArticulo: number = 0,
    idUsuario: number = 0
  ): Observable<IPage<ICarrito>> {
    if (order === '') {
      order = 'id';
    }
    if (direction === '') {
      direction = 'asc';
    }

    let url = `${serverURL}/carrito?page=${page}&size=${rpp}&sort=${order},${direction}`;

    if (idArticulo > 0) {
      url += `&id_articulo=${idArticulo}`;
    }

    if (idUsuario > 0) {
      url += `&id_usuario=${idUsuario}`;
    }

    if (filter && filter.length > 0) {
      url += `&filter=${encodeURIComponent(filter)}`;
    }

    return this.oHttp.get<IPage<ICarrito>>(url);
  }
}
