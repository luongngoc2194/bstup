import {Component, OnInit} from '@angular/core';
import {VideoIframeTwo} from '../../data/video';

@Component({
  selector: 'app-bst-three',
  templateUrl: './bst-three.component.html',
  styleUrls: ['./bst-three.component.scss']
})
export class BstThreeComponent implements OnInit {
  listV = [...VideoIframeTwo, ...VideoIframeTwo];

  constructor() {
  }

  ngOnInit(): void {
  }

}
