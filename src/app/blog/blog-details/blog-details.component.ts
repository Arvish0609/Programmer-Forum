import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  @Input() blogDetails : Blog[];

  constructor() { }

  ngOnInit(): void {
  }

}
