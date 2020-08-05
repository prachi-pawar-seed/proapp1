import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CallRestService } from "./callrest.service";

@Component({
    selector:'call-rest-comp',
    templateUrl:'./callrest.component.html'
})
export class CallRestComponent
{
    
     msg:any;
    constructor(private cserv : CallRestService)
    {  
    }
     
    callrest()
    {
        this.cserv.callrest().subscribe((ret)=>{this.msg=ret});
    }
  
}