import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Hist } from 'src/app/interfaces/hits.interface';
import { News } from 'src/app/interfaces/news-select.interface';
import { DataSelectService } from 'src/app/utils/data-select.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public news: News[] = [];
  public hist: Hist[] = [];
  public histPush: Hist[] = [];
  public histStorage: Hist[] | any[] = [];
  public isFavorite = false;
  constructor(
    private dataSelect: DataSelectService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
   this.news = this.dataSelect.getDataNews();

   this.validViewDate();
  }

  public validViewDate(): void{
    this.histStorage = JSON.parse(String(localStorage.getItem('hist'))) ;
    if ( this.histStorage  === null){
      this.getNewsAll();
    }else{
     this.hist =  this.histStorage ;
    }
  }

  public getNewsAll(): void{
    this.httpService.getDataNewsAll$().subscribe((data) => {
      this.hist = data.hits;
    });
  }

  public myFavorite(id: number): void {
    this.hist = this.hist.filter((data) => {
      if (data.parent_id === id){
        data.favorite = true;
      }else{
        data.favorite = false;
      }
      this.setFavoritesLocalStorage(this.hist);
      return data;
    });
  }

  public setFavoritesLocalStorage(hist: Hist[]): void {
    localStorage.setItem('hist', JSON.stringify(hist));
  }

}
