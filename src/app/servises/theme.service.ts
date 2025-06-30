import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isLight = false;

  toggleTheme() {
    this.isLight = !this.isLight;
    const themeClass = this.isLight ? 'light-theme' : 'dark-theme';
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(themeClass);
  }

  isLightTheme(): boolean {
    return this.isLight;
  }
}