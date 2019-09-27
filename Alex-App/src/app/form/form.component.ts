import { Component, OnInit } from "@angular/core";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { MyServiceService } from "../my-service.service";
import { EmailIdValues } from "../models/emailIdValues.model";
import { NewMember } from "../models/newMember.model";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  newestMember: NewMember = {
    emailAddress: "",
    isPrimary: false
  };

  selectValues: EmailIdValues[] = [
    { value: "0", viewValue: "867" },
    { value: "1", viewValue: "5309" },
    { value: "2", viewValue: "666" }
  ];
  checked: boolean = false;

  constructor(private myService: MyServiceService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      emailAddress: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      isPrimary: new FormControl(false, Validators.required),
      emailTypeId: new FormControl(null),
      description: new FormControl("", Validators.maxLength(50))
    });
  }

  async onSubmit(memberInfo: FormGroup): Promise<any> {
    try {
      return (this.newestMember = await this.myService.addMember(
        memberInfo.getRawValue()
      ));
    } catch (err) {
      alert("sorry, an error has occured");
    }
  }
}
