import { Component } from "@angular/core";

@Component({
    selector: 'app-photos',
    template: '<h2>{{msg}}</h2>',
    
})
export class PhotosComponent {
msg : string = "View Photo Gallery....";
}