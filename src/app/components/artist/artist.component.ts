import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artist: any = {};

  constructor(private _router: ActivatedRoute, private _spotifyService: SpotifyService) {
    this._router.params.subscribe( params => {
      this.getArtist(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtist(id: string) {
    this._spotifyService.getArtist(id)
        .subscribe( (artist: any) => {
          this.artist = artist;
        });
  }

}
