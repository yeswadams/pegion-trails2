"use server";

import { client } from "./client";

export async function fetchSanityData(query: string, params: any = {}) {
  try {
    const data = await client.fetch(query, params);
    return { data, error: null };
  } catch (error: any) {
    console.error("Sanity Server Action Error:", error);
    return { data: null, error: error.message };
  }
}
