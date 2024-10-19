import { create } from 'zustand';
import { persist } from "zustand/middleware";

interface authState {
  isLoggedIn: boolean;
  token: string,
  saveToken: (token: string) => void;
  logout: () => void;
}

export const authStore = create<authState>()(
    persist(
      (set) => ({
        isLoggedIn: false,
        token: "",

        saveToken: (token: string) => {
            set({
                isLoggedIn: true,
                token: token
            })
        },

        logout: () => {
            set({
                isLoggedIn: false,
                token: "",
            })
        },
      }),
      {
        name: "jwt",
      }
    )
)
