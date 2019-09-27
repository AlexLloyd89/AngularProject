import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NewMember } from "./models/newMember.model";
import { environment } from "../environments/environment";
import { Member } from "./models/member.model";

@Injectable({
  providedIn: "root"
})
export class MyServiceService {
  baseUrl: string = environment.baseUrl;

  postUrl: string = environment.postUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": environment.contentType,
      "x-api-key": environment.apiKey
    })
  };

  constructor(private http: HttpClient) {}

  getMembers(): Promise<Member> {
    return this.http.get<any>(this.baseUrl, this.httpOptions).toPromise();
  }

  addMember(newMember: NewMember): Promise<any> {
    return this.http
      .post(this.postUrl, newMember, this.httpOptions)
      .toPromise();
  }
}
