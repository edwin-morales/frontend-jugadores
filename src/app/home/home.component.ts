import { Component, OnInit } from '@angular/core';
import { ResponseDto } from '../responseDto';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listadeVideos: any = []

  constructor (private restService:RestService){}

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.restService.get("https://localhost:44304/api/Videos/GetVideos")
    .subscribe(respuesta => {
      var response = respuesta as ResponseDto;
      console.log(response);
      this.listadeVideos = response.data;
    });
  }
}


