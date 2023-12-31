import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Note-Form-Container.css";

const NoteFormContainer = (props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(props.note[0]?.content);
    console.log("value", value);
  }, []);

  console.log("value", value);
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };
  return (
    <div className="note-form-container">
      <ReactQuill
        modules={module}
        theme="snow"
        value={value}
        onChange={(e) => setValue(e)}
        style={{ height: "60%", color: "#000" }}
      />
    </div>
  );
};

export default NoteFormContainer;
