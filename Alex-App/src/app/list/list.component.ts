import { Component, OnInit } from "@angular/core";
import { MyServiceService } from "../my-service.service";
import { Member } from "../models/member.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  members: Member[];

  constructor(private myService: MyServiceService) {}

  ngOnInit() {
    this.fetchMembers();
  }

  async fetchMembers(): Promise<Member[] | null> {
    try {
      const notSorted = await this.myService.getMembers();
      console.log(notSorted.data);

      const getMembers = await this.myService.getMembers();

      this.members = getMembers.data.sort((a, b) =>
        a.emailAddress.localeCompare(b.emailAddress)
      );

      return this.members;
    } catch (err) {
      alert("sorry, an error has occured");
    }
  }
}
