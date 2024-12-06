export interface Achievement {
  title: string;
  count: number;
  seasons: string[];
}

export interface AchievementsData {
  international: Achievement[];
  continental: Achievement[];
  national: Achievement[];
  state: Achievement[];
}

export interface SpecificAchievementsData {
  count: number;
  achievements: Achievement[];
}

export type AchievementType =
  | 'international'
  | 'continental'
  | 'national'
  | 'state';

export interface AchievementsServices {
  getAchievements(): AchievementsData;
  getSpecificAchievements(type: AchievementType): SpecificAchievementsData;
}
