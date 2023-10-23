"use server";

import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";

export async function filterTags(FormData: FormData) {
	let tags = FormData.getAll("tag");
	let cookiesStore = cookies();
	cookiesStore.set("storedTags", JSON.stringify(tags), {
		secure: true,
	});
	revalidatePath("/blog");
}
