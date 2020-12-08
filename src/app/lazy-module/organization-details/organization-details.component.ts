import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-organization-details',
  template: `
    <p>
      organization-details works! The id requested is {{ this.id$ | async }}
    </p>
  `,
  styles: [
  ]
})
export class OrganizationDetailsComponent implements OnInit {
  public id$;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.warn(this.route)
    this.id$ = this.route.paramMap.pipe(
      map((params) => params.get('organizationId')),
      tap(console.warn)
    );
  }

}
