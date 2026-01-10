import { Injectable } from '@angular/core';
import { userData } from '../constant/user-data.constant';

@Injectable({
     providedIn: 'root'
})
export class DataService {

     public userData: any = userData;

     constructor(

     ) { }

     public getUserData() {
          return this.userData;
     }
}
