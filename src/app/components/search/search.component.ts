import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists: any[] = [];

  constructor(private _spotifySearch: SpotifyService) { }

  search(searchTerm: string) {
    this._spotifySearch.getArtist(searchTerm)
        .subscribe((data: any) => {
          this.artists = data;
        });
  }

}
