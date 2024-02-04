// RenderBlock.tsx
import React from "react";

interface DocumentBlock {
  type: "document";
  value: {
    document: {
      url: string;
      // Add other properties as needed
    };
  };
}

interface ImageBlock {
  type: "image";
  value: {
    imageUrl: string;
    // Add other properties as needed
  };
}

interface OtherBlock {
  type: "other"; // Adjust the type based on your content types
  value: {
    // Define properties specific to your 'other' content
  };
}

export type Block = DocumentBlock | ImageBlock | OtherBlock;

interface RenderBlockProps {
  block: Block;
}

const RenderBlock: React.FC<RenderBlockProps> = ({ block }) => {
  switch (block.type) {
    case "document":
      return (
        <a
          href={block.value.document.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Document
        </a>
      );
    case "image":
      return <img src={block.value.imageUrl} alt="Image" />;
    case "other":
      // Render other types of content as needed
      return <div>Other content</div>;
    default:
      return null;
  }
};

export default RenderBlock;
