import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    skills: z.array(z.string()),
    hook: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
};
