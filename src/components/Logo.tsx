import { GraduationCap } from "lucide-react";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500/25">
        <GraduationCap
          size={21}
          strokeWidth={2.2}
          className="text-white"
        />
      </div>

      {!compact && (
        <span className="text-[17px] font-bold tracking-[-0.02em]">
          My<span className="text-indigo-400">Acumen</span>
        </span>
      )}
    </div>
  );
}
