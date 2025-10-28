import { Component, ViewEncapsulation } from '@angular/core';
// import {MatTab, MatTabGroup} from '@angular/material/tabs';
// import {MatIcon} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-options-component',
  imports: [
    // MatTabGroup,
    // MatTab,
    // MatIcon
    MatTabsModule,  // <-- Corrected
    MatIconModule
  ],
  templateUrl: './options-component.html',
  styleUrl: './options-component.scss',
  encapsulation: ViewEncapsulation.None
})
export class OptionsComponent {

}
