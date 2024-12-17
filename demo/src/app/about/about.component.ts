import { AfterViewInit, Component } from '@angular/core';
declare var $: any; // Assuming jQuery is available globally

interface Skill {
  name: string;
  percentage: number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  skills: Skill[] = [
    { name: 'HTML', percentage: 100 },
    { name: 'PHP', percentage: 80 },
    { name: 'CSS', percentage: 90 },
    { name: 'WordPress/CMS', percentage: 90 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'Photoshop', percentage: 55 }
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.startCounters();
  }

  private startCounters(): void {
    $('.count-number').data('countToOptions', {
      formatter: (value: number, options: any) => {
        return value.toFixed(options.decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    });

   
    $('.timer').each((index: number, element: HTMLElement) => {
      const $this = $(element); 
      const options = $.extend({}, $this.data('countToOptions') || {}, {
        from: 0,
        to: $this.data('to'), 
        speed: $this.data('speed'),
        refreshInterval: 50,
        decimals: 1453
      });
      $this.countTo(options);
    });
  }
}
