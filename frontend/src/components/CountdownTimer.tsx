import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // ISO string
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const update = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);
      const total = diff;

      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((total / (1000 * 60)) % 60);
      const seconds = Math.floor((total / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds, total });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function TimeUnit({ value, label, size }: { value: number; label: string; size: 'sm' | 'md' | 'lg' }) {
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-2xl';
  const boxSize = size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-16 h-16' : 'w-14 h-14';

  return (
    <div className="flex flex-col items-center">
      <div className={`${boxSize} rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center ${textSize} font-black`}>
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-wider mt-1 opacity-80">{label}</span>
    </div>
  );
}

export default function CountdownTimer({ targetDate, className = '', size = 'md', label }: CountdownTimerProps) {
  const { hours, minutes, seconds, total } = useCountdown(targetDate);

  if (total <= 0) {
    return (
      <div className={`text-center ${className}`}>
        <span className="font-bold text-red-400">Oferta encerrada 😢</span>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">{label}</p>
      )}
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <TimeUnit value={hours} label="Horas" size={size} />
        <span className={`font-black ${size === 'sm' ? 'text-xl' : 'text-3xl'} opacity-40 -mt-4`}>:</span>
        <TimeUnit value={minutes} label="Min" size={size} />
        <span className={`font-black ${size === 'sm' ? 'text-xl' : 'text-3xl'} opacity-40 -mt-4`}>:</span>
        <TimeUnit value={seconds} label="Seg" size={size} />
      </div>
    </div>
  );
}
