export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 60%, #fafbff 80%, #f8f5ff 100%)' }}>
      {/* Large blue blob - top left, near tooth vector */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(186, 230, 253, 0.4) 0%, transparent 65%)',
          top: '-20%',
          left: '-25%',
        }}
      />
      {/* Large purple blob - left side, overlapping with tooth */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(155, 106, 241, 0.22) 0%, transparent 60%)',
          top: '10%',
          left: '-15%',
        }}
      />
      {/* Medium blue blob - center left */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(74, 179, 232, 0.25) 0%, transparent 65%)',
          top: '40%',
          left: '5%',
        }}
      />
      {/* Small purple accent - bottom left */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(155, 106, 241, 0.18) 0%, transparent 65%)',
          bottom: '0%',
          left: '-5%',
        }}
      />
      {/* Very subtle top-right accent - away from character */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(186, 230, 253, 0.15) 0%, transparent 70%)',
          top: '5%',
          right: '15%',
        }}
      />
    </div>
  );
}
