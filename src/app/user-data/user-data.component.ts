import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/service/data.service';

@Component({
     selector: 'app-user-data',
     standalone: true,
     imports: [CommonModule],
     templateUrl: './user-data.component.html',
     styleUrl: './user-data.component.scss'
})
export class filteredUserDataComponent implements OnInit {
     private originalUserData: any[] = [];
     public filteredUserData: any[] = [];

     constructor(
       private dataService: DataService
     ) { }

     ngOnInit(): void {
          this.originalUserData = this.dataService.getUserData();
          this.filteredUserData = JSON.parse(JSON.stringify(this.originalUserData));
     }

     public searchUser(searchText: string) {
          const text = searchText.toLowerCase();

          this.filteredUserData = this.originalUserData.filter(user =>
               user.name.toLowerCase().includes(text) ||
               user.address.hometown.toLowerCase().includes(text) ||
               user.address.pincode.toString().includes(text)
          );
     }
}
