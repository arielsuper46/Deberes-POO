import { Component, OnInit } from '@angular/core';
import { CitizenService } from '../../service/citizen.service';
import {  Major } from '../../models/major.model';
import { FireFighter } from '../../models/firefighter.model';
import { Doctor } from '../../models/Doctor.model';
import { Police } from '../../models/police.model';
import { Detective } from '../../models/detective.model';
import { Teacher } from '../../models/teacher.model';
import { Chef } from '../../models/chef.model';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  standalone: true,
  styleUrls: ['./citizen.component.css']
})
export class CitizenComponent implements OnInit {
  citizen!: Major;
  citizen1!: FireFighter;
  citizen2!: Police;
  citizen3!: Doctor;
  citizen4!: Chef;
  citizen5!: Detective;
  citizen6!: Teacher;
  citizen7!: Police;
  citizen8!: Doctor;
  citizen9!: Police;
  citizen10!: Doctor;
  citizen11!: Chef;
  citizen12!: Detective;
  citizen13!: Chef



  constructor(private citizenService: CitizenService) {}

  ngOnInit(): void {
    this.citizen = this.citizenService.getCitizen();
    this.citizen1 = this.citizenService.getCitizen1();
    this.citizen2 = this.citizenService.getCitizen2();
    this.citizen3 = this.citizenService.getCitizen3();
    this.citizen4 = this.citizenService.getCitizen4();
    this.citizen5 = this.citizenService.getCitizen5();
    this.citizen6 = this.citizenService.getCitizen6();
    this.citizen7 = this.citizenService.getCitizen7();
    this.citizen8 = this.citizenService.getCitizen8();
    this.citizen9 = this.citizenService.getCitizen9();
    this.citizen10 = this.citizenService.getCitizen10();
    this.citizen11 = this.citizenService.getCitizen11();
    this.citizen12 = this.citizenService.getCitizen12();
    this.citizen13 = this.citizenService.getCitizen13();
  }
}
