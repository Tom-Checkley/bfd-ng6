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
  posts: Observable<any[]>;
  dbRef: AngularFireList<any>;
  blogImage: Observable<string | null>;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
    this.posts = this.db.list('/posts').valueChanges();
  }

  getBlogs() {
    return this.posts;
  }

  createPost(post) {
    this.dbRef = this.db.list('/posts');
    const newPost = this.dbRef.push({
      location: post.location,
      title: post.title,
      body: post.body,
      imageAlt: post.imageAlt,
      imagePath: post.imagePath,
      imageTitle: post.imageTitle,
      date: post.date,
      imageURL: post.imageURL
    });
    newPost.update({id: newPost.key});
  }

  deletePost(post) {
    this.storage.ref('blog-images/')
      .child(post.imageTitle)
      .delete();

    this.dbRef = this.db.list('/posts');
    this.dbRef.remove(post.id);
  }
}
