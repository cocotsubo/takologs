import { useEffect, useState } from "react";
import { AUTH_EVENT, readSessionUser } from "./auth-client";

export type AppUser = {
  id: string;
  displayName: string | null;
  primaryEmail: string | null;
  profileImageUrl: string | null;
  isDevFallback: boolean;
};

export type CurrentUserState = {
  user: AppUser | null;
  isPending: boolean;
};

export function useCurrentUserState(): CurrentUserState {
  const [user, setUser] = useState<AppUser | null>(() =>
    typeof window === "undefined" ? null : readSessionUser(),
  );
  const [isPending, setPending] = useState(typeof window === "undefined");

  useEffect(() => {
    const sync = () => setUser(readSessionUser());
    sync();
    setPending(false);
    window.addEventListener(AUTH_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(AUTH_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return { user, isPending };
}
