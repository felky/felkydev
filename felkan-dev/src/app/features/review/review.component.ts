import { Component } from '@angular/core';
import { IPost, IPosts } from '../../models/post';
import * as posts from '../../../assets/posts/posts.json';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})

export class ReviewComponent {
  public posts: IPosts = posts;

}
