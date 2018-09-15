import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  apiUrl: any = 'https://api.spotify.com/v1/';
  token: any = 'BQAMvUazw5_bDqGhG0kir31IlPpF-XsEvmFN0P0TzHiOjX4-DweKgdM5wNrvOxhqBGqHiaNr81S23Er07DZBPli2j_s7gCMcTnrn_yHBwyPQCpGG0LEgLi2f1kPMO5w5BZ3EESxUYkQLPf8';
  headers: any = {
      'Authorization': `Bearer ${this.token}`
  };

  constructor(private _http: HttpClient) { }

  getQuery(query: string) {
    return this._http.get(`${this.apiUrl}${query}`, { headers: new HttpHeaders(this.headers) });
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases`).pipe( map( data => data['albums'].items ));
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe( map( data => data['artists'].items ));
  }
}
