export function BuildVisual() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="animate-drift absolute -right-[8%] top-[8%] h-[78%] w-[72%] max-w-[920px] md:right-[2%] md:top-[6%]">
        <svg
          viewBox="0 0 720 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-[0_30px_60px_rgba(18,21,26,0.12)]"
        >
          <defs>
            <linearGradient id="panelA" x1="80" y1="40" x2="520" y2="420" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F8FBFD" />
              <stop offset="1" stopColor="#C9D5E2" />
            </linearGradient>
            <linearGradient id="panelB" x1="180" y1="120" x2="640" y2="520" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E7F7F4" />
              <stop offset="1" stopColor="#9EB6C9" />
            </linearGradient>
            <linearGradient id="signal" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#0BAF9A" />
              <stop offset="1" stopColor="#E8A317" />
            </linearGradient>
            <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.2" />
            </filter>
          </defs>

          {/* Base slab */}
          <path
            d="M72 420 L280 520 L620 360 L412 260 Z"
            fill="url(#panelA)"
            stroke="#12151A"
            strokeOpacity="0.18"
            strokeWidth="1.5"
          />
          <path
            d="M72 420 L72 470 L280 570 L280 520 Z"
            fill="#A9B8C8"
            stroke="#12151A"
            strokeOpacity="0.15"
            strokeWidth="1.2"
          />
          <path
            d="M280 520 L280 570 L620 410 L620 360 Z"
            fill="#8FA3B6"
            stroke="#12151A"
            strokeOpacity="0.15"
            strokeWidth="1.2"
          />

          {/* Mid stack */}
          <g transform="translate(36 -78)">
            <path
              d="M72 420 L280 520 L620 360 L412 260 Z"
              fill="url(#panelB)"
              stroke="#12151A"
              strokeOpacity="0.2"
              strokeWidth="1.5"
            />
            <path
              d="M72 420 L72 455 L280 555 L280 520 Z"
              fill="#8FCBBF"
              stroke="#12151A"
              strokeOpacity="0.14"
              strokeWidth="1.2"
            />
            <path
              d="M280 520 L280 555 L620 395 L620 360 Z"
              fill="#6FA89C"
              stroke="#12151A"
              strokeOpacity="0.14"
              strokeWidth="1.2"
            />
          </g>

          {/* Top slab */}
          <g transform="translate(64 -150)">
            <path
              d="M120 400 L300 490 L560 360 L380 270 Z"
              fill="#F4F7FA"
              stroke="#12151A"
              strokeOpacity="0.25"
              strokeWidth="1.6"
            />
            <path
              d="M120 400 L120 430 L300 520 L300 490 Z"
              fill="#0BAF9A"
              fillOpacity="0.55"
              stroke="#087F70"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
            <path
              d="M300 490 L300 520 L560 390 L560 360 Z"
              fill="#0BAF9A"
              fillOpacity="0.35"
              stroke="#087F70"
              strokeOpacity="0.3"
              strokeWidth="1"
            />

            {/* Circuit traces on top face */}
            <path
              d="M170 380 L250 420 L330 380 L410 420 L480 385"
              stroke="url(#signal)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
            <circle cx="170" cy="380" r="5" fill="#0BAF9A" />
            <circle cx="330" cy="380" r="5" fill="#E8A317" />
            <circle cx="480" cy="385" r="5" fill="#0BAF9A" />
            <rect
              x="210"
              y="330"
              width="88"
              height="28"
              rx="4"
              fill="#12151A"
              fillOpacity="0.08"
              stroke="#12151A"
              strokeOpacity="0.2"
            />
            <rect
              x="320"
              y="345"
              width="54"
              height="18"
              rx="3"
              fill="#0BAF9A"
              fillOpacity="0.25"
              stroke="#0BAF9A"
              strokeOpacity="0.45"
            />
          </g>

          {/* Floating nodes */}
          <g className="opacity-80" filter="url(#soft)">
            <circle cx="118" cy="168" r="7" fill="#0BAF9A" opacity="0.7" />
            <circle cx="610" cy="140" r="5" fill="#E8A317" opacity="0.8" />
            <circle cx="540" cy="520" r="6" fill="#0BAF9A" opacity="0.55" />
            <path
              d="M118 168 L190 210"
              stroke="#0BAF9A"
              strokeOpacity="0.45"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <path
              d="M610 140 L520 190"
              stroke="#E8A317"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          </g>

          {/* Measurement ticks */}
          <g stroke="#12151A" strokeOpacity="0.22" strokeWidth="1">
            <path d="M48 120 H120" />
            <path d="M48 120 V180" />
            <path d="M640 80 H690" />
            <path d="M690 80 V140" />
          </g>
          <text
            x="52"
            y="108"
            fill="#6B7380"
            fontSize="11"
            fontFamily="IBM Plex Mono, monospace"
          >
            BUILD / 01
          </text>
        </svg>
      </div>

      {/* Soft vignette so type stays readable on the left */}
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[color-mix(in_oklab,var(--mist)_92%,transparent)] via-[color-mix(in_oklab,var(--mist)_55%,transparent)] to-transparent md:w-[58%]" />
    </div>
  );
}
