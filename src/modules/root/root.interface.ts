export interface ApiData {
  url_documentation: string;
  api: {
    name: string;
    created_at: Date;
    version: string;
    description: string;
    is_open_source: boolean;
    is_running: boolean;
    url_repository: string;
  };
  author: {
    name: string;
    email: string;
    url_github: string;
  };
  url_all_routes: string;
}

export interface RootServices {
  getRootData(): ApiData;
}
