import {Component, EventEmitter, Output} from '@angular/core';
import {PlayerService} from "../services/player.service";
import {ISongMetadata} from "../models/player.model";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent {
  @Output() selectedTrack = new EventEmitter<string>();
  displayedColumns = ['id', 'name', 'author'];
  dataSource$ = this.playerService.getPlayList();

  constructor(private playerService: PlayerService) {}

  onPlay(row: ISongMetadata) {
    this.selectedTrack.emit(row.path);
  }
}

