import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ORGS } from './constants/orgs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private orgsList = [...ORGS];

  constructor() { }

  public getOrg(potentialOrg: string) {
    const isValidOrg = this.orgsList.some(org => org.shortName === potentialOrg || org.name === potentialOrg);
    const targetOrgs = this.orgsList.filter(org => org.shortName === potentialOrg || org.name === potentialOrg);
    if (isValidOrg && targetOrgs.length > 0) {
      return of(targetOrgs[0]).pipe(delay(1000));
    }
    throw new Error('Organization Not Found in API');
  }
}
