import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../../../_services/blog.service';
import { Observable } from 'rxjs';
import { Blog } from '../../../../_classes/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  deletePost(post) {
    this.blogService.deletePost(post);
  }
}
