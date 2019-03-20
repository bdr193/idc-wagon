import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    sendMail(title: string, content:string) {
        return this.http.post("mail", {title, content});
    }
  }
