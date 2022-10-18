import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  dogs: string | any = [];
  breeds: string | any = [];
  selected_dog!: string;
  img_url!: string;
  wikipedia_url = 'https://en.wikipedia.org/wiki/'


  constructor(
    private dogService: DogService
  ) {
  }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDog().subscribe((res) => {
      this.dogs = res;
      this.breeds = Object.entries(this.dogs.message).map(([breed, sub_breed]:any | string) => ({breed, sub_breed}));
    });
  }

  getDogImg(selected_breed:string): void {
    this.dogService.getDogImg(selected_breed).subscribe((res) => {
      this.img_url = res.message;
    })
    console.log(this.img_url);
  }

  logDogs(): void{
    console.log(this.breeds);

  }
}