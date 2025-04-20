// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tab3',
//   templateUrl: 'tab3.page.html',
//   styleUrls: ['tab3.page.scss'],
//   standalone: false,
// })
// export class Tab3Page {

//   constructor() {}

// }

import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { pizza } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'], 
  standalone: false,
})
export class Tab3Page {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  constructor() {
    addIcons({ pizza });
  }

  handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    const from = event.detail.from;
    const to = event.detail.to;

    const itemToMove = this.items.splice(from, 1)[0];
    this.items.splice(to, 0, itemToMove);

    event.detail.complete();
  }
}
