import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../../_classes/blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  imageTitle: string;
  imageSrc: string;
  postTitle: string;
  postLocation: string;
  postBody: string;
  date: Date;
  post: Blog;
  id: any;

  constructor() { }

  ngOnInit() {
  }

  createPost() {}

}
