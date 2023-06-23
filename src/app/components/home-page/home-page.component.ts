import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ngOnInit() {
    // Store the scroll position when the page is unloaded
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('scrollPosition', window.pageYOffset.toString());
    });

    // Restore the scroll position when the page is loaded
    window.addEventListener('load', () => {
      const scrollPosition = sessionStorage.getItem('scrollPosition');
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
        sessionStorage.removeItem('scrollPosition');
      }
    });
  }

}
