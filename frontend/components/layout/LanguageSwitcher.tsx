"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setUserLocale } from "../../app/actions"; // adjust path as needed

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    startTransition(async () => {
      await setUserLocale(locale);
      router.refresh(); // Forces a refresh to update the server components
    });
  };

  return (
    <select
      disabled={isPending}
      onChange={(e) => handleLocaleChange(e.target.value)}
      defaultValue="en"
    >
      <option value="en">En</option>
      <option value="hi">Hi</option>
    </select>
  );
}
