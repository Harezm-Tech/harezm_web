'use client';

export function PaintFilters() {
  return (
    <svg
      width="0"
      height="0"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
      }}
    >
      <defs>
        <filter id="rough-texture">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="saturate"
            values="0.1"
          />
          <feBlend
            mode="multiply"
            in="SourceGraphic"
          />
        </filter>
        <filter id="rough">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.8"
            numOctaves="4"
            seed="2"
            stitchTiles="stitch"
          />
          <feDisplacementMap
            in="SourceGraphic"
            scale="3"
          />
        </filter>
      </defs>
    </svg>
  );
}
