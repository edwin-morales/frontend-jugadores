import { ResponseDto } from './../responseDto';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
public respuesta: any = [];
public comentarios: any =[];
public comentarioText: string= "";
public form: FormGroup;

 constructor(private route:ActivatedRoute, private RestService:RestService,
  private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      textAreaComentario: [""]
    });

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap

      this.cargarData(params.variable)
      this.cargarComentarios();


    })

    this.form = this.formBuilder.group({
      textAreaComentario: [""]
    });

  }

  cargarData(idVideo:string){
    this.RestService.get(`https://localhost:44304/api/Comentarios/GetComentariosByIdVideo/${idVideo}`)
    .subscribe(respuesta => {
      console.log(respuesta)
      var response= respuesta as ResponseDto;
      this.respuesta = response.data;
    });
  }
  public cargarComentarios(){

    this.RestService.get(`https://localhost:44304/api/Comentarios/GetComentarios`)
    .subscribe(respuesta =>{
      console.log(respuesta);
      var response = respuesta as ResponseDto;
      this.comentarios = response.data;
    });
  }

  public enviarData(){
    this.RestService.post(`https://localhost:44304/api/Comentarios/PostComentario`,
    {
      idVideo:1,
      texto:this.form.value.textAreaComentario
    }
    ).subscribe((respuesta: any) =>{
      var response = respuesta as ResponseDto;
      if(response.statusCode == 200){
        this.form.reset();
        this.cargarComentarios();
      } else {
        console.log("Something was wrong!");
      }
    })
  }
}
