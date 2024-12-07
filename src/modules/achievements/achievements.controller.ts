import { Controller, Get } from '@nestjs/common';
import { AchievementsService } from './achievements.service';

@Controller('achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Get('')
  getAllAchievements() {
    return this.achievementsService.getAchievements();
  }

  @Get('international')
  getInternationalAchievements() {
    return this.achievementsService.getSpecificAchievements('international');
  }

  @Get('continental')
  getContinentalAchievements() {
    return this.achievementsService.getSpecificAchievements('continental');
  }

  @Get('national')
  getNationalAchievements() {
    return this.achievementsService.getSpecificAchievements('national');
  }

  @Get('state')
  getStateAchievements() {
    return this.achievementsService.getSpecificAchievements('state');
  }
}
