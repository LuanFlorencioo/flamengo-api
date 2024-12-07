import { Injectable } from '@nestjs/common';
import { ApiData } from './root.interface';

@Injectable()
export class RootRepository {
  private readonly apiData: ApiData = {
    url_documentation: '',
    api: {
      name: 'flamengo-api',
      created_at: new Date(2024, 11, 23, 20, 20),
      version: '0.0.1',
      description:
        'An API developed in Nest to provide information about Clube de Regatas do Flamengo. This project, created by a Flamengo fan, aims to provide data about the team, players and other relevant statistics.',
      is_open_source: true,
      is_running: false,
      url_repository: 'https://github.com/LuanFlorencioo/flamengo-api/',
    },
    author: {
      name: 'Luan Florencio',
      email: 'luanflorencio.dev@gmail.com',
      url_github: 'https://github.com/LuanFlorencioo/',
    },
    url_all_routes: '',
  };

  getApiData(): ApiData {
    return this.apiData;
  }
}
