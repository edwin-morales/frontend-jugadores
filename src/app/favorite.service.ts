import {EventEmitter , Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
@Output() disparadorDeFavoritos: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
