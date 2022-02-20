import { supabaseTable } from "./table.ts"

export class supabaseClient{
    url:string;
    anonkey:string;
    constructor(url:string, anonkey:string){
        if(!url.endsWith("/")){
            url += "/"
        }
        this.url = url;
        this.anonkey = anonkey
    }

    getTable(name:string){
        return new supabaseTable(name, this)
    }
}