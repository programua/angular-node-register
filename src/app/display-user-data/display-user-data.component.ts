import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from '../models/UserInfoModel';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.css']
})
export class DisplayUserDataComponent implements OnInit {

  user: UserInfoModel = new UserInfoModel({
    uid: "cust2dsa12dsa",
    first_name: "John",
    last_name: "Doe",
    email: "email@email.com",
    zipcode: 10283,
    password: "Idasn2x2#"
  });

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  private subscrieber: any;

  ngOnInit() {
    this.subscrieber = this.route.params.subscribe(params => {
      this.http.get('/api/v1/customer/' + params.uid).subscribe((data:any) => {
        this.user = new UserInfoModel(data.customer);
      });
    });
  }

}
