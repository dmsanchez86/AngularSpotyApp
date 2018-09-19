import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  apiUrl: any = 'https://api.spotify.com/v1/';
  token: any = 'BQBKbSwIB3c9qEI0pPnCG_YMlBuFO7aLyvJIv3d4wqFIBArFq4Fp1Q9TmufDQcwkSVvba2yK--93lFM8qfGHafOcTqTBE8WSi8_b0iZODtRbRx7495B-leFBVjgr6tiUHKF2moYdCS6fMEw';
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

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe( map( data => data['artists'].items ));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=co`).pipe( map( data => data['tracks'] ));
  }
}
