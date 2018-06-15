import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../../../_services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog;
  blogImage: any;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    console.log(this.blog);
    this.getBlogImage();
  }

  getBlogImage() {
    this.blogImage = this.blogService.getBlogImage(this.blog.imageURL);
  }

}
