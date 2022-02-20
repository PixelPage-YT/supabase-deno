# Supabase-Deno
<p>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg">
</p>

> A Deno API for [Supabase](https://supabase.io/), an alternative to FireBase

### Usage
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
let table = sbclient.getTable("todo")
console.log(await table.items.all())
```

### ToDo
❎ RLS Client