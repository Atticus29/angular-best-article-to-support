import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { Router } from '@angular/router'
import { Claim } from '../claim.model'
import { ClaimService } from '../claim.service'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  claims: FirebaseListObservable<any[]>

  constructor(private router: Router, private claimService: ClaimService) {}

  goToClaimPage(claim: Claim) {
    // this.router.navigate(['claim', claim.$key]);
  }

  ngOnInit() {


  }

}
