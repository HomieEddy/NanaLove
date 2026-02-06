import { Howl } from 'howler';
import { useCallback, useEffect, useRef } from 'react';

export const useSound = (src: string, options: { loop?: boolean; volume?: number } = {}) => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [src],
      loop: options.loop || false,
      volume: options.volume || 1.0,
      preload: true,
    });

    return () => {
      soundRef.current?.unload();
    };
  }, [src, options.loop, options.volume]);

  const play = useCallback(() => {
    soundRef.current?.play();
  }, []);

  const stop = useCallback(() => {
    soundRef.current?.stop();
  }, []);

  return { play, stop };
};
