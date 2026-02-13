import zureLogo from '../assets/images/zure-logo.svg';

export default function ZureLogo() {
  return (
    <div
      style={{
        width: '260px',
        height: '64px',
      }}
    >
      <img
        src={zureLogo}
        alt="Zure Logo"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
}
