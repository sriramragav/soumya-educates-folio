import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, X } from "lucide-react";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] p-0">
        <DialogHeader className="flex justify-between items-center p-4 border-b">
          <DialogTitle className="text-xl font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Soumya’s Resume
          </DialogTitle>
          <button onClick={() => onOpenChange(false)}>
            <X className="h-6 w-6 text-gray-600 hover:text-black" />
          </button>
        </DialogHeader>
        <div className="w-full h-full">
          <iframe
            src="/assets/SoumyaResume.pdf"
            title="Soumya Resume"
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
