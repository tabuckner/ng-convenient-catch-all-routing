import { Component, OnInit } from '@angular/core';
import { ORGS } from '../constants/orgs';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
      In this POC you can see how we can have 'shorthand', convenience routes.
      
      Normally in our applications we rely on using route parameters with some sort of prefix:
      <pre>'/organizations/:id'</pre>

      By creating a redirect component that is routed at a higher level near where you might see a traditional 'wildcard' route, we're able to get access to all of the bells-and-whistles of a normal angular component.

      in our <code>OrgShorthandLoadingComponent</code>, we assume that everything in the address bar is a potential org, check it with the 'API', and if it's valid, we then redirect the user to the REAL route.a

      You can test this by replacing 'home' any of the following 'valid' orgs into the address bar.

      <ul>
        <li *ngFor="let org of orgList" [routerLink]="['../organizations', org.shortName]">{{ org.shortName }}</li>
      </ul>

      In this example we can still see how a 404 route can be used, and see that other top level sibling routes work as expected.
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  public orgList = [...ORGS];

  constructor() { }

  ngOnInit(): void {
  }

}
