import { Module } from '@nestjs/common';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [PortfolioModule, ContactModule],
})
export class AppModule {}
