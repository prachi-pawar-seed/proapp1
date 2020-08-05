import { Component } from "@angular/core";

@Component({
    selector: 'app-notfound',
    template: '<h2><font color=red>{{msg}}</font></h2>',
    
})
export class NotFoundComponent {
msg : string = "Oops.. Not found !!";
}