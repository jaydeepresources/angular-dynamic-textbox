import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items;
  textboxs: any[];
  textData: string[];

  constructor() {
    this.textboxs = [];
    this.textData = [];
  }
  onAddItem() {
    this.textboxs.push('');
    this.textData.push('');
  }
  onShow() {
    this.textData.push('');
  }

  listings: [
    {
      items: ['backdrops', 'main curtains', 'lenolium', 'printed curtains', 'door curtains', 'coloured curtains', 'window curtains','net / gauze','white cyclorama'],
      name:'Curtains'
    },
    
  ]

}

