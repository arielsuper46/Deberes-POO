import { Component, OnInit } from '@angular/core';
import { CitizenComponent } from '../../component/citizen/citizen.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [
    CitizenComponent
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
