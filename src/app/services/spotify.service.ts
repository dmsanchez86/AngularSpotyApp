import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  apiUrl: any = 'https://api.spotify.com/v1/';
  token: any = 'BQAJnPLKoyXNL38IM3uW_afsfWkD3k1Ll-VkgxoHcSHEOb8r7JXhB99Ij5gVMfQf-Qxy3K0JRuxXcKugzJjZyuTUz_6OQj2oYVRrn7vi8TUgdhrwhtFJJbiBJqGOxRpIQtOD2CTDsc7ryms';
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
