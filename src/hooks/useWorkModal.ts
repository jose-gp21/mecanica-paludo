"use client";
import { create } from "zustand";

interface WorkModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useWorkModal = create<WorkModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
