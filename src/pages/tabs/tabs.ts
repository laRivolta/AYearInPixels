import { Component } from '@angular/core';

import { YearViewPage } from '../yearView/yearView';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTabRoot = HomePage;
  yearViewTabRoot = YearViewPage;
  contactTabRoot = ContactPage;

  constructor() {

  }
}
