import { Component, OnInit} from '@angular/core';
import { Auth } from './blog/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'asinfo0boot';
  public isCollapsed = false;
  constructor(private auth: Auth) {}

  ngOnInit() {
    this.auth.autoAuthUser();
  }
}
