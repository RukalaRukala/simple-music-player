import {
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @ViewChild('player', {static: false}) playerRef!: ElementRef<HTMLAudioElement>;
  @Input() src = '';
}
