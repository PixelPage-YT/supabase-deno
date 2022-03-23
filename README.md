# Supabase-Deno
<p>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg">
</p>

> A Deno API for [Supabase](https://supabase.io/), an alternative to FireBase
### Usage
> Keep in mind that this version is WIP and not production ready. I'm trying to implement new features such as RLS when i've got time
##### Import
```ts
import { supabaseClient } from "https://deno.land/x/supabase_deno/mod.ts";
```
##### Create Client
```ts
const sbclient = new supabaseClient("https://xyz.supabase.co","your-anon-key")
```
##### Get items from a table
```ts
let table = sbclient.tables().get("todo")
console.log(await table.items.all())
```

### ToDo
❎ RLS Client <br>
❎ Authentication
