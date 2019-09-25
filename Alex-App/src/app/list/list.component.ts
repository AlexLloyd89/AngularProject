import { Component, OnInit } from "@angular/core";
import { MyServiceService } from "../my-service.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  members: Object[];

  constructor(private myService: MyServiceService) {}

  async ngOnInit() {
    try {
      const getStuff = await this.myService.getMembers();

      for (let i = 0; i < getStuff.data.length; i++) {
        let unArr = getStuff.data[i].emailAddress;
        console.log(unArr);
      }
      console.log(getStuff);

      // .then(res => (this.members = res.data), err => console.log(err));
      return (this.members = getStuff.data);
    } catch (e) {
      return console.log(e);
    }
  }
}
