import React, {useCallback, useMemo, useState} from "react";
import isHotkey from "is-hotkey";
import {Editable, Slate, useSlate, withReact} from "slate-react";
import {createEditor, Editor, Transforms} from "slate";
import {withHistory} from "slate-history";
import {MdFormatListBulleted, MdFormatListNumbered} from "react-icons/md";
import {GoBold, GoQuote, GoTextSize} from "react-icons/go";
import "./style.scss";
import {FaCode, FaUnderline} from "react-icons/fa";
import {FaItalic} from "react-icons/fa/index";

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
};

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const RichTextEditor = () => {
    const [value, setValue] = useState(initialValue);
    console.log(value)
    const renderElement = useCallback(props => <Element {...props} />, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])


    return (
        <Slate editor={editor} value={value} onChange={value => setValue(value)}>
            <div className="options">
                <BoldButton format="bold"/>
                <ItalicButton format="italic"/>
                <UnderlineButton format="underline"/>
                <CodeButton format="code"/>
                <H1Button format="heading-one"/>
                {/*<H2Button format="heading-two"  />*/}
                <FormatQuote format="block-quote"/>
                <NumberListButton format="numbered-list"/>
                <BulletListButton format="bulleted-list"/>
            </div>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Enter some rich text…"
                spellCheck
                autoFocus
                onKeyDown={event => {
                    for (const hotkey in HOTKEYS) {
                        if (isHotkey(hotkey, event)) {
                            event.preventDefault()
                            const mark = HOTKEYS[hotkey]
                            toggleMark(editor, mark)
                        }
                    }
                }}
            />
        </Slate>
    )
}

const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format)
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: n => LIST_TYPES.includes(n.type),
        split: true,
    })

    Transforms.setNodes(editor, {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    })

    if (!isActive && isList) {
        const block = {type: format, children: []}
        Transforms.wrapNodes(editor, block)
    }
}

const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)
    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}
const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.type === format,
    })

    return !!match
}

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

const Element = ({attributes, children, element}) => {
    switch (element.type) {
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>
        case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>
        case 'heading-one':
            return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
            return <h2 {...attributes}>{children}</h2>
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'numbered-list':
            return <ol {...attributes}>{children}</ol>
        default:
            return <p {...attributes}>{children}</p>
    }
}

const Leaf = ({attributes, children, leaf}) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.code) {
        children = <code>{children}</code>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}
const BoldButton = ({format}) => {
    const editor = useSlate();
    return (
        <GoBold
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        />
    )
}
const ItalicButton = ({format}) => {
    const editor = useSlate();
    return (
        <FaItalic
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        />
    )
}
const UnderlineButton = ({format}) => {
    const editor = useSlate();
    return (
        <FaUnderline
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        />
    )
}
const CodeButton = ({format}) => {
    const editor = useSlate();
    return (
        <FaCode
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        />
    )
}
const H1Button = ({format}) => {
    const editor = useSlate();
    return (
        <GoTextSize
            onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        />
    )
}
const FormatQuote = ({format}) => {
    const editor = useSlate();
    return (
        <GoQuote
            onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        />
    )
}
const NumberListButton = ({format}) => {
    const editor = useSlate();
    return (
        <MdFormatListNumbered
            onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        />
    )
}
const BulletListButton = ({format}) => {
    const editor = useSlate();
    return (
        <MdFormatListBulleted
            onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        />
    )
}

const initialValue = [
    {
        type: 'paragraph',
        children: [
            {text: 'Type here '},

        ],
    },
    {
        type: 'paragraph',
        children: [
            {
                text: "Since it's rich text, you can do things like turn a selection of text ",
            },
            {text: 'bold', bold: true},
            {
                text: ', or add a semantically rendered block quote in the middle of the page, like this:',
            },
        ],
    },
    {
        type: 'block-quote',
        children: [{text: 'A wise quote.'}],
    },
    {
        type: 'paragraph',
        children: [{text: 'Try it out for yourself!'}],
    },
]

export default RichTextEditor
