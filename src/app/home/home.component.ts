import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieDbService } from '../services/movieDb.service';
import { map, startWith } from "rxjs/operators";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieDbService: MovieDbService) { }

  searchControl =  new FormControl("")

  movieList: movieElement[] = []
  filteredMovieList: Observable<movieElement[]>;


  listName: string = ""
  listCreatedName: string = ""


  ngOnInit() {
  }

  getMovies(){

    this.movieDbService.getList1().subscribe(res => {
      console.log(res)
      console.log(res.results.map(x => x.adult)) //Tüm değerler aynı olduğu için listeme dağil etmedim
      console.log(res.results.map(x => x.media_type)) //Tüm değerler aynı olduğu için listeme dağil etmedim

      this.listName = res.name
      this.listCreatedName = "By " + res.created_by.name

      res.results.forEach(element => {
        this.movieList.push({
          title: element.title, overview: element.overview, popularity: element.popularity, posterPath:"url(https://image.tmdb.org/t/p/w500/" + element.poster_path + ")",
          realeseDate: element.release_date, voteAverege: element.vote_average, voteCount: element.vote_count
        })
      });


      this.filteredMovieList = this.searchControl.valueChanges.pipe(
        startWith<string | movieElement>(""),
        map(value => (typeof value === "string" ? value : value.title)),
        map(keyword => (keyword ? this.filterM(keyword) : this.movieList.slice()))
      );

      console.log(this.movieList)

    }, err => { console.log(err) })

  }

  private filterM(value: string): movieElement[] {
    const filterValue = value.toLocaleUpperCase();

    return this.movieList.filter(option =>
      option.title.toLocaleUpperCase().includes(filterValue)
    );
  }

}


export class movieElement {
  title: string
  overview: string
  popularity: number
  posterPath: string
  realeseDate: Date
  voteAverege: number
  voteCount: number
}

