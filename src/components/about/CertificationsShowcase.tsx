"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

type Certification = {
  title: string;
  org: string;
  image: string;
  href: string;
  issued?: string;
  credentialId?: string;
};

const STEP = 4;

export default function CertificationsShowcase({ certifications }: { certifications: Certification[] }) {
  const [visibleCount, setVisibleCount] = useState(STEP);

  const visibleItems = useMemo(
    () => certifications.slice(0, visibleCount),
    [certifications, visibleCount]
  );

  const hasMore = visibleCount < certifications.length;

  return (
    <div className="mt-6 space-y-4">
      <div className="space-y-3">
        {visibleItems.map((certificate) => (
          <a
            key={`${certificate.title}-${certificate.credentialId ?? certificate.org}`}
            href={certificate.href}
            target="_blank"
            rel="noreferrer"
            className="group glass-panel-soft about-panel-soft flex items-center gap-3 p-3 sm:gap-4 sm:p-4"
          >
            <div className="project-media relative h-20 w-28 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-36">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 120px, 160px"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold text-[#fff8ef] sm:text-base">{certificate.title}</h3>
              <p className="mt-1 text-xs text-[rgba(255,240,227,0.72)] sm:text-sm">{certificate.org}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-[0.62rem] uppercase tracking-[0.14em] text-[rgba(255,225,196,0.66)] sm:text-[0.66rem]">
                {certificate.issued ? <span>{certificate.issued}</span> : null}
                {certificate.credentialId ? <span>#{certificate.credentialId}</span> : null}
              </div>
            </div>

            <ArrowUpRight className="h-4 w-4 shrink-0 text-[#f2bf8f]/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f2bf8f]" />
          </a>
        ))}
      </div>

      {hasMore ? (
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => Math.min(count + STEP, certifications.length))}
            className="btn-ghost w-full justify-center text-[0.66rem] tracking-[0.18em] sm:w-auto"
            style={{ color: 'rgba(255, 244, 231, 0.9)' }}
          >
            See more certifications ({certifications.length - visibleCount} left)
          </button>
        </div>
      ) : null}
    </div>
  );
}
