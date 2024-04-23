import React, { useEffect, useRef, useState, type FC } from 'react';
import Quill from 'quill';
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "./index.less";

export type MybricksRichTextProps = {
  value?: string;
  readonly?: boolean;
  style?: React.CSSProperties

  onChange?: (value: string) => void;
}

const MybricksRichText: FC<MybricksRichTextProps> = (props) => {
  const { value, onChange, readonly, style } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [editorHeight, setEditorHeight] = useState<number | undefined>(void 0);

  /**
   * 创建 Quill 富文本编辑器
   */
  useEffect(() => {
    const editor = wrapperRef.current!.querySelector('div.rich-text-editor') as HTMLElement;
    const quill = new Quill(editor, {
      modules: {
        toolbar: [
          [
            { 'font': [] },
            { 'header': [1, 2, 3, 4, 5, 6, false] },
            { 'size': ['small', false, 'large', 'huge'] }
          ],
          ['bold', 'italic', 'underline', 'strike'],
          [
            { 'align': [] },
            { 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }
          ],
          [{ 'color': [] }, { 'background': [] }],
          ['link', 'image', 'video'],
          ['clean']
        ],
      },
      placeholder: '请输入内容...',
      theme: 'snow'
    });

    quill.enable(!readonly)

    const toolbar = wrapperRef.current!.querySelector('div.ql-toolbar') as HTMLElement;
    if (wrapperRef.current && toolbar) { setEditorHeight(wrapperRef.current.offsetHeight - toolbar?.offsetHeight); }
  }, []);
  

  return (
    <div ref={wrapperRef} className='mybricks-rich-text-editor' style={style}>
      <div className='rich-text-editor' style={{ height: editorHeight }} />
    </div>
  );
}

export default MybricksRichText;
