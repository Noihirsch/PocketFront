import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
import { PocketFooterComponent } from '../../pocket-footer/pocket-footer.component';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']

})
export class HomeViewComponent { 
  items: NbMenuItem[] = [
    { title: 'Home', link: '/home' },
    { title: 'Unirse a partida', link: '/join' },
    { title: 'Crear un personaje', link: '/create' },
    { title: 'Nosotros', link: '/about' },
    { title: 'FAQ', link: '/faq' }
  ];

  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('font-awesome', { iconClassPrefix: 'fa' });
  }
}
