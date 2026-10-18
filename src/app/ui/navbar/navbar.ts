import {Component, inject, input, signal} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthService} from '../../service/auth-service';
import {MatTree, MatTreeNode} from '@angular/material/tree';
import {MatDivider, MatList, MatListItem, MatListItemIcon, MatListItemTitle, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    MatSidenav,
    MatTree,
    MatTreeNode,
    MatDivider,
    MatIcon,
    MatListItem,
    MatList,
    MatNavList,
    MatListItemIcon,
    MatListItemTitle,
    RouterLink
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
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
