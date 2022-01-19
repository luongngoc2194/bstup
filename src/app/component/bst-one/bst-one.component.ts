import { Component, OnInit } from '@angular/core';
import {Imagedata} from '../../data/video';

@Component({
  selector: 'app-bst-one',
  templateUrl: './bst-one.component.html',
  styleUrls: ['./bst-one.component.scss']
})
export class BstOneComponent implements OnInit {
  listImg = Imagedata;

  constructor() { }

  ngOnInit(): void {
  }

}
