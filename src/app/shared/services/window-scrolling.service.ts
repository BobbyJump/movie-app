import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

	private styleTag: HTMLStyleElement;

	constructor() {
		this.styleTag = this.buildStyleElement();
	}

	public disable() : void {
		document.body.appendChild( this.styleTag );
	}

	public enable() : void {
		document.body.removeChild( this.styleTag );
	}

	private buildStyleElement() : HTMLStyleElement {
		const style = document.createElement( "style" );
		style.setAttribute( "data-debug", "Injected by WindowScrolling service." );
		style.textContent = `
			body {
				overflow: hidden !important ;
			}
		`;
		return( style );
	}

}
