import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import { Dog } from '../../../types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DogsService } from '../../services/dogs.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDatepickerModule],
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent {
  dogsService = inject(DogsService)
  dogs!: Dog[];

  @Output() dogOutput: EventEmitter<Dog> = new EventEmitter<Dog>();

  //Alex ipv4 - 

  ngOnInit() {
    this.dogsService
      .getDogs("http://10.0.0.187:5000/dogs", {page: 0, perPage: 5})
      .subscribe((dogs) => {
      this.dogs = dogs
      console.log("All", dogs)
    })
  }
  /*ngOnInit() {
    console.log("DogComponent initialized with dog:", this.dog);
  }*/
}