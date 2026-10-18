import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth-service';
import {MatListItem, MatListItemIcon, MatListItemTitle, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    MatIcon,
    MatListItem,
    MatNavList,
    MatListItemIcon,
    MatListItemTitle,
    RouterLink
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  protected readonly authService = inject(AuthService)
  ngOnInit() {
    this.authService.GetUserData().subscribe((res)=>{
      if (res){
        this.authService.userData.update(()=>this.authService.GetUserData());
        this.authService.isLoggedIn.update(()=>true);

      }
    });
  }
}
