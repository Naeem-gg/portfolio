import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const projects = sqliteTable('projects', {
    id: integer('id').notNull().primaryKey(),
    title: text('title').notNull(),
    des: text('des').notNull(),
    img: text('img').notNull(),
    iconLists: text('icon_list',{mode:"json"}).notNull().$type<string[]>(),
    link: text('link').notNull(),
});

export const experience =sqliteTable('experience',{
    id: integer('id').notNull().primaryKey(),
    title: text('title').notNull(),
    des: text('des').notNull(),
    className: text('class_name').notNull(),
    thumbnail: text('thumbnail').notNull(),
})

export const socialMedia = sqliteTable('social_media',{
    id: integer('id').notNull().primaryKey(),
    img:  text('img').notNull(),
    link:text('link').notNull(),
})