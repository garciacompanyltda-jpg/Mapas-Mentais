import { useState, useEffect } from 'react';

export interface TodayDateInfo {
  formattedShort: string; // e.g. "01/11/2026"
  formattedLong: string;  // e.g. "01 de novembro"
  day: number;
  dayStr: string;         // e.g. "01"
  monthStr: string;       // e.g. "11"
}

export function getTodayDateInfo(): TodayDateInfo {
  try {
    const now = new Date();
    // Horário de Brasília oficial (America/Sao_Paulo, UTC-3)
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const parts = formatter.formatToParts(now);
    const dayStr = parts.find((p) => p.type === 'day')?.value || '01';
    const monthStr = parts.find((p) => p.type === 'month')?.value || '11';
    const year = parts.find((p) => p.type === 'year')?.value || '2026';
    const dayNum = parseInt(dayStr, 10);

    const formattedShort = `${dayStr}/${monthStr}/${year}`;

    const monthNames = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];
    const monthIndex = Math.max(0, Math.min(11, parseInt(monthStr, 10) - 1));
    const formattedLong = `${dayStr} de ${monthNames[monthIndex]}`;

    return { formattedShort, formattedLong, day: dayNum, dayStr, monthStr };
  } catch {
    return {
      formattedShort: 'HOJE',
      formattedLong: 'hoje',
      day: 1,
      dayStr: '01',
      monthStr: '11',
    };
  }
}

export function useTodayDate(): TodayDateInfo {
  const [dateInfo, setDateInfo] = useState<TodayDateInfo>(getTodayDateInfo);

  useEffect(() => {
    // Check every 15 seconds so as soon as midnight (00h) arrives, it rolls over automatically
    const interval = setInterval(() => {
      const current = getTodayDateInfo();
      if (current.formattedShort !== dateInfo.formattedShort) {
        setDateInfo(current);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [dateInfo.formattedShort]);

  return dateInfo;
}
