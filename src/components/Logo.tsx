type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7e14ff] to-[#863bff] shadow-lg shadow-indigo-500/25">
        <span className="text-[17px] font-extrabold leading-none text-white">
          A
        </span>
      </div>

      {!compact && (
        <span className="text-[17px] font-bold tracking-[-0.02em]">
          My<span className="text-indigo-400">Acumen</span>
        </span>
      )}
    </div>
  );
}
