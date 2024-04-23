# RichText

This is an example component.

```jsx
import { MybricksRichText } from '@mybricks/rich-text';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 8,
      }}
    >
      <MybricksRichText
        style={{ width: 840, height: 400 }}
        placeholder="请输入..."
      />
      <MybricksRichText style={{ width: 840, height: 400 }} readonly />
    </div>
  );
};
```
