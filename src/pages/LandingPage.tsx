import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';
import Button from '../components/Button';
import ZureLogo from '../components/ZureLogo';
import heroImg from '../assets/images/hero-img2.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [showBackground, setShowBackground] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Background image fades in first
    setShowBackground(true);
    
    // Text fades in second (after 0.5s)
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);
    
    // Button fades in last (after 1.2s)
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 1200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors.zureBlack,
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: spacing.xxxl,
        paddingBottom: spacing.xxxl,
        paddingLeft: spacing.xl,
        paddingRight: spacing.xl,
        overflowX: 'hidden',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* Background image */}
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            right: '1%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50%',
            maxWidth: '800px',
            height: '80%',
            opacity: showBackground ? 0.3 : 0,
            pointerEvents: 'none',
            zIndex: 0,
            transition: 'opacity 0.8s ease-in-out',
          }}
        >
          <img
            src={heroImg}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      )}

      {/* Hero container */}
      <div
        style={{
          display: 'flex',
          flex: '1 0 0',
          alignItems: 'center',
          minHeight: '1px',
          minWidth: '1px',
          width: '100%',
          maxWidth: '1680px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Hero header + CTA */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(16px, 3vw, 24px)',
            alignItems: 'flex-start',
          }}
        >
          {/* Hero header */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: spacing.xs,
              alignItems: 'flex-start',
              width: '100%',
              opacity: showText ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
            }}
          >
            <div
              style={{
                width: 'clamp(130px, 50vw, 260px)',
                height: 'auto',
              }}
            >
              <ZureLogo />
            </div>
            <h1
              style={{
                fontFamily: typography.h1.fontFamily,
                fontWeight: typography.h1.fontWeight,
                fontSize: 'clamp(2rem, 8vw, 5rem)',
                lineHeight: typography.h1.lineHeight,
                letterSpacing: typography.h1.letterSpacing,
                color: colors.white,
                margin: 0,
                maxWidth: '935px',
                whiteSpace: 'pre-wrap',
              }}
            >
              Integration platform
            </h1>
            <h2
              style={{
                fontFamily: typography.h2.fontFamily,
                fontWeight: typography.h2.fontWeight,
                fontStyle: typography.h2.fontStyle,
                fontSize: 'clamp(1.125rem, 3vw, 2rem)',
                lineHeight: typography.h2.lineHeight,
                color: colors.zureLightBlue,
                margin: 0,
                maxWidth: '100%',
                whiteSpace: 'pre-wrap',
              }}
            >
              All the needed connections. None of the headaches.
            </h2>
          </div>
          <div
            style={{
              opacity: showButton ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
            }}
          >
            <Button onClick={() => navigate('/overview')}>Start your journey</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
