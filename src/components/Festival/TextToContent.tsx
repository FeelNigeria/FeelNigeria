import React from "react";

interface TextToContentProps {
  text: string;
  title: string;
}

const TextToContent: React.FC<TextToContentProps> = ({ text, title }) => {
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  const sections: {
    heading: string;
    content: (string | string[])[];
  }[] = [];

  let currentHeading: string | null = null;
  let currentContent: (string | string[])[] = [];
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      currentContent.push([...currentList]);
      currentList = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    const isHeading = /^[A-Z][^.\n]*$/.test(trimmed);
    const isListItem = /^[-•]\s+/.test(trimmed);

    if (isHeading) {
      if (currentHeading) {
        flushList();
        sections.push({
          heading: currentHeading,
          content: [...currentContent],
        });
      }
      currentHeading = trimmed;
      currentContent = [];
    } else if (isListItem) {
      currentList.push(trimmed.replace(/^[-•]\s+/, "")); // remove bullet
    } else {
      flushList();
      currentContent.push(trimmed);
    }
  });

  if (currentHeading) {
    flushList();
    sections.push({ heading: currentHeading, content: [...currentContent] });
  }

  return (
    <div className="space-y-6">
      {sections.map((section, i) => (
        <section key={i} className="space-y-2">
          <h2 className="text-2xl font-semibold">{section.heading}</h2>
          {section.content.map((block, j) =>
            Array.isArray(block) ? (
              <ul key={j} className="list-disc pl-6 text-gray-700">
                {block.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={j} className="text-gray-700 leading-relaxed">
                {block}
              </p>
            )
          )}
        </section>
      ))}
    </div>
  );
};

export default TextToContent;
