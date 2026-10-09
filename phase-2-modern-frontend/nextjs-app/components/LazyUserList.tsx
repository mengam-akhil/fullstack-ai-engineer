
"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const UserList = dynamic(() => import("./UserList"), {
  ssr: false,
  loading: () => (
    <section
      aria-busy="true"
      className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
    >
      <p className="text-sm text-slate-500">
        Loading user management...
      </p>
    </section>
  ),
});

export default function LazyUserList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element || shouldLoad) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoad]);

  return (
    <div ref={containerRef}>
      {shouldLoad ? (
        <UserList />
      ) : (
        <section
          aria-label="User management"
          className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
        >
          <p className="text-sm text-slate-600 dark:text-slate-400">
            User management will load when you reach this section.
          </p>
        </section>
      )}
    </div>
  );
}
