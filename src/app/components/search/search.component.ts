import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;

  constructor(private _spotifySearch: SpotifyService) { }

  search(searchTerm: string) {
    this.loading = true;
    this._spotifySearch.getArtists(searchTerm)
        .subscribe((data: any) => {
          this.artists = data;
          this.loading = false;
        });
  }

}
