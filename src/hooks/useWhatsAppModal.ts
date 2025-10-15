"use client";
import { create } from "zustand";

interface WhatsAppModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useWhatsAppModal = create<WhatsAppModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
