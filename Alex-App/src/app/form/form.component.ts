import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  selectValues: any[] = [
    { value: "0", viewValue: "867" },
    { value: "1", viewValue: "5309" },
    { value: "2", viewValue: "1234" }
  ];
  checked: boolean = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      emailAddress: ["", [Validators.required, Validators.email]],
      isPrimary: [true, Validators.required],
      emailTypeId: [null],
      description: [""]
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
