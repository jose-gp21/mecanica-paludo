"use client";
import { useWhatsAppModal } from "@/hooks/useWhatsAppModal";
import { WhatsAppModal } from "@/components/shared/WhatsAppModal";
import { WorkModal } from "../shared/WorkModal";

export default function GlobalModals() {
  const { isOpen, close } = useWhatsAppModal();

  return (
    <>
      <WhatsAppModal isOpen={isOpen} onClose={close} />
      <WorkModal/>
    </>
  );
}
