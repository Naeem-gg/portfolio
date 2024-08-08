import { createClient } from '@libsql/client';
import "dotenv/config";
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from "./schema";
const client = createClient({ url:process.env.DATABASE_URL as string, authToken: process.env.AUTH_TOKEN });
export const db = drizzle(client,{schema,logger:true});

// async function g(){
// await db.insert(schema.socialMedia).values([
//     {
//       id: 1,
//       img: "/git.svg",
//       link: "https://github.com/naeem-gg",
//     },
//     {
//       id: 2,
//       img: "/twit.svg",
//       link: "https://x.com/_naeemgg",
//     },
//     {
//       id: 3,
//       img: "/link.svg",
//       link: "https://in.linkedin.com/in/mohammed-naeem-72625a21b",
//     },
//   ]);
// }
// g()