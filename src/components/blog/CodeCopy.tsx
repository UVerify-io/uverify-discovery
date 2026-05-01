import { useEffect, useState } from 'react';

interface CodeCopyProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function CodeCopy({ containerRef }: CodeCopyProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || !containerRef.current) return;

    const figures = containerRef.current.querySelectorAll<HTMLElement>(
      '[data-rehype-pretty-code-figure]',
    );

    figures.forEach((figure) => {
      if (figure.querySelector('.code-copy-btn')) return;

      const pre = figure.querySelector('pre');
      if (!pre) return;

      const button = document.createElement('button');
      button.className = 'code-copy-btn';
      button.setAttribute('aria-label', 'Copy code');
      button.textContent = 'Copy';

      button.addEventListener('click', async () => {
        const code = pre.querySelector('code');
        const text = code?.innerText ?? pre.innerText;
        try {
          await navigator.clipboard.writeText(text);
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        } catch {
          button.textContent = 'Failed';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        }
      });

      figure.style.position = 'relative';
      figure.appendChild(button);
    });
  }, [hydrated, containerRef]);

  return null;
}
