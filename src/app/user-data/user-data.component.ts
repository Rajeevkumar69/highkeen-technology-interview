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
export class UserDataComponent implements OnInit {
     public userData: any[] = [];
     private originalData: any[] = [];

     constructor(private dataService: DataService) { }

     ngOnInit(): void {
          this.originalData = this.dataService.getUserData();
          this.userData = [...this.originalData];
     }

     public searchUser(searchText: string) {
          if (!searchText) {
               this.userData = [...this.originalData];
               return;
          }

          const text = searchText.toLowerCase();

          this.userData = this.originalData.filter(u =>
               u.name.toLowerCase().includes(text) ||
               u.address.hometown.toLowerCase().includes(text) ||
               String(u.address.pincode).includes(text)
          );
     }
}
