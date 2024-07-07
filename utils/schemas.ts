import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),
  company: z.string(),
  featured: z.coerce.boolean(),
  price: z.coerce.number().int().min(0, {
    message: "price must be a positive number.",
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 2 && wordCount <= 1000;
    },
    {
      message: "description must be between 2 and 1000 words.",
    }
  ),
});

export const imageSchema: ZodSchema<{ image: File }> = z.object({
  image: z
    .custom<File>((file) => {
      if (typeof File !== "undefined") {
        return file instanceof File;
      }
      // If File is not defined (server-side), accept any value
      return true;
    })
    .refine((file) => {
      return !file || file.size <= 1024 * 1024 * 2;
    }, "File size must be less than 2MB")
    .refine((file) => {
      return !file || ["image/"].some((type) => file.type.startsWith(type));
    }, "File must be an image"),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}
