import { Component, ViewEncapsulation } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {StaysContextComponent} from '../stays-context-component/stays-context-component';

@Component({
  selector: 'app-options-component',
  imports: [

    MatTabsModule,
    MatIconModule,
    StaysContextComponent
  ],
  templateUrl: './options-component.html',
  styleUrl: './options-component.scss',
  encapsulation: ViewEncapsulation.None
})
export class OptionsComponent {

}
