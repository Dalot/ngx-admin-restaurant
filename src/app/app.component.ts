/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbMenuService, NbMenuItem } from '@nebular/theme';
import { NbAuthService, NbTokenService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private analytics: AnalyticsService,
    private menuService: NbMenuService,
    protected tokenService: NbTokenService,
    protected authService: NbAuthService) 
    { }
  
  
  ngOnInit(): void {
    this.analytics.trackPageViews();

    this.menuService.onItemClick()
    .subscribe((event) => {
      console.log(event.item.title)
      if (event.item.title == 'Log out')
      {
        this.authService.logout('email');
        this.tokenService.clear();
        this.router.navigate(['/auth/login'])
      }
    });

  }

  
  
}
