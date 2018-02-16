import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name:'formatSongDate', 
	pure:false
})
export class FormatSongDatePipe implements PipeTransform {
	
	public	transform(d:Date) {

 		return d.toLocaleString("en-en", { month: "long" })+" "+d.getFullYear();
	}
}
