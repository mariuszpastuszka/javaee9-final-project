import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { NEW_POST_URL, NEWS_FEED_URL } from '../../constants/constant';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  applicationName: string = ""
  recentPostsUrl: string = NEWS_FEED_URL
  createNewPostUrl: string = NEW_POST_URL

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe(value => this.applicationName = value.applicationName)
  }
}
