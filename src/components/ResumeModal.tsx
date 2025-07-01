
import React from 'react';
import { X, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/e093b2fb-fc33-4b00-86a3-8b8cf69358a8.png';
    link.download = 'Taha_Khan_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-400 to-blue-500">
          <h2 className="text-xl font-bold text-black">Taha Khan - Resume</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
            >
              <Download size={20} />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={onClose}
              className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        <div className="overflow-auto max-h-[calc(90vh-80px)]">
          <img
            src="/lovable-uploads/e093b2fb-fc33-4b00-86a3-8b8cf69358a8.png"
            alt="Taha Khan Resume"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
