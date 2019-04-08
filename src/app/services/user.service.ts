import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment' ;
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
       }
       

    
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    getUserWithOrders() {
        return this.http.get<User[]>(`${env.apiUrl}users`);
    }

    getUser() {
        return this.http.get(`${env.apiUrl}api/user`);
    }   

    
}
