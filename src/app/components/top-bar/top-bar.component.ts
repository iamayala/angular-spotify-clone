import { Component } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faUser = faUser;
}
