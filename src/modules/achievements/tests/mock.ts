import { Achievement, AchievementsData } from '../achievements.interface';

function generateAchievement(title: string, seasons: string[]): Achievement {
  return {
    title: `Copa ${title}`,
    count: seasons.length,
    seasons,
  };
}

export const mockData: AchievementsData = {
  international: [
    generateAchievement('Internacional', ['1994', '1998', '2003']),
  ],
  continental: [
    generateAchievement('Continental A', ['1999', '1959']),
    generateAchievement('Continental B', ['2009', '2003']),
  ],
  national: [
    generateAchievement('National I', ['2008']),
    generateAchievement('National II', ['1980', '1981', '1982']),
    generateAchievement('National III', ['1979', '1930']),
  ],
  state: [
    generateAchievement('State 1', ['2000']),
    generateAchievement('State 2', ['2002']),
    generateAchievement('State 3', ['2004']),
    generateAchievement('State X', ['2024']),
  ],
};
