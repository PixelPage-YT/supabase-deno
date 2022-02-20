import {supabaseClient} from "./client.ts"
export class supabaseTableItems{
    client:supabaseClient;
    tableName: string;
    constructor(client:supabaseClient, tablename:string){
        this.tableName = tablename
        this.client = client
    }
    async all(){
        let res = await fetch(this.client.url + "rest/v1/" + this.tableName + "?select=*", {headers:{"apikey": this.client.anonkey}})
        res = await res.json()
        return res
    }
    async add(item:object){
        let res = await fetch(this.client.url + "rest/v1/" + this.tableName, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "apikey":this.client.anonkey
            },
            body: JSON.stringify(item)
        })
        return await res.text()
    }

    async delete(matchname:string,matchvalue:string|number|object|boolean){
        let res = await fetch(this.client.url + "rest/v1/" + this.tableName + "?" + matchname + "=eq." + matchvalue,{
                method:'DELETE',
                headers: {
                    'Content-Type':'application/json',
                    "apikey": this.client.anonkey
                },
            }
        )
        return await res.text()
    }

    async get(matchname:string,matchvalue:string|number|object|boolean){
        let res = await fetch(this.client.url + "rest/v1/" + this.tableName + "?" + matchname + "=eq." + matchvalue +  "&select=*", {headers:{"apikey": this.client.anonkey}})
        res = await res.json()
        return res
    }
}