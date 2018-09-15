import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
export class TarjetaComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  seeArtist(item) {
    let artistID;

    if (item.type === 'artist') {
      artistID = item.id;
    } else {
      artistID = item.artists[0].id;
    }

    this._router.navigate( [ '/artist', artistID ] );
  }

}
