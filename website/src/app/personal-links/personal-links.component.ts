import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-links',
  templateUrl: './personal-links.component.html',
  styleUrls: ['./personal-links.component.css']
})
export class PersonalLinksComponent {
  public mediaCards: { icon: string, link: string }[] = [
    { icon: 'fab fa-instagram', link: 'https://www.instagram.com/unoperwironegoro/' },
    { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/unoper/' },
    { icon: 'fab fa-github', link: 'https://github.com/unoperwironegoro' },
    { icon: 'fab fa-soundcloud', link: 'https://soundcloud.com/uno-perwironegoro' },
    { icon: 'fab fa-twitter', link: 'https://twitter.com/UnoPerwironegor' }
  ];
}
