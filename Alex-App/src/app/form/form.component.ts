import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { MyServiceService } from "../my-service.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  newMember = {
    emailAddress: ""
  };

  selectValues: any[] = [
    { value: "0", viewValue: "867" },
    { value: "1", viewValue: "5309" },
    { value: "2", viewValue: "666" }
  ];
  checked: boolean = false;

  constructor(private fb: FormBuilder, private myService: MyServiceService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      emailAddress: ["", [Validators.required, Validators.email]],
      isPrimary: [false, Validators.required],
      emailTypeId: [null],
      description: ["", Validators.maxLength(50)]
    });
  }

  onSubmit(newMember: any): void {
    this.myService.addMember(newMember.value).subscribe(
      (data: any) => {
        this.newMember = {
          emailAddress: data.emailAddress
        };
      },
      error => {
        console.log(error);
      }
    );
  }
}
