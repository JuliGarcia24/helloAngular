import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
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

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }
}
