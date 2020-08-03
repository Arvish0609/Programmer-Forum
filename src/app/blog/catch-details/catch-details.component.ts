import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-catch-details',
  templateUrl: './catch-details.component.html',
  styleUrls: ['./catch-details.component.css']
})
export class CatchDetailsComponent implements OnInit {

  blogData : Blog = {
    title : '',
    id: 0,
    content : '',
    blogger_name : '',
    rating : 0
  };


  @Output() addBlog = new EventEmitter<Blog>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddBlog(){
   this.addBlog.emit(this.blogData);
   console.log(this.blogData.title);
   
  }

}
