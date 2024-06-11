import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})


export class FaqComponent {
  items: NbMenuItem[] = [
    { title: 'Home', link: '/home' },
    { title: 'Join a game', link: '/join' },
    { title: 'Create a character', link: '/create' },
    { title: 'About', link: '/about' },
    { title: 'FAQ', link: '/faq' },
    { title: 'Contact', link: '/contact' },
  ];
}
