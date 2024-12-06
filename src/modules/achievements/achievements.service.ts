import { Injectable } from '@nestjs/common';
import {
  AchievementType,
  AchievementsData,
  AchievementsServices,
  SpecificAchievementsData,
} from './achievements.interface';
import { AchievementsRepository } from './achievements.repository';

@Injectable()
export class AchievementsService implements AchievementsServices {
  constructor(private readonly achivementsRepository: AchievementsRepository) {}

  getAchievements(): AchievementsData {
    return this.achivementsRepository.getAchievementsData();
  }

  getSpecificAchievements(type: AchievementType): SpecificAchievementsData {
    const achievements = this.achivementsRepository.getAchievementsData();
    const achievementsFiltered = achievements[type];
    const count = achievementsFiltered
      .map(({ count }) => count)
      .reduce((p, c) => p + c);

    return {
      count,
      achievements: achievementsFiltered,
    };
  }
}
