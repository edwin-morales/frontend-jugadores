import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public listdeVideos:Array<any> =[];
  constructor(private favoriteService:FavoriteService) {}

  ngOnInit(): void {
    this.favoriteService.disparadorDeFavoritos.subscribe(data=>{
      console.log("Recibiendo data...",data)
      this.listdeVideos.push(data);
    })
  }

}
