import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PolicyService } from "./policy.service";
import { Policy } from "./policy";
import { Observable } from 'rxjs';

@Component({
    selector:'in-mem-comp',
    templateUrl:'./inmem.component.html'
})
export class InMemComponent
{    
    policies : Policy[];
    p : Policy ;
    SERVER_URL: string = "http://localhost:4200/api/";
     msg=""
    constructor(private pserv : PolicyService)
    {
        this.p = new Policy(0,"0",0,0,0,"xxx")
       
    }
     
    // addpolicy()
    // {
    //     this.pserv.createPolicy(this.p).subscribe((ret)=>{this.fetchall()});
    // }

    addpolicy()
        {
     let obs =   this.pserv.addPolicy(this.p)
     obs.subscribe(()=>{this.fetchall()});
        }
    

    deletePolicy(pid:number)
    {
  //this.msg="Deleteing "+pid;
  this.pserv.deletePolicy(pid).subscribe((ret)=>{this.fetchall()});
    }

    fetchall()
    {
   let obs = this.pserv.getAllPolicies();
   obs.subscribe((data:Policy[])=>{ this.policies = data});
    }

    search(pid:number)
    {
     //   this.pserv.getPolicy(pid).subscribe((ret)=>{this.p=ret});

    let obs =  this.pserv.getPolicy(pid);
   
    obs.subscribe((ret)=>{console.log("Searched")});
    }
}