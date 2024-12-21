import React from "react";

const ReaderView = ({ selectedPdf, onBack }) => {
  return (
    <div className="reader-view">
      <button onClick={onBack} className="back-button">
        Back to List
      </button>
      <iframe
        src={selectedPdf.pdfLink}
        title={selectedPdf.title}
        className="pdf-reader"
      ></iframe>
    </div>
  );
};

export default ReaderView;
