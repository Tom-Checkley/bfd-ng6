import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.scss']
})
export class ManageBlogsComponent implements OnInit {
  blogs;

  constructor() { }

  ngOnInit() {
  }

}
