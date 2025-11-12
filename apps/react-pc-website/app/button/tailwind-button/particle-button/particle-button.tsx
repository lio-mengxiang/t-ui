import React, { useCallback, useRef } from 'react';
import { TButton, type TButtonProps } from '@/button/tailwind-button';
import { useParticle } from './use-particle';
import { Particle } from './particle';

interface ParticleButtonProps extends TButtonProps {
  disableParticle?: boolean;
  children?: React.ReactNode;
}

export function ParticleButton(props: ParticleButtonProps) {
  const { disableParticle = false, disabled, loading, children, ...rest } = props;
  const domRef = useRef<HTMLButtonElement>(null);
  const { particles, onClear, onClick } = useParticle();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (disableParticle || disabled || loading) return;
      if (domRef.current) onClick(e);
    },
    [disableParticle, disabled, loading, onClick],
  );

  return (
    <div className="inline-flex relative w-fit">
      <TButton onClick={handleClick as any} ref={domRef} status="success" disabled={disabled} loading={loading} {...rest}>
        {children}
      </TButton>
      {!disableParticle && (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <Particle particles={particles} onClear={onClear} />
        </div>
      )}
    </div>
  );
}
