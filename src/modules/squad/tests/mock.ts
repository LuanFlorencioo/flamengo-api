import { CoachData, PlayerData, PresidencyData } from '../squad.interface';

export const mockPlayers: PlayerData[] = [
  {
    name: 'Zico',
    number: '10',
    nacionality: 'brazil',
    nicknames: ['Galo', 'Galinho'],
    role: 'midfielder',
  },
  {
    name: 'Rondinelli',
    number: '03',
    nacionality: 'brazil',
    nicknames: ['Deus da Raça'],
    role: 'defense',
  },
  {
    name: 'Adílio',
    number: '08',
    nacionality: 'brazil',
    nicknames: [],
    role: 'midfielder',
  },
];

export const mockCoachs: CoachData[] = [
  {
    name: 'Joel Santana',
    nacionality: 'brazil',
    role: 'coach',
  },
  {
    name: 'Evaristo',
    nacionality: 'brazil',
    role: 'coach',
  },
  {
    name: 'Carpegiani',
    nacionality: 'brazil',
    role: 'coach',
  },
];

export const mockPresidential: PresidencyData[] = [
  {
    name: 'George Helal',
    role: 'president',
  },
];
