// app.component.ts
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-father ',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzCardModule, ChildComponent],
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements AfterViewInit {
  parentMessage = 'Mensaje de Willy Wonka al Oompa Loompa';
  childMessage = '';

  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  receiveMessage($event: string) {
    this.childMessage = $event;
  }

ngAfterViewInit() {
  Promise.resolve().then(() => {
    this.childComponent.message = 'Mensaje inicial desde ViewChild (Padre)';
  });
}
}
