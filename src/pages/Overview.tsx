import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';
import dashboardImg from '../assets/images/dashboard.png';
import { useState, useEffect } from 'react';

export default function Overview() {
  const [isMobile, setIsMobile] = useState(false);
  const [imageStage, setImageStage] = useState(0); // 0 = hidden, 1 = partial, 2 = full
  const [textStage, setTextStage] = useState(0);

  useEffect(() => {
    // Image: partial opacity first
    const imagePartial = setTimeout(() => setImageStage(1), 100);
    // Image: full opacity
    const imageFull = setTimeout(() => setImageStage(2), 600);
    // Text: partial opacity
    const textPartial = setTimeout(() => setTextStage(1), 800);
    // Text: full opacity
    const textFull = setTimeout(() => setTextStage(2), 1300);

    return () => {
      clearTimeout(imagePartial);
      clearTimeout(imageFull);
      clearTimeout(textPartial);
      clearTimeout(textFull);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors.zureBlack,
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: spacing.xxxl,
        alignItems: 'center',
        paddingLeft: 'clamp(24px, 8vw, 120px)',
        paddingRight: 'clamp(24px, 8vw, 120px)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Text */}
      <p
        style={{
          flex: '1 0 0',
          fontFamily: typography.h1.fontFamily,
          fontWeight: 700,
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          lineHeight: 1.2,
          color: colors.zureAqua,
          margin: 0,
          whiteSpace: 'pre-wrap',
          minWidth: '1px',
          minHeight: '1px',
          opacity: textStage === 0 ? 0 : textStage === 1 ? 0.3 : 1,
          transform: textStage === 0 ? 'translateY(16px)' : textStage === 1 ? 'translateY(8px)' : 'translateY(0)',
          transition: 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        With Zure's integration platform you can take charge of costs and
        have robust monitoring and oversight, all without vendor-lock
      </p>

      {/* Dashboard image */}
      <div
        style={{
          position: 'relative',
          width: isMobile ? '100%' : '703px',
          maxWidth: '100%',
          flexShrink: 0,
          opacity: imageStage === 0 ? 0 : imageStage === 1 ? 0.3 : 1,
          transform: imageStage === 0 ? 'translateY(20px)' : imageStage === 1 ? 'translateY(10px)' : 'translateY(0)',
          transition: 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <img
          src={dashboardImg}
          alt="Integration platform dashboard showing monitoring and transaction overview"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 0 40px 8px rgba(5, 195, 222, 0.15)',
          }}
        />
      </div>
    </div>
  );
}
