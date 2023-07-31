import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async function({ request, platform }) {      
  if (platform) {
    console.log("has platform ... ")
    try {
      let result = await platform.env.DB.prepare(
        "SELECT * FROM users LIMIT 5"
      ).all();      
      return new Response(JSON.stringify(result));
    } catch (e: any) {
      return new Response(e.cause);
    }
  }
  return new Response(JSON.stringify({"status": "not ok"}))
}
