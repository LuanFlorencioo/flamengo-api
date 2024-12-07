interface Fans {
  name: string[];
  members: number;
}

interface Location {
  country: string;
  city: string;
  street: string;
}

interface Stadium {
  name: string;
  capacity: number;
  location: Location;
}

export interface InfoData {
  name: string;
  acronym: string[];
  created_at: string;
  founded_at: string;
  mascots: string[];
  colors: string[];
  fans: Fans;
  stadium: Stadium;
}

export interface InfoServices {
  getInfo(): InfoData;
}
