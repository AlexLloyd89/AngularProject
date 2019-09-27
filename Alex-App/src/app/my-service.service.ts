import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NewMember } from "./models/newMember.model";

@Injectable({
  providedIn: "root"
})
export class MyServiceService {
  baseUrl: string = `https://130132ee-94fa-4470-ae76-062094b6ec43.mock.pstmn.io/api/Members/Email`;

  postUrl: string = `https://130132ee-94fa-4470-ae76-062094b6ec43.mock.pstmn.io/api/Members/Emails`;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": "3bad84c8a9e8450ea2e2fe160bc6dab4"
    })
  };

  constructor(private http: HttpClient) {}

  getMembers(): Promise<any> {
    return this.http.get<any>(this.baseUrl, this.httpOptions).toPromise();
  }

  addMember(newMember: NewMember) {
    return this.http.post(this.postUrl, newMember, this.httpOptions);
  }
}
