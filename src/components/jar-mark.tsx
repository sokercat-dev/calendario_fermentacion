import { useId } from "react";
import type { FermentId } from "@/lib/ferments";
import { cn } from "@/lib/utils";

const FILL: Record<FermentId, string> = {
  "kefir-agua": "var(--color-kefir-agua)",
  "kefir-leche": "var(--color-kefir-leche)",
  yogurt: "var(--color-yogurt)",
  chucrut: "var(--color-chucrut)",
};

type JarMarkProps = {
  type: FermentId;
  progress?: number;
  className?: string;
};

export function JarMark({ type, progress = 0.55, className }: JarMarkProps) {
  const reactId = useId().replace(/:/g, "");
  const clipId = `jar-liquid-${reactId}`;
  const fill = FILL[type];
  const p = Math.min(1, Math.max(0.12, progress));
  const liquidTop = 108 - p * 72;

  return (
    <svg
      viewBox="0 0 80 120"
      className={cn("text-fg", className)}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M22 34c0-2 1.5-4 4-4h28c2.5 0 4 2 4 4v58c0 10-8 18-18 18H40c-10 0-18-8-18-18V34Z" />
        </clipPath>
      </defs>
      <rect x="26" y="10" width="28" height="8" rx="2" fill="currentColor" opacity="0.85" />
      <rect x="22" y="18" width="36" height="6" rx="2" fill="currentColor" opacity="0.55" />
      <path
        d="M22 34c0-2 1.5-4 4-4h28c2.5 0 4 2 4 4v58c0 10-8 18-18 18H40c-10 0-18-8-18-18V34Z"
        fill="var(--color-surface)"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <g clipPath={`url(#${clipId})`}>
        <rect x="18" y={liquidTop} width="44" height="90" fill={fill} />
        <path
          d={`M18 ${liquidTop + 4}c8-6 16 6 24 0s16 6 24 0v10H18Z`}
          fill={`color-mix(in oklab, white 28%, ${fill})`}
          opacity="0.55"
        />
        {type === "kefir-agua" || type === "kefir-leche" ? (
          <>
            <circle cx="34" cy={liquidTop + 22} r="2.2" fill="white" opacity="0.55" />
            <circle cx="48" cy={liquidTop + 34} r="1.6" fill="white" opacity="0.45" />
            <circle cx="40" cy={liquidTop + 48} r="2.8" fill="white" opacity="0.35" />
          </>
        ) : null}
      </g>
      <path
        d="M30 34v56M50 34v56"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.12"
      />
    </svg>
  );
}
