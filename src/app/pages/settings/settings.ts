import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {History} from './inner/history/history';
import {ProfileSettings} from './inner/profile-settings/profile-settings';

@Component({
  selector: 'app-settings',
  imports: [
    MatTabGroup,
    MatTab,
    History,
    ProfileSettings
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {

}
