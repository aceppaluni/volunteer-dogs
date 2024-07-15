import { Component, Input} from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { Dogs, Dog } from '../../types';
import { DogComponent } from '../components/dog/dog.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../components/form/form.component';
import { FooterComponent } from "../layout/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DogComponent, FormComponent, CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (private dogsService: DogsService) {}
 
  dogs: Dog[] = [];

  @Input() dog!: Dog;

  onDogOutput(dog: Dog) {
    console.log(dog, "Outputs")
  }

  ngOnInit() {
    this.dogsService
      .getDogs("http://10.0.0.187:5000/dogs", {page: 0, perPage: 5})
    //   .subscribe((dogs: Dogs) => {
    //   this.dogs = dogs.items
    //   console.log("All", dogs)
    // }
    // )
  }
}
