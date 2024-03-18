import {Component} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent {
  displayedColumns = ['id', 'name', 'author'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  play(row: unknown) {
    console.log(row);
  }
}

export interface Element {
  name: string;
  id: number;
  author: string;
  path: string;
}

const ELEMENT_DATA: Element[] = [
  {id: 1, name: 'Song 1', author: 'Singer 1', path: 'path'},
  {id: 2, name: 'Song 2', author: 'Singer 2', path: 'path'},
  {id: 3, name: 'Song 3', author: 'Singer 3', path: 'path'},
  {id: 4, name: 'Song 4', author: 'Singer 4', path: 'path'},
  {id: 5, name: 'Song 5', author: 'Singer 5', path: 'path'},
  {id: 6, name: 'Song 6', author: 'Singer 6', path: 'path'},
];

