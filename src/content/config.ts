import { defineCollection, z } from 'astro:content'

const cfpCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    conference_start: z.date(),
    conference_end: z.date()
  })
})
// Exporting a single `collections` object to register collection(s)
// This key matches the collection directory name in "src/content"
export const collections = {
  cfp: cfpCollection
}
