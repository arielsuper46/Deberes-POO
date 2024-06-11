import { Component, OnInit } from '@angular/core';
import { JokesComponent } from '../../jokes/jokes.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports:[JokesComponent, NgFor]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
