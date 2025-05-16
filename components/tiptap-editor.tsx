"use client"

import { BoldToolbar } from "@/components/toolbars/bold"
import { ToolbarProvider } from "@/components/toolbars/toolbar-provider"
import { Separator } from "@/components/ui/separator"
import Link from "@tiptap/extension-link"
import TextAlign from "@tiptap/extension-text-align"
import { EditorContent, type Extension, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { AlignmentToolbar } from "./toolbars/alignment"
import { BulletListToolbar } from "./toolbars/bullet-list"
import { ItalicToolbar } from "./toolbars/italic"
import { OrderedListToolbar } from "./toolbars/ordered-list"
import { RedoToolbar } from "./toolbars/redo"
import { UndoToolbar } from "./toolbars/undo"
import { LinkToolbar } from "./toolbars/link"

const extensions = [
  StarterKit.configure({
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal",
      },
    },
    bulletList: {
      HTMLAttributes: {
        class: "list-disc",
      },
    },
    code: {
      HTMLAttributes: {
        class: "bg-accent rounded-md p-1",
      },
    },
    horizontalRule: {
      HTMLAttributes: {
        class: "my-2",
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class: "bg-primary text-primary-foreground p-2 text-sm rounded-md p-1",
      },
    },
    heading: {
      levels: [1, 2, 3, 4],
      HTMLAttributes: {
        class: "tiptap-heading",
      },
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Link,
]

const content = `
<p></p>
<h2 class="tiptap-heading" style="text-align: center">Hello world 🌍</h2>
<div class="react-renderer node-image" contenteditable="false" draggable="true"><div class="relative flex flex-col rounded-md border-2 border-transparent left-1/2 -translate-x-1/2" data-node-view-wrapper="" style="white-space: normal; width: 100%;"><div class="group relative flex flex-col rounded-md"><img src="https://images.unsplash.com/photo-1664212249144-d5e263efbb47?q=80&amp;w=2970&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><figcaption as="figcaption" class="text-center" data-node-view-content="" style="white-space: pre-wrap;"></figcaption><div class="absolute inset-y-0 z-20 flex w-[25px] cursor-col-resize items-center justify-start p-2" style="left: 0px;"><div class="z-20 h-[70px] w-1 rounded-xl border bg-[rgba(0,0,0,0.65)] opacity-0 transition-all group-hover:opacity-100"></div></div><div class="absolute inset-y-0 z-20 flex w-[25px] cursor-col-resize items-center justify-end p-2" style="right: 0px;"><div class="z-20 h-[70px] w-1 rounded-xl border bg-[rgba(0,0,0,0.65)] opacity-0 transition-all group-hover:opacity-100"></div></div><div class="absolute right-4 top-4 flex items-center gap-1 rounded-md border bg-white p-1 opacity-0 transition-opacity dark:bg-gray-4 group-hover:opacity-100"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-7"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left size-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="15" x2="3" y1="12" y2="12"></line><line x1="17" x2="3" y1="18" y2="18"></line></svg></button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-7 bg-accent"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-center size-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="17" x2="7" y1="12" y2="12"></line><line x1="19" x2="5" y1="18" y2="18"></line></svg></button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-7"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-right size-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="21" x2="9" y1="12" y2="12"></line><line x1="21" x2="7" y1="18" y2="18"></line></svg></button><div data-orientation="vertical" role="none" class="shrink-0 bg-border w-[1px] h-[20px]"></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-7" type="button" id="radix-:ro:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical size-4"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button></div></div></div></div>
`

export function TiptapEditor() {
  const editor = useEditor({
    extensions: extensions as Extension[],
    content,
    immediatelyRender: false,
  })

  if (!editor) {
    return null
  }

  return (
    <div className="relative w-full overflow-hidden rounded-md border pb-3">
      <div className="bg-background sticky top-0 left-0 z-20 flex w-full items-center justify-between border-b px-2 py-2">
        <ToolbarProvider editor={editor}>
          <div className="flex items-center gap-2 py-2 [&>button]:shrink-0">
            <UndoToolbar />
            <RedoToolbar />
            <Separator orientation="vertical" />
            <BoldToolbar />
            <ItalicToolbar />
            <LinkToolbar />
            {/* <UnderlineToolbar /> */}
            <BulletListToolbar />
            <OrderedListToolbar />
            <AlignmentToolbar />
            {/* <ImagePlaceholderToolbar /> */}
            {/* <ColorHighlightToolbar /> */}
          </div>
        </ToolbarProvider>
      </div>
      <div
        onClick={() => {
          editor?.chain().focus().run()
        }}
        className="bg-background cursor-text"
      >
        <EditorContent className="outline-none" editor={editor} />
      </div>
    </div>
  )
}
