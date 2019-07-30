import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin : any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getJSON().subscribe(data => {
       this.admin = data;
       console.log(this.admin);
       
    })
  }

}
