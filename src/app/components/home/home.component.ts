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
  loading: boolean;

  error: boolean;
  messageError: string;

  constructor( private _spotifyService: SpotifyService ) {
    this.loading = true;
    this._spotifyService.getNewReleases()
        .subscribe( (data: any) => {
          console.log(data);
          this.newSongs = data;
          this.loading = false;
        }, (errorService) => {
          this.error = true;
          this.loading = false;
          this.messageError = errorService.error.error.message;
        });
  }

}
