import { Component } from '@angular/core';
import { ThemeService } from './servises/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get isLightTheme() {
    return this.themeService.isLightTheme();
  }
}





