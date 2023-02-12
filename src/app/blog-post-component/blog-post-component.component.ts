import { Component } from '@angular/core';
import { BlogpostService } from '../services/blogpost.service';

@Component({
  selector: 'app-blog-post-component',
  templateUrl: './blog-post-component.component.html',
  styleUrls: ['./blog-post-component.component.css'],
})
export class BlogPostComponentComponent {
  title = 'blogg';
  blogpost: any;
  constructor(private blogPostServide: BlogpostService) {}

  ngOnInit() {
    this.blogPostServide.getBlogPosts().subscribe((res) => {
      this.blogpost = res;
    });
  }
}
