import { Injectable } from '@nestjs/common';
import { AchievementsData } from './achievements.interface';

@Injectable()
export class AchievementsRepository {
  private readonly achievementsData: AchievementsData = {
    international: [
      {
        title: 'Copa Toyota Intercontinental',
        count: 1,
        seasons: ['1981'],
      },
    ],
    continental: [
      {
        title: 'Copa Libertadores da América',
        count: 3,
        seasons: ['1981', '2019', '2022'],
      },
      {
        title: 'Recopa Sul-Americana',
        count: 1,
        seasons: ['2020'],
      },
      {
        title: 'Copa Mercosul',
        count: 1,
        seasons: ['1999'],
      },
      {
        title: 'Copa de Ouro Nicolás Leoz',
        count: 1,
        seasons: ['1996'],
      },
    ],
    national: [
      {
        title: 'Campeonato Brasileiro Serie A',
        count: 8,
        seasons: [
          '1980',
          '1982',
          '1983',
          '1987',
          '1992',
          '2009',
          '2019',
          '2020',
        ],
      },
      {
        title: 'Copa do Brasil',
        count: 5,
        seasons: ['1990', '2006', '2013', '2022', '2024'],
      },
      {
        title: 'Supercopa do Brasil',
        count: 2,
        seasons: ['2020', '2021'],
      },
      {
        title: 'Copa dos Campeões',
        count: 1,
        seasons: ['2001'],
      },
    ],
    state: [
      {
        title: 'Campeonato Carioca',
        count: 38,
        seasons: [
          '1914',
          '1915',
          '1920',
          '1921',
          '1925',
          '1927',
          '1939',
          '1942',
          '1943',
          '1944',
          '1953',
          '1954',
          '1955',
          '1963',
          '1965',
          '1972',
          '1974',
          '1978',
          '1979-I',
          '1979-II',
          '1981',
          '1986',
          '1991',
          '1996',
          '1999',
          '2000',
          '2001',
          '2004',
          '2007',
          '2008',
          '2009',
          '2011',
          '2014',
          '2017',
          '2019',
          '2020',
          '2021',
          '2024',
        ],
      },
      {
        title: 'Copa Rio',
        count: 1,
        seasons: ['1991'],
      },
      {
        title: 'Torneio Rio-São Paulo',
        count: 1,
        seasons: ['1961'],
      },
      {
        title: 'Torneio Início do Campeonato Carioca',
        count: 6,
        seasons: ['1920', '1922', '1946', '1951', '1952', '1959'],
      },
      {
        title: 'Torneio Aberto do Rio de Janeiro',
        count: 1,
        seasons: ['1936'],
      },
      {
        title: 'Torneio Relâmpego do Rio de Janeiro',
        count: 1,
        seasons: ['1943'],
      },
    ],
  };

  getAchievementsData(): AchievementsData {
    return this.achievementsData;
  }
}
