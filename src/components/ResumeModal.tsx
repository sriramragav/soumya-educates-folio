import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] p-0">
        <embed
          src="/assets/SoumyaResume.pdf"
          type="application/pdf"
          className="w-full h-full"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
