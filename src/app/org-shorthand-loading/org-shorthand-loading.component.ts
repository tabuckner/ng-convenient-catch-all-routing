import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-org-shorthand-loading',
  template: `
    <p>
      Please wait while we look for {{ this.potentialOrg$ | async }}
    </p>
    <p *ngIf="orgNotFound">
      Org not found, going home.
    </p>
    <ng-container *ngIf="(org$ | async) as org">
      <ng-container *ngIf="org.id">
        <p>
          Short Name: {{ org.shortName }}
        </p>
        <p>
          Name: {{ org.name }}
        </p>
        <p>
          ID: {{ org.id }}
        </p>
        <p>
          <em>Redirecting you...</em>
        </p>
      </ng-container>
    </ng-container>
  `,
  styles: [
  ]
})
export class OrgShorthandLoadingComponent implements OnInit {
  public potentialOrg$: Observable<string>;
  public org$: Observable<{
    shortName: string;
    name: string;
    id: number;
  }>;
  public orgNotFound = false;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.potentialOrg$ = this.route.paramMap.pipe(
      map(params => params.get('potentialOrg'))
    );
    this.org$ = this.potentialOrg$.pipe(
      filter(potentialOrg => potentialOrg?.length > 0),
      switchMap(potentialOrg => this.api.getOrg(potentialOrg)),
      tap((foundOrg) => {
        this.orgNotFound = false;
        setTimeout(() => {
          this.router.navigate([`../lazy-module/organizations/${foundOrg.shortName}`])
        }, 1000);
      }),
      catchError((err, obs) => {
        this.orgNotFound = true;
        console.warn('Org not found redirecting')
        setTimeout(() => {
          this.router.navigateByUrl('home')
        }, 1000);
        return of([] as any)
      })
    );
  }

}
