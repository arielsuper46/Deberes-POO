import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent implements OnInit{
  jokesCategories: any;
  randomJokes: any;
  constructor(private service: ApiService){}
ngOnInit(): void {
this.getJokesCat()
this.getRandomJokes()
}

getJokesCat(){
  this.service.getJokes().subscribe((data)=>{
this.jokesCategories = data.jokes
console.log(this.jokesCategories)
return this.jokesCategories
  })
}

getRandomJokes(){
  this.service.getRandomJokes().subscribe((data=> {
    this.randomJokes = data
  }))
}

}

