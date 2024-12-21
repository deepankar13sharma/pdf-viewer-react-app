import React from "react";
import book from './book.jpg'


const ListView = ({ pdfs, onPdfSelect }) => {
    return (
        <div className="list-view">
            {pdfs.map((pdf) => (
                <div key={pdf.id} className="pdf-item" onClick={() => onPdfSelect(pdf)}>
                    <img  src={book} alt={`${pdf.title} cover`} className="pdf-thumbnail" />
                    <div className="pdf-details">
                        <h5>{pdf.title}</h5>
                        <p>{pdf.author}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListView;