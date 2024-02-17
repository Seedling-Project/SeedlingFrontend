import { useRef, useState, useEffect } from "react";
import "daisyui/dist/full.css";
import "../App.css";
import "../index.css";
import Hero from "./Hero";
import Document from "./Document";
import Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";
import Carousel from "./Carousel";
import TestDocument from "./TestDocument";
import axiosFetchData from "./ApiHandler";
import RenderBlock from "./RenderBlock";

interface DocumentData {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  body: string;
}

function Home() {
  //new axios functionality, not completely set up but this is the form
  const [documents, setDocuments] = useState<DocumentData[]>([]); // For storing fetched documents
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    console.log("Fetching data...");
    const fetchData = async () => {
      try {
        const data = await axiosFetchData("document");
        console.log("Data fetched: ", data);
        setDocuments(data);
        // add the documents to the end of the items array
        const itemsToAdd = data.map((doc: DocumentData, index: number) => (
          <TestDocument
            key={index}
            title={doc.title}
            subtitle={doc.subtitle}
            author={doc.author}
            date={doc.date}
            body={doc.body}
          />
        ));
        setItems((prevItems) => [...prevItems, ...itemsToAdd]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderBlocks = () => {
    if (loading) {
      return <p>Loading Content...</p>;
    }
    return documents.map((block, index) => (
      <RenderBlock key={index} block={block} />
    ));
  };

  // Initialize an array of image URLs
  const timelineRef = useRef<HTMLDivElement>(null); // Create a ref for the Timeline component

  const scrollToTimeline = () => {
    if (timelineRef.current) {
      const top = timelineRef.current.offsetTop; // Get the top position of the timeline component
      const offset = 100; // Adjust this value to whatever works for your layout
      window.scrollTo({
        top: top - offset, // Subtract the offset from the top position
        behavior: "smooth",
      });
    }
  };
  const [items, setItems] = useState([
    <Document
      key="1"
      title="THIRD Document Title"
      subtitle="This is a subtitle"
      author="John Doe"
      date="Jan 1, 2023"
      body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
    />,
    // Add more items as you wish, even other components!
  ]);

  // when the documents are set, a
  const timelineDetails = [
    {
      icon: "/additional-logo.png", // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    {
      icon: "/additional-logo.png", // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    {
      icon: "/additional-logo.png", // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle as well"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },

  ];

  return (
    <>
      <Hero onButtonClick={scrollToTimeline} />
      <div className="p-5"></div>
      <Timeline ref={timelineRef}>
        {timelineDetails.map((item, index) => (
          <TimelineItem
            key={index}
            icon={item.icon}
            content={item.content}
            showConnectingLine={index < timelineDetails.length - 1} // Show connecting line except for the last item
          />
        ))}
      </Timeline>

      {/* ... other components or content */}

      <div className="documents-container">
        {loading ? (
          <p>Loading documents...</p>
        ) : (
          documents.map((doc, index) => (
            <TestDocument
              key={index}
              title={doc.title}
              subtitle={doc.subtitle}
              author={doc.author}
              date={doc.date}
              body={doc.body}
            />
          ))
        )}
        {renderBlocks()}
      </div>
    </>
  );
}
export default Home;
