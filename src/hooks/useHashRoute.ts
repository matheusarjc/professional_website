import { useEffect, useState } from "react";

export function useHashRoute(defaultHash = "#home") {
  const [hash, setHash] = useState(
    typeof window !== "undefined" ? window.location.hash || defaultHash : defaultHash
  );

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || defaultHash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [defaultHash]);

  return [
    hash,
    (h: string) => {
      window.location.hash = h;
      setHash(h);
    },
  ] as const;
}
