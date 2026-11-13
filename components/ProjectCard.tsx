"use client";

import React, { useState } from "react";
import { ProjectCardData } from "@/content";

interface ProjectCardProps {
  project: ProjectCardData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const activeMedia = project.gallery && project.gallery.length > 0
    ? project.gallery[activeGalleryIndex] || project.gallery[0]
    : project.media;

  return (
    <article className="group relative rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 p-5 sm:p-6 backdrop-blur-xs shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] motion-safe:transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-xl hover:shadow-zinc-950/5 dark:hover:shadow-black/30 space-y-4 motion-safe:active:scale-[0.99]">
      {activeMedia && (
        <div className="space-y-2.5">
          <div
            id={`panel-${project.title}`}
            role={project.gallery && project.gallery.length > 1 ? "tabpanel" : undefined}
            aria-labelledby={project.gallery && project.gallery.length > 1 ? `tab-${project.title}-${activeGalleryIndex}` : undefined}
            className="relative overflow-hidden rounded-lg border border-zinc-200/70 dark:border-zinc-800/80 bg-zinc-950/30 dark:bg-zinc-950/70 aspect-video group/media"
          >
            {activeMedia.type === "video" ? (
              <video
                src={activeMedia.src}
                poster={activeMedia.poster}
                autoPlay
                loop
                muted
                playsInline
                aria-label={activeMedia.alt}
                className="w-full h-full object-cover object-top motion-safe:transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={activeMedia.src}
                src={activeMedia.src}
                alt={activeMedia.alt}
                loading="lazy"
                className="w-full h-full object-cover object-top motion-safe:transition-transform duration-500 ease-out group-hover:scale-105"
              />
            )}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/15 to-transparent opacity-60 group-hover:opacity-40 motion-safe:transition-opacity duration-300"
              aria-hidden="true"
            />
            {activeMedia.caption && (
              <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 pointer-events-none">
                <p className="font-mono text-2xs sm:text-xs text-zinc-200 dark:text-zinc-200 leading-snug bg-zinc-950/75 backdrop-blur-xs px-2.5 py-1.5 rounded-md border border-white/10 max-w-fit shadow-xs">
                  {activeMedia.caption}
                </p>
              </div>
            )}
          </div>

          {project.gallery && project.gallery.length > 1 && (
            <div
              role="tablist"
              aria-label={`Galeria analítica de ${project.title}`}
              className="flex flex-wrap items-center gap-1.5 pt-0.5"
            >
              {project.gallery.map((item, idx) => {
                const isActive = idx === activeGalleryIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    id={`tab-${project.title}-${idx}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${project.title}`}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`font-mono text-xs px-2.5 py-1 rounded-md border motion-safe:transition-all cursor-pointer ${
                      isActive
                        ? "bg-zinc-200/90 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 border-zinc-400 dark:border-zinc-500 font-semibold shadow-xs"
                        : "bg-zinc-100/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-200"
                    }`}
                  >
                    {item.label || `Gráfico ${idx + 1}`}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
        <h3 className="text-base sm:text-lg font-mono font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <span className="self-start sm:self-auto tabular-nums font-mono text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100/90 dark:bg-zinc-800/80 px-2.5 py-0.5 rounded-full border border-zinc-200/70 dark:border-zinc-700/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] group-hover:border-zinc-300 dark:group-hover:border-zinc-600 motion-safe:transition-all motion-safe:group-hover:scale-[1.02]">
          {project.highlight}
        </span>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty max-w-prose">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-1.5 pt-0.5" aria-label="Project technologies">
        {project.tags.map((tag, idx) => (
          <li
            key={idx}
            className="font-mono text-xs px-2 py-0.5 rounded-md bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/40 motion-safe:transition-colors hover:text-zinc-900 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-600"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="pt-3 flex flex-wrap gap-4 border-t border-zinc-100 dark:border-zinc-800/60">
        {project.links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 rounded-xs motion-safe:transition-all active:translate-y-px py-0.5"
          >
            <span>{link.label}</span>
            <svg
              className="size-3 text-zinc-400 dark:text-zinc-500 group-hover/link:text-zinc-900 dark:group-hover/link:text-zinc-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5 motion-safe:transition-transform duration-200"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        ))}
      </div>
    </article>
  );
}
