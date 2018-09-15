import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  newSongs: any[] = [];

  constructor( private _spotifyService: SpotifyService ) {
    this._spotifyService.getNewReleases()
        .subscribe( (data: any) => {
          console.log(data);
          this.newSongs = data;
        });
  }

}
