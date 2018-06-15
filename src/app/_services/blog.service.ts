import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { Blog } from '../_classes/blog';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  dbRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  createPost(post) {
    this.dbRef = this.db.list('/posts');
    const newPost = this.dbRef.push({
      location: post.location,
      title: post.title,
      body: post.body,
      imageAlt: post.imageAlt,
      date: post.date,
      imageURL: post.imageURL
    });
    // console.log(newPost);
    newPost.update({id: newPost.key});
  }
}
