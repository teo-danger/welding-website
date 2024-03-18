import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-responsive-image-grid',
  templateUrl: './responsive-image-grid.component.html',
  styleUrls: ['./responsive-image-grid.component.css']
})
export class ResponsiveImageGridComponent {

  @Input()
  imagesGrid: any;

}
