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
     public filteredUserData: any[] = [];
     private originalfilteredUserData: any[] = [];

     constructor(private dataService: DataService) { }

     ngOnInit(): void {
          this.originalfilteredUserData = this.dataService.getfilteredUserData();
          this.filteredUserData = JSON.parse(JSON.stringify(this.originalfilteredUserData));
     }

     public searchUser(searchText: string) {
          if (!searchText) {
               this.filteredUserData = [...this.originalfilteredUserData];
               return;
          }

          const text = searchText.toLowerCase();

          this.filteredUserData = this.originalfilteredUserData.filter(u =>
               u.name.toLowerCase().includes(text) ||
               u.address.hometown.toLowerCase().includes(text) ||
               String(u.address.pincode).includes(text)
          );
     }
}
