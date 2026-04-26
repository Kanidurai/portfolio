import { Injectable } from '@nestjs/common';
import { CreateContactDto } from '../../dto/create-contact.dto';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'read';
}

@Injectable()
export class ContactService {
  // In-memory message store (replace with DB in production)
  private messages: ContactMessage[] = [];

  /**
   * Save a contact message and return confirmation
   */
  async saveMessage(dto: CreateContactDto): Promise<{ id: string; message: string }> {
    const newMessage: ContactMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: dto.name,
      email: dto.email,
      subject: dto.subject,
      message: dto.message,
      createdAt: new Date().toISOString(),
      status: 'unread',
    };

    this.messages.push(newMessage);

    console.log(`📨 New contact message from: ${dto.name} <${dto.email}>`);
    console.log(`   Subject: ${dto.subject}`);

    return {
      id: newMessage.id,
      message: `Thank you, ${dto.name}! Your message has been received. I'll get back to you soon.`,
    };
  }

  /** Get all stored messages (admin use) */
  getAllMessages(): ContactMessage[] {
    return this.messages;
  }

  /** Get message count */
  getMessageCount(): number {
    return this.messages.length;
  }
}
