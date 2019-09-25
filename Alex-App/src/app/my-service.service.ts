import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MyServiceService {
  baseUrl: string = `https://130132ee-94fa-4470-ae76-062094b6ec43.mock.pstmn.io/api/Members/Email`;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": "3bad84c8a9e8450ea2e2fe160bc6dab4"
    })
  };

  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get(this.baseUrl, this.httpOptions).toPromise();
  }

  addMember(newMember) {
    return this.http.post(this.baseUrl, newMember, this.httpOptions);
  }
}
