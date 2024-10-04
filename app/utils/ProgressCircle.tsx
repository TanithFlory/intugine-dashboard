export default function ProgressCircle({ progress }: { progress: number }) {
  const dashArray = `${progress}, 100`;

  return (
    <div className="flex flex-col items-center space-y-4">
      <svg width="52" height="52" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="16"
          className="fill-none stroke-[#F8F8F8]"
          strokeWidth="4"
        />
        <g className="rotate-[-90deg] origin-center">
          <circle
            cx="18"
            cy="18"
            r="16"
            className="fill-none stroke-[#00C28B] transition-all duration-500"
            strokeWidth="4"
            strokeDasharray={dashArray}
          />
        </g>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-[#666666] text-[8px]  font-bold"
        >
          {progress.toFixed(0)}%
        </text>
      </svg>
    </div>
  );
}
