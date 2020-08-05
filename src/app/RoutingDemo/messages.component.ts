import { Component } from "@angular/core";

@Component({
    selector: 'app-msg',
    template: '<h2>{{msg}}</h2>',
    
})
export class MessagesComponent {
msg : string = "Read Messages Here....";
}