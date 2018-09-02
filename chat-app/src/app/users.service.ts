import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { FormGroupName } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUser(username:string) {
    return this.http.get('api/user', {
      params: {
        username: username
      }
    });
  }

  updateEmail(username:string, email:string) {
    let body = {
      'username': username,
      'email': email
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(`api/email`, JSON.stringify(body), httpOptions);
  }

  getGroups() {
    return this.http.get('api/groups');
  }

  createGroup(username:string, groupName:string) {
    let body = {
      'username': username,
      'groupName': groupName
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('api/createGroup', JSON.stringify(body), httpOptions);
  }

  removeGroup(groupName:string) {
    return this.http.delete('api/removeGroup/' + groupName);
  }
}
