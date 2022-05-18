
import { Component, OnInit, Input } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;
  public image: string = "";

  constructor(private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    this.image = "http://picsum.photos/536/354"
    // console.log("Entrando data:",this.dataEntrante);
  }
  agregarFavorito(){
    // console.log(this.dataEntrante)
    this.favoriteService.disparadorDeFavoritos.emit({
      data:this.dataEntrante
    })
  }
}
