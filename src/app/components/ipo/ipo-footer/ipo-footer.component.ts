import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipo-footer',
  templateUrl: './ipo-footer.component.html',
  styleUrl: './ipo-footer.component.css',
  standalone:true,
  imports:[
    CommonModule
  ]
})
export class IpoFooterComponent implements OnInit {

   images = [
    "https://i.marketsmojo.com/logo/axis-securities-logo.png",
    "https://i.marketsmojo.com/logo/smc-logo.png",
    "https://i.marketsmojo.com/logo/gj-logo.png",
    "https://i.marketsmojo.com/logo/angel-logo-v1.png",
    "https://i.marketsmojo.com/logo/gj-logo.png",
    "https://i.marketsmojo.com/logo/gj-logo.png",
    "https://i.marketsmojo.com/logo/gj-logo.png",
    "https://i.marketsmojo.com/logo/gj-logo.png",
    // Add more image URLs as needed
  ];

  // images: string[] = [];
  chunkedImages: string[][] = [];
  itemsPerSlide = 4;

  // constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    // this.images = this.imageService.getImages();
    this.chunkedImages = this.chunkArray(this.images, this.itemsPerSlide);
  }

  chunkArray(array: any[], chunkSize: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

}
