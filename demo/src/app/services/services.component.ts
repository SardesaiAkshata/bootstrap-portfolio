import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  private currentSlideIndex: number = 0;
  private slides: HTMLElement[];

  constructor() {
    this.slides = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
    this.showSlide(this.currentSlideIndex);
  }

  private showSlide(index: number): void {
    this.slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  public currentSlide(index: number): void {
    this.currentSlideIndex = index - 1; 
    this.showSlide(this.currentSlideIndex);
  }

  ngAfterViewInit() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.currentSlide(index + 1)); 
    });
  }
  
}
