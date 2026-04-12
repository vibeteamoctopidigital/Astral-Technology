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
  // Render two identical tracks side by side — the animation shifts
  // by exactly one track width (-50%), then resets, creating a seamless loop.
  const track = [...logos, ...logos, ...logos, ...logos];

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #06B6D4 0%, #6366F1 50%, #8B5CF6 100%)",
        padding: "14px 0",
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
              style={{
                height: "28px",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
