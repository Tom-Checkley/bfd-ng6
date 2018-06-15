import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../../_classes/blog';
import { BlogService } from '../../../../_services/blog.service';

@Component({
  selector: 'app-display-blogs',
  templateUrl: './display-blogs.component.html',
  styleUrls: ['./display-blogs.component.scss']
})
export class DisplayBlogsComponent implements OnInit {
  blogs;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(posts => {
      this.blogs = posts;
    });
    console.log(this.blogs);
  }

}
