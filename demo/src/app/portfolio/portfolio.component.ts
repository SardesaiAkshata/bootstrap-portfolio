import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioItems = [
    // app
    {
      category: 'app',
      title: 'App 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/app-1.jpg',
      detailsLink: 'portfolio-details.html'
    },
       
    {
      category: 'branding',
      title: 'branding 3',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/branding-3.jpg',
      detailsLink: 'portfolio-details.html'
    },

   


    {
      category: 'branding',
      title: 'branding 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/branding-1.jpg',
      detailsLink: 'portfolio-details.html'
    },

    {
      category: 'books',
      title: 'books 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/books-1.jpg',
      detailsLink: 'portfolio-details.html'
    },


  {
      category: 'app',
      title: 'App 2',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/app-2.jpg',
      detailsLink: 'portfolio-details.html'
    },

    {
      category: 'product',
      title: 'Product 2',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/product-2.jpg',
      detailsLink: 'portfolio-details.html'
    },

    
    {
      category: 'branding',
      title: 'branding 2',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/branding-2.jpg',
      detailsLink: 'portfolio-details.html'
    },



    {
      category: 'product',
      title: 'Product 3',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/product-3.jpg',
      detailsLink: 'portfolio-details.html'
    },
    {
      category: 'books',
      title: 'books 2',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/books-2.jpg',
      detailsLink: 'portfolio-details.html'
    },

    
    {
      category: 'app',
      title: 'App 3',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/app-3.jpg',
      detailsLink: 'portfolio-details.html'
    },


    {
      category: 'product',
      title: 'Product 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/product-1.jpg',
      detailsLink: 'portfolio-details.html'
    },
   


    {
      category: 'books',
      title: 'books 3',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'assets/iPortfolio Bootstrap Template Demo_files/books-3.jpg',
      detailsLink: 'portfolio-details.html'
    },
   
    
  
 
 

    
  ];

  activeFilter: string = '*';
  filteredItem : any [] = [];
  constructor() {}

  ngOnInit(): void {
    this.setFilter('all')
  }

  setFilter(filter: string): void {
    this.filteredItem = []
    this.portfolioItems.forEach((ele)=>{
      if(filter == 'all'){
        this.filteredItem = this.portfolioItems;
      }
      else if(ele.category == filter){
        this.filteredItem.push(ele);
      }
    })
  }
}
