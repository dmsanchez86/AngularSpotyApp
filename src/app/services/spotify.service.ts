import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  apiUrl: any = 'https://api.spotify.com/v1/';
  token: any = 'BQDCYg6G-YkyCemIv0UIKsjs-0ksg39l7ih6a7Ie4aqoFDQmQE9qzbz9jNDhh63rkNoJf2AR2KvEEYKwiSKKb_Yh74HpURgSvBLf-n1wVIHKgpWSVrimFNtqKDsKaz3gRd9mitk05i4NJFY';
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
}
