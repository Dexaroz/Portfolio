import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {Home} from '../home/home';
import {Projects} from '../projects/projects';

@Component({
  selector: 'app-main-page',
  imports: [
    Header,
    Home,
    Projects
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
