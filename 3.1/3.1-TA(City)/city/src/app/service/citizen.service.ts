import { Injectable } from '@angular/core';
import { Major } from '../models/major.model'
import { FireFighter } from '../models/firefighter.model';
import { Police } from '../models/police.model';
import { Doctor } from '../models/Doctor.model';
import { Chef } from '../models/chef.model';
import { Detective } from '../models/detective.model';
import { Teacher } from '../models/teacher.model';
@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  citizen: (Major)
  citizen1: (FireFighter)
  citizen2: (Police)
  citizen3: (Doctor)
  citizen4: (Chef)
  citizen5: (Detective)
  citizen6: (Teacher)
  citizen7: (Police)
  citizen8: (FireFighter)
  citizen9: (Police)
  citizen10: (Doctor)
  citizen11: (Chef)
  citizen12: (Detective)
  citizen13: (Chef)

  constructor() {
     this.citizen = new Major ('Major 🧑‍💼', 'Arnold Schwarzenegger',76)
     this.citizen1 = new FireFighter ('FireFighter 🧑‍🚒', 'Robert Sponge',38)
     this.citizen2 = new Police ('Police👮','John Lennon',40)
     this.citizen3 = new Doctor ('Doctor 🧑‍⚕️','Paul McCartney',82)
     this.citizen4 = new Chef ('Chef 👨‍🍳','Ringo Starr',83)
     this.citizen5 = new Detective ('Detective 🕵️','George Harrison',58)
     this.citizen6 = new Teacher ('Teacher 👩‍🏫','Anya Taylor',28)
     this.citizen7 = new Police ('Police👮', 'Tom Cruise',61)
     this.citizen8 = new FireFighter ('FireFighter 🧑‍🚒', 'Robert De Niro',80)
     this.citizen9 = new Police ('Police 👮‍♀️','Emma Stone',35)
     this.citizen10 = new Doctor ('Doctor 👩‍⚕️','Ella Purnell',27)
     this.citizen11 = new Chef ('Chef 👨‍🍳','Llinus torvalds',54)
     this.citizen12 = new Detective ('Detective 🕵️','Al Pacino',84)
     this.citizen13 = new Teacher ('Teacher 👩‍🏫','Diane Keaton',78)    
  }
  

  getCitizen(): Major {
    return this.citizen;
  }
  getCitizen1(): FireFighter {
    return this.citizen1;
  }
  getCitizen2(): Police {
    return this.citizen2;
  }
  getCitizen3(): Doctor {
    return this.citizen3;
  }
  getCitizen4(): Chef {
    return this.citizen4;
  }
  getCitizen5(): Detective {
    return this.citizen5;
  }
  getCitizen6(): Teacher {
    return this.citizen6;
  }
  getCitizen7(): Police {
    return this.citizen7;
  }
  getCitizen8(): Doctor {
    return this.citizen8;
  }
  getCitizen9(): Police {
    return this.citizen9;
  }
  getCitizen10(): Doctor {
    return this.citizen10;
  }
  getCitizen11(): Chef {
    return this.citizen10;
  }
  getCitizen12(): Detective {
    return this.citizen12;
  }
  getCitizen13(): Chef {
    return this.citizen13;
  }

}

