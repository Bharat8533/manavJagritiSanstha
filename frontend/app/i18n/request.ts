import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import path from "path";
import fs from "fs";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  // Use path.resolve to get the exact file path from the project root
  const messagesPath = path.join(process.cwd(), "messages", `${locale}.json`);

  let messages;
  try {
    messages = JSON.parse(fs.readFileSync(messagesPath, "utf8"));
  } catch (error) {
    console.error("Could not load messages file:", messagesPath);
    messages = {}; // Fallback
  }

  return {
    locale,
    messages,
  };
});
