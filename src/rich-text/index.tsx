import React, { useEffect, useMemo, useState, type FC } from 'react';
import Quill from 'quill';
import { uuid } from './utils';
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "./index.less";

const MybricksRichText: FC<{ title: string }> = (props) => {
  const [quill, setQuill] = useState<Quill | null>();
  const editorId = useMemo(() => `editor-${uuid()}`, []);

  useEffect(() => {
    setQuill(new Quill(`#${editorId}`, {
      modules: {
        imageUpload: true,
        toolbar: [
          [{ 'font': [] }, { 'header': [1, 2, 3, 4, 5, 6, false] }, { 'size': ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'align': [] }, { 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
          [{ 'color': [] }, { 'background': [] }],
          ['link', 'image', 'video'],
          ['clean']
        ],
      },
      placeholder: '请输入内容...',
      theme: 'snow'
    }));
  }, [])

  return (
    <div className='mybricks-rich-text-editor'>
      <div id={editorId} />
    </div>
  );
}

export default MybricksRichText;
