import { useLayoutEffect } from "react";
import { loadFromStorage } from "@/lib/store";

export function HydrateStore() {
  useLayoutEffect(() => {
    loadFromStorage();
  }, []);
  return null;
}
