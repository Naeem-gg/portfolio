import { experience, projects, socialMedia } from "./schema";

export type Projects = typeof projects.$inferSelect
export type WorkExperience = typeof experience.$inferSelect
export type SocialMedia = typeof socialMedia.$inferSelect