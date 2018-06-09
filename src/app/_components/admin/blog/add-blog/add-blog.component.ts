import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../../_classes/blog';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  imageTitle: string;
  postTitle: string;
  postLocation: string;
  postBody: string;
  date: Date;
  post: Blog;
  id: any;
  imageSrc: Observable<string>;
  uploadPercent: Observable<number>;
  task: AngularFireUploadTask;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  uploadImage($event) {
    const file = $event.target.files[0];
    const filePath = `blog-images/${Date.now()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    // console.log(file, fileRef);
    this.task = this.storage.upload(filePath, file);
    this.uploadPercent = this.task.percentageChanges();
    console.log(this.uploadPercent);
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.imageSrc = fileRef.getDownloadURL();
        console.log(this.imageSrc);
      })
    ).subscribe();
  }

  createPost() {}

}
