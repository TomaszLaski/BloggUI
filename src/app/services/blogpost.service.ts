import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  constructor(private http: HttpClient) {}

  getBlogPosts() {
    return this.http.get('http://localhost:8080/bloggy/all');
  }
}
