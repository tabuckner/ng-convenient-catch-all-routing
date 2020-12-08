import { Component, OnInit } from '@angular/core';
import { ORGS } from '../../constants/orgs';

@Component({
  selector: 'app-child-one',
  template: `
    <p>
      child-one works!
    </p>
      Try visiting any of these organizations:
      <ul>
        <li *ngFor="let org of orgList" [routerLink]="['../organizations', org.shortName]">{{ org.shortName }}</li>
      </ul>
  `,
  styles: [
  ]
})
export class ChildOneComponent implements OnInit {
  public orgList = [...ORGS];

  constructor() { }

  ngOnInit(): void {
  }

}
