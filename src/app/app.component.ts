import { Component } from '@angular/core';
import { NumberSelectService } from './selection/grid/number-select-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NumberSelectService],
})
export class AppComponent {
  title = 'Soundoku';

  constructor(private selectNumberService: NumberSelectService) {}
}
