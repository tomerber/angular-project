import { Component } from '@angular/core';
import {Post} from './posts/post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-app';
  stordPost : Post[]= [];

  onPostAdded(post){

    this.stordPost.push(post)
  }
}
