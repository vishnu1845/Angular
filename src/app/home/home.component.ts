import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    const bg = document.querySelector('.hero-background') as HTMLElement;
    setInterval(() => {
      bg.style.backgroundImage = `url('https://source.unsplash.com/random/1920x1080?technology,code,design&ts=${Date.now()}')`;
    }, 10000);
  }
}