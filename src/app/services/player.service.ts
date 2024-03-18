import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {PLAY_LIST} from "../play-list/play-list";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  getPlayList() {
    return of(PLAY_LIST);
  }
}
