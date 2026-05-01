import { forwardRef } from 'react';

interface ProseProps {
  html: string;
}

const Prose = forwardRef<HTMLDivElement, ProseProps>(function Prose(
  { html },
  ref,
) {
  return (
    <div
      ref={ref}
      className="prose-blog"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
});

export default Prose;
