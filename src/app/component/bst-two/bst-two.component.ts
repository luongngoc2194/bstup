import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../service/video.service';
import {VideoType} from '../../model/video-type';
import { VideoIframeOne} from '../../data/video';

@Component({
  selector: 'app-bst-two',
  templateUrl: './bst-two.component.html',
  styleUrls: ['./bst-two.component.scss']
})
export class BstTwoComponent implements OnInit {

  listV = VideoIframeOne;

  constructor(public vService: VideoService) {
  }

  ngOnInit(): void {
    // this.vService.getList().subscribe(data => {
    //   this.listV = data;
    //   console.log(this.listV)
    // });
  }

}
