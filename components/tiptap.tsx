"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<h2>안녕하세요! 🌎️</h2>",
    immediatelyRender: false,
  })

  return <EditorContent editor={editor} />
}

export default Tiptap
