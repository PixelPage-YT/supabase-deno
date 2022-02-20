import { supabaseClient } from "./client.ts"

export class supabaseTable{
    name:string;
    client:supabaseClient;
    constructor(name:string, client:supabaseClient){
        this.name = name;
        this.client = client;
    }

    async getAll(){
        let res = await fetch(this.client.url + "rest/v1/" + this.name + "?select=*", {headers:{"apikey": this.client.anonkey}})
        res = await res.json()
        return res
    }
}