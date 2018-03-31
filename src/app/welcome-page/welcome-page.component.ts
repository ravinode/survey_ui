import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../service/survey-service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

xid: string;
sessionid: string;
clientList = [];
clientReq = [];
clientDetails = [];


  constructor(private route: ActivatedRoute, private surveyService: SurveyService) {
    this.route.queryParams.subscribe(params => {
      this.xid = params['xid'];
      this.sessionid = params['idxSession'];
      this.getClientDetails(this.xid);
  });
  }

  ngOnInit() {
  }

  getClientDetails( id: string) {

    this.clientReq.push(
      {
        xID: id
      }
    );

  this.surveyService.getClientDetails(this.clientReq)
  .subscribe(
    (clientDetails: any) =>
      this.clientDetails = clientDetails,
    (error) => console.log(error)
  );
}
}
