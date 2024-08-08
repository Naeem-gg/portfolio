import { db } from "@/drizzle/db"
import * as schema from "@/drizzle/schema"

export const getWorkExperience = async()=>{
    try {
        const records = await db.select().from(schema.experience)
        return records
    } catch (error) {
        throw new Error(JSON.stringify(error))
    }
}