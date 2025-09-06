import React from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="relative max-w-5xl h-[90vh] p-0">
        {/* Floating close button (moved slightly outside) */}
        <DialogClose asChild>
          <button
            className="absolute -top-4 -right-4 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </DialogClose>

        {/* PDF viewer */}
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
