import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class CallRestService
{
  //  SERVER_URL: string = "http://localhost/myphp/myrest.php?orderid=1";
  SERVER_URL: string = "http://localhost:8080/DemoService1/rest/frest/studlist";
    constructor(private http :HttpClient)
    {}

    callrest() 
    {
      return  this.http.get(this.SERVER_URL);
    }
}