import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import stepActive from '../assets/images/step-active.svg';
import stepInactive from '../assets/images/step-inactive.svg';

export default function Pagination() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0px',
      }}
    >
      <div
        style={{
          width: spacing.xl,
          height: spacing.xl,
          flexShrink: 0,
        }}
      >
        <img
          src={stepActive}
          alt="Active step"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </div>
      <div
        style={{
          width: spacing.xl,
          height: '2px',
          backgroundColor: colors.zureFrozenBlue50,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          width: spacing.xl,
          height: spacing.xl,
          flexShrink: 0,
        }}
      >
        <img
          src={stepInactive}
          alt="Inactive step"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </div>
      <div
        style={{
          width: spacing.xl,
          height: '2px',
          backgroundColor: colors.zureFrozenBlue50,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          width: spacing.xl,
          height: spacing.xl,
          flexShrink: 0,
        }}
      >
        <img
          src={stepInactive}
          alt="Inactive step"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </div>
      <div
        style={{
          width: spacing.xl,
          height: '2px',
          backgroundColor: colors.zureFrozenBlue50,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          width: spacing.xl,
          height: spacing.xl,
          flexShrink: 0,
        }}
      >
        <img
          src={stepInactive}
          alt="Inactive step"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </div>
      <div
        style={{
          width: spacing.xl,
          height: '2px',
          backgroundColor: colors.zureFrozenBlue50,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          width: spacing.xl,
          height: spacing.xl,
          flexShrink: 0,
        }}
      >
        <img
          src={stepInactive}
          alt="Inactive step"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}
