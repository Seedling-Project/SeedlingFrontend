import React, { useState, useEffect } from "react";
import axiosFetchData from "./ApiHandler";
import TestDocument from "./TestDocument";

const Research: React.FC = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      setLoading(true);
      try {
        const data = await axiosFetchData("document");
        console.log("Data fetched: ", data);
        setDocuments(data.map((doc) => ({ ...doc, contentLoaded: false })));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setLoading(false);
    };

    fetchDocuments();
  }, []);

  const handleAccordionClick = async (id) => {
    if (!documents.find((doc) => doc.id === id).contentLoaded) {
      const detailedData = await axiosFetchData(`document/${id}`);
      setDocuments(
        documents.map((doc) =>
          doc.id === id ? { ...doc, ...detailedData, contentLoaded: true } : doc
        )
      );
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold leading-tight text-gray-900">
        Transfer Information: Table of Contents
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        documents.map((doc, index) => (
          <div className="collapse collapse-arrow bg-base-200" key={index}>
            <input
              type="radio"
              name="my-accordion"
              onClick={() => handleAccordionClick(doc.id)}
            />
            <div className="collapse-title text-xl font-medium">
              {doc.title}
            </div>
            <div className="collapse-content">
              {doc.contentLoaded ? (
                <TestDocument
                  title={doc.title}
                  subtitle={doc.subtitle}
                  author={doc.author}
                  date={doc.date}
                  body={doc.body}
                />
              ) : (
                "Click to load content"
              )}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Research;
