import {supabaseClient} from "./client.ts"
import {supabaseTable} from "./table.ts"
export class supabaseClientTables{
    client: supabaseClient;
    constructor(client:supabaseClient){
        this.client = client
    }
    get(name:string){
        return new supabaseTable(name, this.client)
    }
}