import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: any = 'BQARxUWgO-IdR99sDTPjJGGAwOtkj5LyapdMuK0PnSkoEbm585CgO81SG4xhYGP9u64igAsqsGc9WrdXapUYJkdiM0L5WqsoKBAmvNlHxDjO_YA0Q38V1nY4lcx6m_P_Ht9SyQhK2_kjuS8';

  constructor(private _http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtist(term: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this._http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, { headers });
  }
}
