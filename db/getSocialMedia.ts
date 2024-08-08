import { db } from "@/drizzle/db"
import * as schema from "@/drizzle/schema"

export const getSocialMedia = async()=>{
    try {
        const records = await db.select().from(schema.socialMedia)
        return records
    } catch (error) {
        throw new Error(JSON.stringify(error))
    }
}