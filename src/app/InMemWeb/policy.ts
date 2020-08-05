export class Policy
{
    id:number
    num:string
    amount:number
    userId:number
    clientId:number
    description : string

    constructor(id,num,amt,uid,cid,desc)
    {
        this.id=id
        this.num=num
        this.userId=uid
        this.amount=amt
        this.clientId=cid
        this.description=desc
    }
}