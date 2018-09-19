import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) { }

  transform( value: string, url: string): any {
    const cadena = value.split(':');
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + cadena[2] );
  }

}
