import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SurveyService {

    constructor(private http: Http) {}


    // get Client details
    getClientDetails(client: any) {
        const headers = new Headers({'Content-type': 'application/json'});
         return this.http.post('http://localhost:5000/getCompanyDetails', client[0], {headers})
        .map((response: Response) => {
            const data = response.json();
            console.log(data);
            return data;
        }
        );
    }
}
