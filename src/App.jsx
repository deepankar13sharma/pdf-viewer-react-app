import React, { useState } from "react";
import ListView from "./components/ListView";
import ReaderView from "./components/ReaderView";
import SearchBar from "./components/SearchBar";
import pdfData from "./data/pdfData";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  const [pdfs, setPdfs] = useState(pdfData);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    const filteredPdfs = pdfData.filter((pdf) =>
      pdf.title.toLowerCase().includes(query.toLowerCase())
    );
    setPdfs(filteredPdfs);
  };

  return (
    <>
      <Header></Header>
      <div className="app">
        {!selectedPdf ? (
          <>
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />
            <ListView pdfs={pdfs} onPdfSelect={setSelectedPdf} />
          </>
        ) : (
          <ReaderView
            selectedPdf={selectedPdf}
            onBack={() => setSelectedPdf(null)}
          />
        )}
      </div>
    </>
  );
};

export default App;
