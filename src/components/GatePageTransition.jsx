import { useEffect, useState } from 'react';

export default function GatePageTransition({ isChanging, onTransitionComplete }) {
  const [stage, setStage] = useState('idle'); // 'idle' | 'closing' | 'opening'

  useEffect(() => {
    if (isChanging) {
      setStage('closing');
      const timer1 = setTimeout(() => {
        if (onTransitionComplete) onTransitionComplete();
        setStage('opening');
        const timer2 = setTimeout(() => {
          setStage('idle');
        }, 500);
        return () => clearTimeout(timer2);
      }, 400);
      return () => clearTimeout(timer1);
    }
  }, [isChanging]);

  if (stage === 'idle') return null;

  const isClosed = stage === 'closing' || stage === 'opening';
  const isOpening = stage === 'opening';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: stage === 'idle' ? 'none' : 'auto',
        overflow: 'hidden',
        display: 'flex',
      }}
      aria-hidden="true"
    >
      {/* Left Traditional Sliding Door */}
      <div
        style={{
          flex: 1,
          height: '100%',
          background: 'linear-gradient(135deg, #091224 0%, #0f1c38 100%)',
          borderRight: '3px solid #dc2626',
          boxShadow: '10px 0 30px rgba(0,0,0,0.5)',
          transform: isOpening ? 'translateX(-100%)' : 'translateX(0)',
          transition: 'transform 0.45s cubic-bezier(0.77, 0, 0.175, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingRight: '30px',
          position: 'relative',
        }}
      >
        {/* Shoji Lattice Pattern Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            backgroundImage: `
              linear-gradient(#f59e0b 1px, transparent 1px),
              linear-gradient(90deg, #f59e0b 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />

        <div style={{ textAlign: 'right', zIndex: 2 }}>
          <div
            style={{
              fontFamily: 'var(--font-jp)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#ef4444',
              letterSpacing: '6px',
              textShadow: '0 2px 10px rgba(239,68,68,0.4)',
            }}
          >
            篤子
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '3px',
              color: '#fbbf24',
              textTransform: 'uppercase',
              marginTop: 4,
            }}
          >
            ATSUKO
          </div>
        </div>
      </div>

      {/* Right Traditional Sliding Door */}
      <div
        style={{
          flex: 1,
          height: '100%',
          background: 'linear-gradient(225deg, #091224 0%, #0f1c38 100%)',
          borderLeft: '3px solid #dc2626',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
          transform: isOpening ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 0.45s cubic-bezier(0.77, 0, 0.175, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingLeft: '30px',
          position: 'relative',
        }}
      >
        {/* Shoji Lattice Pattern Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            backgroundImage: `
              linear-gradient(#f59e0b 1px, transparent 1px),
              linear-gradient(90deg, #f59e0b 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />

        <div style={{ textAlign: 'left', zIndex: 2 }}>
          <div
            style={{
              fontFamily: 'var(--font-jp)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#ef4444',
              letterSpacing: '6px',
              textShadow: '0 2px 10px rgba(239,68,68,0.4)',
            }}
          >
            学校
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '3px',
              color: '#fbbf24',
              textTransform: 'uppercase',
              marginTop: 4,
            }}
          >
            INTERNATIONAL
          </div>
        </div>
      </div>

      {/* Center Sacred Emblem Crest that locks the gates */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${isOpening ? 0.3 : 1})`,
          opacity: isOpening ? 0 : 1,
          transition: 'all 0.35s ease',
          zIndex: 3,
          width: 90,
          height: 90,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
          border: '3px solid #fbbf24',
          boxShadow: '0 0 30px rgba(220,38,38,0.7), 0 0 60px rgba(251,191,36,0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          pointerEvents: 'none',
        }}
      >
        <span style={{ fontFamily: 'var(--font-jp)', fontSize: 26, fontWeight: 900 }}>門</span>
        <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '1px', color: '#fde68a' }}>GATEWAY</span>
      </div>
    </div>
  );
}
