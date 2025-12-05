import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [text, setText] = useState("");
  const [previewText, setPreviewText] = useState("");

  useEffect(() => {
    setPreviewText(text);
  }, [text]);

  return (
    <div className="editor-container">
      
      {/* Markdown Input Area */}
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write Markdown here..."
      ></textarea>

      {/* Markdown Preview */}
      <div className="preview">
        <ReactMarkdown>{previewText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
