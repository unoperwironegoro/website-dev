import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { linkInstagram, linkLinkedIn, linkGitHub, linkSoundcloud, linkTwitter } from '../links/personal-links';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public menuItems: { link: string, name: string }[] = [
    { link: 'about', name: 'about'},
    { link: 'mystery', name: 'todo' }
  ];

  public toolbarLinks: { icon: string, link: string }[] = [
    { icon: 'fab fa-lg fa-instagram', link: linkInstagram },
    { icon: 'fab fa-lg fa-linkedin', link: linkLinkedIn },
    { icon: 'fab fa-lg fa-github', link: linkGitHub },
    { icon: 'fab fa-lg fa-soundcloud', link: linkSoundcloud },
    { icon: 'fab fa-lg fa-twitter', link: linkTwitter }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
