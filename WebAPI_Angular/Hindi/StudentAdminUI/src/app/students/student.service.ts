import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUri = "https://localhost:44346/";
  constructor(private httpClient: HttpClient) { }
  getAllStudent(): Observable<any> {
    return this.httpClient.get<any>(this.baseApiUri + '/api/student/getallstudent')
  }
}
