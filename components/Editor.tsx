// Import React dependencies.
import React, { useEffect, useMemo, useState } from 'react'
// Import the Slate editor factory.
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { Descendant } from 'slate'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}
export default function Editor() {
    const editor = useMemo(() => withReact(createEditor()), [])
    // Add the initial value when setting up our state.
    //   const [value, setValue] = useState<Descendant[]>([{ type: 'paragraph', children: [{ text: 'A line of text in a paragraph.' }] }])
    const [lightTheme, setLightTheme] = useState(true);
    return (
        // <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        //   <Editable
        //     onKeyDown={event => {
        //       if (event.key === '&') {
        //         event.preventDefault()
        //         editor.insertText('and')
        //       }
        //     }}
        //   />
        // </Slate>

        <div className="theme-light">
            <div className={lightTheme ? 'theme-light' : 'theme-dark'}>
                <input
                    type="checkbox"
                    checked={lightTheme}
                    onChange={() => setLightTheme(!lightTheme)}
                />
                {/* The rest of the app goes in here. */}
            </div>

            <button className=" h-20 bg-primary  ">Darari</button>
        </div>

    );
}