import { Component, AfterViewInit } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('testimonialCarousel', { static: false }) carouselElement!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const carouselElement = this.carouselElement.nativeElement;

    if (carouselElement) {
     
      const carousel = new (window as any).bootstrap.Carousel(carouselElement, {
        interval: 3000,
        wrap: true
      });

      
      const prevButton = carouselElement.querySelector('.carousel-control-prev') as HTMLElement;
      const nextButton = carouselElement.querySelector('.carousel-control-next') as HTMLElement;

      if (prevButton) {
        this.renderer.listen(prevButton, 'click', () => carousel.prev());
      }

      if (nextButton) {
        this.renderer.listen(nextButton, 'click', () => carousel.next());
      }
    }
  }

}
