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
      const getMembers = await this.myService.getMembers();

      getMembers.data.sort((a, b) =>
        a.emailAddress.localeCompare(b.emailAddress)
      );

      // .then(res => (this.members = res.data), err => console.log(err));
      return (this.members = getMembers.data);
    } catch (e) {
      return console.log(e);
    }
  }
}
