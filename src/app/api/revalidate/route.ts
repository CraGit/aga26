import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

/**
 * This endpoint purges Prismic content from Next.js' cache. It is called when
 * content is published in Prismic.
 */
export async function POST() {

  // Purge all Prismic-tagged data and invalidate the app route cache.
  revalidateTag("prismic", "max");
  revalidatePath("/");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
