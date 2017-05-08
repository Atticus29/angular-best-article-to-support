import { Injectable } from '@angular/core';
import { Claim } from './claim.model'
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class ClaimService {

  constructor(db: AngularFireDatabase) {
    this.claims = db.list('/claims')
  }
  public claims: FirebaseListObservable<any[]>;

  getClaims() {
    return this.claims;
  }
}
