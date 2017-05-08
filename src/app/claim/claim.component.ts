import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { Claim } from '../claim.model'

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  claims: FirebaseListObservable<any[]>
  constructor(af: AngularFire) {
    this.claims = af.database.list('/claims')
  }

  ngOnInit() {
  }

}
