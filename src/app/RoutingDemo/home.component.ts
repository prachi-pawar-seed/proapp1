import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: '<h2>{{msg}}</h2>',
    
})
export class HomeComponent {
msg : string = "HOME PAGE !";
}