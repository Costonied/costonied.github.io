import { useEffect } from 'react';

interface PageMeta {
  title: string;
  /** Toggles the `home` class on <body> (drives the no-scroll mobile layout). */
  home?: boolean;
}

/**
 * Keeps the document title and the body's `home` class in sync with the
 * active route — the original site shipped these per static HTML page.
 */
export function usePageMeta({ title, home = false }: PageMeta): void {
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    document.body.classList.toggle('home', home);
    return () => document.body.classList.remove('home');
  }, [home]);
}
