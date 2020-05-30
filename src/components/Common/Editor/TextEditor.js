import React,{Component,useState} from "react";
import { Editor } from "slate-react"
import {Value} from 'slate'
import isHotKey from "is-hotkey";

const initialValue = Value.fromJSON(Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: '',
              },
            ],
          },
        ],
      },
    ],
  },
}))

//const initialValue = Value.fromJSON(value);

const renderMark = (props, editor, next) => {
  const { children, mark, attributes } = props;
  switch (mark.type) {
    case "bold":
      return <strong {...attributes}>{children}</strong>;
    case "italic":
      return <em {...attributes}>{children}</em>;
    case "underline":
      return <u {...attributes}>{children}</u>;
    default:
      return next();
  }
};

const renderNode = (props, editor, next) => {
  const { children, node, attributes } = props;
  switch (node.type) {
    case "heading":
      return <h1 {...attributes}>{children}</h1>;
    case "paragraph":
      return <p {...attributes}>{children}</p>;
    default:
      return next();
  }
};

const onKeyDown = (event, editor, next) => {
  if (event.key === "Enter") {
    editor.insertBlock("paragraph");
  }

  if (isHotKey("mod+b", event)) {
    editor.toggleMark("bold");
  } else if (isHotKey("mod+i", event)) {
    editor.toggleMark("italic");
  } else if (isHotKey("mod+u", event)) {
    editor.toggleMark("underline");
  } else {
    next();
  }
};

export default class TextEditor extends Component{

  state = {
    value : initialValue
  }

  onChange = ({value})=>{
    this.setState({value});
  }

    render(){
        return (
          <Editor
          className="Editor"
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={onKeyDown}
          renderMark={renderMark}
          renderNode={renderNode}
        />
        )
    }
}