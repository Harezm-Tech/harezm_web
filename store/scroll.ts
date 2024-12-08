"use client"

import { create } from "zustand"

interface ScrollStore {
  isScrolled: boolean
  setIsScrolled: (value: boolean) => void
}

export const useScrollStore = create<ScrollStore>((set) => ({
  isScrolled: false,
  setIsScrolled: (value: boolean) => {
    console.log("Setting scroll state:", value) // Debug log
    set({ isScrolled: value })
  },
}))
