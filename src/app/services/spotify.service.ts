import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQARxUWgO-IdR99sDTPjJGGAwOtkj5LyapdMuK0PnSkoEbm585CgO81SG4xhYGP9u64igAsqsGc9WrdXapUYJkdiM0L5WqsoKBAmvNlHxDjO_YA0Q38V1nY4lcx6m_P_Ht9SyQhK2_kjuS8'
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
