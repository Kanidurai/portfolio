import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  /** GET /api/portfolio — full portfolio data */
  @Get()
  getAll() {
    return {
      success: true,
      data: this.portfolioService.getPortfolioData(),
    };
  }

  /** GET /api/portfolio/about */
  @Get('about')
  getAbout() {
    return { success: true, data: this.portfolioService.getAbout() };
  }

  /** GET /api/portfolio/skills */
  @Get('skills')
  getSkills() {
    return { success: true, data: this.portfolioService.getSkills() };
  }

  /** GET /api/portfolio/experience */
  @Get('experience')
  getExperience() {
    return { success: true, data: this.portfolioService.getExperience() };
  }

  /** GET /api/portfolio/projects */
  @Get('projects')
  getProjects() {
    return { success: true, data: this.portfolioService.getProjects() };
  }

  /** GET /api/portfolio/projects/:id */
  @Get('projects/:id')
  getProjectById(@Param('id') id: string) {
    const projects = this.portfolioService.getProjects();
    const project = projects.find((p) => p.id === parseInt(id));
    if (!project) throw new NotFoundException(`Project with id ${id} not found`);
    return { success: true, data: project };
  }

  /** GET /api/portfolio/education */
  @Get('education')
  getEducation() {
    return { success: true, data: this.portfolioService.getEducation() };
  }

  /** GET /api/portfolio/certifications */
  @Get('certifications')
  getCertifications() {
    return { success: true, data: this.portfolioService.getCertifications() };
  }
}
