import React, { useState } from 'react';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        backgroundColor: isHovered ? '#04aac4' : colors.zureFrozenBlue,
        color: colors.white,
        padding: 'clamp(16px, 2.5vw, 24px) clamp(24px, 4vw, 32px)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: typography.button.fontFamily,
        fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
        fontWeight: typography.button.fontWeight,
        textTransform: typography.button.textTransform,
        lineHeight: typography.button.lineHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: isHovered
          ? '0px 0px 12px 3px rgba(80, 230, 255, 0.4)'
          : '0px 0px 8px 2px rgba(80, 230, 255, 0.2)',
        outline: isFocused ? `2px solid ${colors.zureLightBlue}` : 'none',
        outlineOffset: '2px',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      {children}
    </button>
  );
}
