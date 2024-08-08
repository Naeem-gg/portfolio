import { db } from "@/drizzle/db"
import { projects } from "@/drizzle/schema"

export const getProjects = async()=>{
    try {
        const records = await db.select().from(projects)
        return records
    } catch (error) {
        throw new Error(JSON.stringify(error))
    }
}