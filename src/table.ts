import { supabaseClient } from "./client.ts"
import { supabaseTableItems } from "./tableItems.ts"

export class supabaseTable{
    name:string;
    client:supabaseClient;
    constructor(name:string, client:supabaseClient){
        this.name = name;
        this.client = client;
    }
    items(){
        return new supabaseTableItems(this.client, this.name)
    }
}