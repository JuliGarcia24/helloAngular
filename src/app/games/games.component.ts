import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games = [
    {
      id: 1,
      name: 'Uncharted'
    },
    {
      id: 2,
      name: 'EA FC 24'
    },
    {
      id: 3,
      name: 'BloodBorne'
    }
  ]
}
