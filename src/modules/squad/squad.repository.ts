import { Injectable } from '@nestjs/common';
import { AllTeamData } from './squad.interface';

@Injectable()
export class SquadRepository {
  private readonly allTeamData: AllTeamData = {
    players: [
      {
        name: 'Agustín Rossi',
        nicknames: ['Rossi'],
        number: '01',
        nacionality: 'argentina',
        role: 'goalkeeper',
      },
      {
        name: 'Mateus Cunha',
        nicknames: [],
        number: '25',
        nacionality: 'brazil',
        role: 'goalkeeper',
      },
      {
        name: 'Alex Sandro',
        nicknames: [],
        number: '26',
        nacionality: 'brazil',
        role: 'left-back',
      },
      {
        name: 'Ayrton Lucas',
        nicknames: ['Beijinho'],
        number: '06',
        nacionality: 'brazil',
        role: 'left-back',
      },
      {
        name: 'Matías Viña',
        nicknames: ['Viña', 'Vina'],
        number: '17',
        nacionality: 'uruguay',
        role: 'left-back',
      },
      {
        name: 'Wesley França',
        nicknames: ['Wesley'],
        number: '43',
        nacionality: 'brazil',
        role: 'right-back',
      },
      {
        name: 'Guillermo Varela',
        nicknames: ['Varela'],
        number: '02',
        nacionality: 'uruguay',
        role: 'right-back',
      },
      {
        name: 'Léo Ortiz',
        nicknames: [],
        number: '03',
        nacionality: 'brazil',
        role: 'defense',
      },
      {
        name: 'Léo Pereira',
        nicknames: [],
        number: '04',
        nacionality: 'brazil',
        role: 'defense',
      },
      {
        name: 'Fabrício Bruno',
        nicknames: [],
        number: '15',
        nacionality: 'brazil',
        role: 'defense',
      },
      {
        name: 'David Luiz',
        nicknames: [],
        number: '23',
        nacionality: 'brazil',
        role: 'defense',
      },
      {
        name: 'Cleiton Santana',
        nicknames: ['Cleiton'],
        number: '33',
        nacionality: 'brazil',
        role: 'defense',
      },
      {
        name: 'Erick Pulgar',
        nicknames: ['Pulgar'],
        number: '05',
        nacionality: 'chile',
        role: 'defensive midfielder',
      },
      {
        name: 'Allan Rodrigues',
        nicknames: ['Allan'],
        number: '21',
        nacionality: 'brazil',
        role: 'defensive midfielder',
      },
      {
        name: 'Gerson Santos',
        nicknames: ['Gerson', 'Coringa', 'Joker'],
        number: '08',
        nacionality: 'brazil',
        role: 'defensive midfielder',
      },
      {
        name: 'Evertton Araújo',
        nicknames: [],
        number: '52',
        nacionality: 'brazil',
        role: 'defensive midfielder',
      },
      {
        name: 'Giorgian De Arrascaeta',
        nicknames: ['Arrascaeta', 'Arrasca', 'Debochado'],
        number: '14',
        nacionality: 'uruguay',
        role: 'midfielder',
      },
      {
        name: 'Nicolás De La Cruz',
        nicknames: ['Delacruz', 'Nico'],
        number: '18',
        nacionality: 'uruguay',
        role: 'midfielder',
      },
      {
        name: 'Carlos Alcaraz',
        nicknames: ['Alcaraz'],
        number: '37',
        nacionality: 'argentina',
        role: 'midfielder',
      },
      {
        name: 'Matheus Gonçalves',
        nicknames: [],
        number: '20',
        nacionality: 'brazil',
        role: 'midfielder',
      },
      {
        name: 'Lorran Lucas',
        nicknames: ['Lorran'],
        number: '19',
        nacionality: 'brazil',
        role: 'midfielder',
      },
      {
        name: 'Gabriel Barbosa',
        nicknames: ['Gabriel', 'Gabigol', 'Gabi', 'Lil Gabi', 'Predestinado'],
        number: '99',
        nacionality: 'brazil',
        role: 'striker',
      },
      {
        name: 'Pedro Guilherme',
        nicknames: ['Pedro'],
        number: '09',
        nacionality: 'brazil',
        role: 'striker',
      },
      {
        name: 'Carlos Moisés',
        nicknames: ['Carlinhos'],
        number: '22',
        nacionality: 'brazil',
        role: 'striker',
      },
      {
        name: 'Bruno Henrique',
        nicknames: ['BH'],
        number: '27',
        nacionality: 'brazil',
        role: 'winger',
      },
      {
        name: 'Gonzalo Plata',
        nicknames: ['Plata'],
        number: '45',
        nacionality: 'equador',
        role: 'winger',
      },
      {
        name: 'Everton Sousa',
        nicknames: ['Cebolinha', 'Cebola', 'Everton Cebolinha'],
        number: '11',
        nacionality: 'brazil',
        role: 'winger',
      },
      {
        name: 'Michael Richard',
        nicknames: ['Michael', 'Robozinho'],
        number: '30',
        nacionality: 'brazil',
        role: 'winger',
      },
      {
        name: 'Luiz Araújo',
        nicknames: [],
        number: '07',
        nacionality: 'brazil',
        role: 'winger',
      },
    ],
    coach_committee: [
      {
        name: 'Filipe Luis',
        role: 'coach',
        nacionality: 'brazil',
      },
      {
        name: 'Ivan Palanco',
        role: 'assistent',
        nacionality: 'spain',
      },
    ],
    presidential: [
      {
        name: 'Rodolfo Landim',
        role: 'president',
      },
      {
        name: 'Marcos Braz',
        role: 'vice-president',
      },
    ],
  };

  getAllTeamData() {
    return this.allTeamData;
  }
}
