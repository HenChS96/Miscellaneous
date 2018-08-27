import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") newColor:string;

  constructor( private el: ElementRef) {
    console.log("Directiva llamada");
   // el.nativeElement.style.backgroundColor = "Yellow";
   }

   @HostListener('mouseenter') mouseEntro(){
     this.resaltar(this.newColor || 'yellow');
   }

   @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
   }

   private resaltar( color:string ) {

    this.el.nativeElement.style.backgroundColor = color;

   }

}
