"use client";

const logos = [
  { src: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69db3770b30bc52371108226.png", alt: "Partner 1" },
  { src: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69db3770019dc508d364c795.png", alt: "Partner 2" },
  { src: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69db3770a4e6aa34cbeb42ee.png", alt: "Partner 3" },
  { src: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69db3770b30bc52371108224.png", alt: "Partner 4" },
  { src: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69db3770019dc508d364c794.png", alt: "Partner 5" },
  { src: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69db3770a4e6aa34cbeb42f5.png", alt: "Partner 6" },
  { src: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69db3770019dc508d364c793.png", alt: "Partner 7" },
];

export default function LogoSlider() {
  // Duplicate 4× — animation shifts by exactly one copy (-25%) and loops
  // seamlessly. Extra copies guarantee the track is always wider than the
  // viewport, so there's never a visible gap at any screen size.
  const track = [...logos, ...logos, ...logos, ...logos];

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #469FDD 0%, #6C70E9 50%, #897EE3 100%)",
        padding: "14px 0",
        transform: "translateZ(0)",
      }}
    >
      <div
        className="flex items-center marquee-track"
        style={{
          width: "max-content",
          animation: "marquee 40s linear infinite",
        }}
      >
        {track.map((logo, i) => (
          <span
            key={`logo-${i}`}
            className="inline-flex items-center flex-shrink-0"
            style={{ padding: "0 28px" }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              loading="eager"
              decoding="async"
              draggable={false}
              style={{
                height: "28px",
                width: "auto",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
