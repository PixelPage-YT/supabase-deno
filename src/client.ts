import { supabaseTable } from "./table.ts"
import { supabaseClientTables } from "./clienttables.ts"

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
    tables(){
        return new supabaseClientTables(this)
    }
}