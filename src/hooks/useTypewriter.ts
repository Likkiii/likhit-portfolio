import { useEffect, useState } from "react";

export function useTypewriter(words: string[], typingMs = 80, pauseMs = 2200) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), pauseMs);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? typingMs / 2 : typingMs,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingMs, pauseMs]);

  return text;
}
