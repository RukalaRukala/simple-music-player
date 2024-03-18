import { Injectable } from '@angular/core';
import {ISongMetadata} from "../models/player.model";
import {of} from "rxjs";

const PLAY_LIST: ISongMetadata[] = [
  {id: 1, name: 'Song 1', author: 'Singer 1', path: 'path'},
  {id: 2, name: 'Song 2', author: 'Singer 2', path: 'path'},
  {id: 3, name: 'Song 3', author: 'Singer 3', path: 'path'},
  {id: 4, name: 'Song 4', author: 'Singer 4', path: 'path'},
  {id: 5, name: 'Song 5', author: 'Singer 5', path: 'path'},
  {id: 6, name: 'Song 6', author: 'Singer 6', path: 'path'},
];

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  getPlayList() {
    return of(PLAY_LIST);
  }
}
