import { create } from 'zustand'

type ScrollState = {
  isScrolled: boolean
  setIsScrolled: (scrolled: boolean) => void
}

export const useScrollStore = create<ScrollState>((set) => ({
  isScrolled: false,
  setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),
}))
