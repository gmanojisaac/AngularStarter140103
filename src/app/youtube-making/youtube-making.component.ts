import {
  Component,
  Input,
  OnInit,
  AfterContentInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-youtube-making',
  templateUrl: './youtube-making.component.html',
  styleUrls: ['./youtube-making.component.scss'],
})
export class YoutubeMakingComponent implements OnInit {
  @ViewChild('usingngxs', { static: true })
  usingngxs!: TemplateRef<any>;

  tems: TemplateRef<any> = this.usingngxs;

  @Input()
  myselectedtemp: string = 'first';

  constructor() {}

  ngOnInit(): void {}
  ngAfterContentInit() {
    switch (this.myselectedtemp) {
      case 'mermaidCenter':
        this.tems = this.mermaidCenter;
        break;

      case 'usingmermaid':
        this.tems = this.usingmermaid;
        break;

      case 'usingmarkdown':
        this.tems = this.usingmarkdown;
        break;
      case 'pagedesign':
        this.tems = this.pagedesign;
        console.log('reached');
        break;
      case 'storybookdesign':
        this.tems = this.storybookdesign;
        break;
      case 'angularsetup':
        this.tems = this.angularsetup;
        break;
      case 'angularComp':
        this.tems = this.angularComp;
        break;
      case 'usingngxs':
        this.tems = this.usingngxs;
        break;
    }
  }
}
