type PlayerRole =
  | 'goalkeeper' // Goleiro
  | 'defense' // Zagueiro
  | 'left-back' // Lateral esquerdo
  | 'right-back' // Lateral direito
  | 'defensive midfielder' // Volante
  | 'midfielder' // Meio-campista
  | 'striker' // Atacante
  | 'winger'; // Ponta

type Nacionality =
  | 'brazil'
  | 'argentina'
  | 'uruguay'
  | 'paraguai'
  | 'colombia'
  | 'chile'
  | 'bolivia'
  | 'peru'
  | 'equador'
  | 'venezuela'
  | 'spain';

export interface PlayerData {
  name: string;
  nicknames: string[];
  number: string;
  role: PlayerRole;
  nacionality: Nacionality;
}

export interface CoachData {
  name: string;
  role: 'coach' | 'assistent';
  nacionality: Nacionality;
}

export interface PresidencyData {
  name: string;
  role: 'president' | 'vice-president';
}

export interface ReturnCountData {
  count: number;
}

export interface ReturnPlayersData extends ReturnCountData {
  players: PlayerData[];
}

export interface ReturnCoachData extends ReturnCountData {
  coach_committee: CoachData[];
}

export interface ReturnPresidencyData extends ReturnCountData {
  presidential: PresidencyData[];
}

export interface AllTeamData {
  players: PlayerData[];
  coach_committee: CoachData[];
  presidential: PresidencyData[];
}

export interface QueriesSearchPlayer {
  name?: string;
  role?: string;
  number?: string;
  nacionality?: string;
}

export interface SquadServices {
  getAllTeamData(): AllTeamData;
  getPlayers(): ReturnPlayersData;
  getCoachs(): ReturnCoachData;
  getPresidency(): ReturnPresidencyData;
  searchPlayer(queries: QueriesSearchPlayer): ReturnPlayersData;
}
