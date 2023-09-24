import { Component } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-green-play-btn',
  templateUrl: './green-play-btn.component.html',
  styleUrls: ['./green-play-btn.component.css'],
})
export class GreenPlayBtnComponent {
  faPlay = faPlay;
}
