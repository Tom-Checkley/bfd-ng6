import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../../_classes/blog';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { BlogService } from '../../../../_services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  imagePreview: any;
  imageTitle: string;
  imageAlt: string;
  postTitle: string;
  file: File;
  postLocation: string;
  postBody: string;
  date: number;
  post;
  id: any;
  imageURL: Observable<string>;
  snapshot: Observable<any>;
  uploadPercentage;
  task: Promise<any>;
  message: string;
  fileRef: AngularFireStorageReference;
  path: string;
  uploadPercent: Observable<number>;
  loading = false;

  constructor(private blogService: BlogService, private storage: AngularFireStorage) { }

  ngOnInit() {
  }
  // TODO - PREVIEW IMAGE
  // readUrl = function(event) {
  //   const reader = new FileReader();
  //   let imgPrev;
  //   reader.onload = function(e) {
  //     imgPrev = e.target.result;
  //   };
  //   reader.readAsDataURL(event.target.files[0]);
  //   return imgPrev;
  // };

  getImage(event) {
    this.file = event.target.files[0];

    if (this.file.type.split('/')[0] !== 'image') {
      this. message = 'Unsupported file type. Please ensure you are uploading an image.';
      console.error(this.message);
      return;
    }
  }

  // TODO - THIS NEEDS STREAMLINING
  // TODO - THIS NEEDS PERCENTAGE CHANGES OF UPLOAD
  // TODO - NEED TO INCORPORATE BLOG INTERFACE
  createPost(e) {
    e.preventDefault();
    this.loading = true;
    this.date = Date.now();
    this.path = `blog-images/${this.date}_${this.file.name}`;
    this.imageTitle = `${this.date}_${this.file.name}`;
    this.fileRef = this.storage.ref(this.path);
    this.task = this.storage.upload(this.path, this.file).then(() => {
      this.fileRef.getDownloadURL().subscribe(url => {
        this.imageURL = url;
        if (!this.postBody) { this.postBody = ''; }
        this.post = {
          location: this.postLocation,
          title: this.postTitle,
          body: this.postBody,
          image: this.file,
          imagePath: this.path,
          imageTitle: this.imageTitle,
          imageAlt: this.imageAlt,
          date: this.date,
          imageURL: this.imageURL
        };
        this.blogService.createPost(this.post);
        this.post = {};
        this.loading = false;
      });
    });
    // this.uploadPercent = this.task.percentageChanges();
  }

}
