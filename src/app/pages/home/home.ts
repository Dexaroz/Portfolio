import { Component } from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {About} from '../../components/about/about';
import {ThreeViewerComponent} from '../../components/three-viewer/three-viewer';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About,
    ThreeViewerComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
