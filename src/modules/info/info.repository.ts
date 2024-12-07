import { Injectable } from '@nestjs/common';
import { formatDistanceToNow, lightFormat } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { InfoData } from './info.interface';

@Injectable()
export class InfoRepository {
  private readonly infoData: InfoData = {
    name: 'Clube de Regatas do Flamengo',
    acronym: ['CRF', 'FLA'],
    created_at: lightFormat(new Date(1895, 10, 15), 'dd-MM-yyyy'),
    founded_at: formatDistanceToNow(new Date(1895, 10, 15), {
      locale: ptBR,
    }),
    mascots: ['Urubu', 'Urubu-rei', 'Popeye'],
    colors: ['Vermelho', 'Preto'],
    fans: {
      name: ['Rubro-Negro', 'Flamenguista'],
      members: 80000,
    },
    stadium: {
      name: 'Maracanã - Estádio Jornalista Mario Filho',
      capacity: 78838,
      location: {
        country: 'Brasil',
        city: 'Rio de Janeiro',
        street: 'Rua Professor Eurico Rabelo',
      },
    },
  };

  getInfoData(): InfoData {
    return this.infoData;
  }
}
