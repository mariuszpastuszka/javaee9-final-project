import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewsFeedService } from '../../services/news-feed.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent {

  postForm = this.formBuilder.group({
    header: ['', Validators.required],
    content: ['', [Validators.required, Validators.minLength(3)]],
    author: ['', [Validators.required, Validators.minLength(3)]]
  })
  constructor(private formBuilder: FormBuilder,
              private newsService: NewsFeedService) { }

  onFormSubmit() {
    console.log("on submitting whole form")
  }
}
