export enum EWorkShiftType {
  FULL_24H = '00:00_23:59', // Turno único de 24h
  TWO_SHIFTS_12H = '00:00_12:00_12:00_23:59', // Dois turnos de 12h (0h-12h e 12h-24h)
  THREE_SHIFTS_8H = '00:00_08:00_08:00_16:00_16:00_23:59', // Três turnos de 8h (0h-8h, 8h-16h, 16h-24h)
  FOUR_SHIFTS_6H = '00:00_06:00_06:00_12:00_12:00_18:00_18:00_23:59', // Quatro turnos de 6h (0h-6h, 6h-12h, 12h-18h, 18h-24h)
  TWO_SHIFTS_14H = '00:00_14:00_14:00_23:59', // Dois turnos de 14h (0h-14h e 14h-24h)
}
