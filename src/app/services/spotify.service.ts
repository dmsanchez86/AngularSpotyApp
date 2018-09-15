import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  apiUrl: any = 'https://api.spotify.com/v1/';
  token: any = 'BQARxUWgO-IdR99sDTPjJGGAwOtkj5LyapdMuK0PnSkoEbm585CgO81SG4xhYGP9u64igAsqsGc9WrdXapUYJkdiM0L5WqsoKBAmvNlHxDjO_YA0Q38V1nY4lcx6m_P_Ht9SyQhK2_kjuS8';
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
