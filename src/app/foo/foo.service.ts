import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFoo } from './foo.model';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  constructor(private http: HttpClient) { }

  getFoos(): Observable<IFoo[]> {
    return this.http.get<IFoo[]>(environment.apiUrl + '/v1/foo/all');
  }

  getFoosOrdered(order: String): Observable<IFoo[]> {
    return this.http.get<IFoo[]>(environment.apiUrl + '/v1/foo/all?order=' + order);
  }
}
