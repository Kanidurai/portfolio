import { Controller, Post, Get, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from '../../dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  /**
   * POST /api/contact — Submit a contact message
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async sendMessage(@Body() createContactDto: CreateContactDto) {
    const result = await this.contactService.saveMessage(createContactDto);
    return {
      success: true,
      data: result,
    };
  }

  /**
   * GET /api/contact/count — Get message count (for testing)
   */
  @Get('count')
  getCount() {
    return {
      success: true,
      data: { count: this.contactService.getMessageCount() },
    };
  }
}
