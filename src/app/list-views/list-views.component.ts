import { ResponseDto } from './../responseDto';
import { RestService } from './../rest.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-list-views',
  templateUrl: './list-views.component.html',
  styleUrls: ['./list-views.component.css'],
})
export class ListViewsComponent implements OnInit {
  @ViewChild('editTmpl', { static: true }) editTmpl!: TemplateRef<any>;
  @ViewChild('hdrTpl', { static: true }) hdrTpl!: TemplateRef<any>;

  data: any = [];
  columns: any = [{ prop: 'id' }, { name: 'image' }, { name: 'subtitle' }];
  rows: any = []


  ColumnMode = ColumnMode;

  constructor(private RestService: RestService) {}

  ngOnInit(): void {
    this.cargarData();
  }
  cargarData(): void {
    this.RestService.get(
      `https://localhost:44304/api/Videos/GetVideos`
    ).subscribe((response: any) => {
      var responseDto = response as ResponseDto;
      var list = responseDto.data as [];
      this.rows= responseDto.data;
      // this.data = list.map((video: any) => ({
      //   name: video.id,
      //   gender: video.image,
      //   company: video.subtitle,
      // }));
      // this.rows = this.data;
      // console.log(this.data);
    });
  }
}
