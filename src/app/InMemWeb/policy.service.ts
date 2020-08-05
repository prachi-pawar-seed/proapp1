import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Policy } from "./policy";

@Injectable({providedIn: 'root'})
export class PolicyService
{
    SERVER_URL: string = "http://localhost:4200/api/";

    constructor(private http :HttpClient)
    {}

    getAllPolicies() : Observable<Policy[]>
    {
      return  this.http.get<Policy[]>(this.SERVER_URL+'policies');
    }


    getPolicy(pid:number) : Observable<Policy>
    {

        return this.http.get<Policy>(this.SERVER_URL+'policies/'+pid);
    }


    
  public createPolicy(policy: Policy ){
    return this.http.post(this.SERVER_URL + 'policies', policy)
}


public addPolicy(p:Policy)
{
 return this.http.post(this.SERVER_URL+"policies",p);
}


public deletePolicy(policyId: number): Observable<Policy> {
  return this.http.delete<Policy>(this.SERVER_URL + "policies/" + policyId);
  
}


}
