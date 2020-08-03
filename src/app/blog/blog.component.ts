import { Component, OnInit } from '@angular/core';
import { Blog } from './blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs : Blog[] =[
    {
      title : 'Blog 1',
    id: 1,
    content : 'This is my first ever blog. Hope you\'ll like it',
    blogger_name : 'Arvish Saluja',
    rating : 5
    },
    {
      title: 'Blog 2',
      id :2,
      content : 'This is gonna be my second ever blog, enjoy',
      blogger_name :'Arvish Saluja',
      rating : 5
    }
  ] 

  constructor() { }

  ngOnInit(): void {
  }

  onBlogAdded(blogContent : Blog){
    this.blogs.push(blogContent);
  }
}
