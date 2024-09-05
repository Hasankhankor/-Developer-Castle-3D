export const ModernScatteredSpheres = () => (
  <svg viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="	#DF4C9F" />
        <stop offset="50%" stopColor="	#9F2B68" />
        <stop offset="100%" stopColor="	#DF4C9F" />
      </linearGradient>
      <radialGradient id="gradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#00BFFF" />
        <stop offset="100%" stopColor="#1E90FF" />
      </radialGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="5" dy="5" stdDeviation="10" floodColor="rgba(0, 0, 0, 0.3)" />
      </filter>
    </defs>
    <g fill="none" stroke="none" strokeWidth="1" fillRule="evenodd">
      <circle cx="1232" cy="128" r="128" fill="url(#gradient1)" filter="url(#shadow)">
        <animate
          attributeName="cx"
          values="1232; 1200; 1232"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="128; 100; 128"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="155" cy="443" r="64" fill="url(#gradient2)" filter="url(#shadow)">
        <animate
          attributeName="cx"
          values="155; 120; 155"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="443; 480; 443"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="300" cy="200" r="80" fill="url(#gradient1)" filter="url(#shadow)">
        <animate
          attributeName="cx"
          values="300; 350; 300"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200; 220; 200"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="800" cy="500" r="100" fill="url(#gradient2)" filter="url(#shadow)">
        <animate
          attributeName="cx"
          values="800; 750; 800"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="500; 480; 500"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="680" cy="289" r="150" fill="url(#gradient2)" filter="url(#shadow)">
        <animate
          attributeName="cx"
          values="680; 700; 680"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="289; 300; 289"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);
