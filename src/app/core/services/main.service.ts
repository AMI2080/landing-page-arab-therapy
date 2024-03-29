import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Response {
  message: string;
  status: 100 | 102;
}

interface RequestDemoData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  companySize: number;
}

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private resposeTime: number = 2; // In seconds

  public requestDemo(data: RequestDemoData): Observable<Response> {
    return new Observable((observer) => {
      setTimeout(() => {
        console.log(data);
        observer.next({
          message: 'The data has been printed in console',
          status: 100,
        });
      }, this.resposeTime * 1000);
    });
  }
}
