import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']

})
export class HomeViewComponent { 
  items: NbMenuItem[] = [
    { title: 'Home', link: '/home' },
    { title: 'Join a game', link: '/join' },
    { title: 'Create a character', link: '/create' },
    { title: 'About', link: '/about' },
    { title: 'FAQ', link: '/faq' },
    { title: 'Contact', link: '/contact' },
  ];

  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('font-awesome', { iconClassPrefix: 'fa' });
  }
}
