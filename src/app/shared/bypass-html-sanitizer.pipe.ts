import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
	name:'bypassHtmlSanitizer', 
	pure:false
})
export class BypassHtmlSanitizerPipe implements PipeTransform {
	
	constructor(private s:DomSanitizer) {

	}

	public	transform(text:string) {
		return this.s.bypassSecurityTrustHtml(text);
	}
}
