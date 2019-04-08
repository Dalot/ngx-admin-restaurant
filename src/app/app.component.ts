/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
// import { AnalyticsService } from './@core/utils/analytics.service';
import { NbMenuService } from '@nebular/theme';
import { NbAuthService, NbTokenService, NbAuthJWTToken, NbAuthToken } from '@nebular/auth';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';


@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  public userFromApi: any;
  private userToken;

  constructor(
    private router: Router,
    // private analytics: AnalyticsService,
    private menuService: NbMenuService,
    protected tokenService: NbTokenService,
    protected authService: NbAuthService,
    private userService: UserService) 
    { }
  
  
  ngOnInit(): void {
    //this.analytics.trackPageViews();

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
