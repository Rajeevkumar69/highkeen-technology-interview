import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDataComponent } from './user-data/user-data.component';

@Component({
     selector: 'app-root',
     standalone: true,
     imports: [FormsModule, UserDataComponent],
     templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
})
export class AppComponent {
     public searchData: string = '';

     @ViewChild('userComp') userComp!: UserDataComponent;

     public search() {
          this.userComp.searchUser(this.searchData);
     }
}
