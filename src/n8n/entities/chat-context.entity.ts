import { IN8nChatContext } from '../interfaces/i-chat-context';

export class N8nChatContextEntity implements IN8nChatContext {
  // #region Properties (10)

  public contextId: string = '';
  public sessionId: string = '';
  public userId: string = '';
  public platform: string = '';
  public messageHistory: Array<{
    messageId: string;
    message: string;
    messageType: string;
    timestamp: Date;
    sender: 'user' | 'bot';
    metadata?: any;
  }> = [];
  public conversationState: {
    currentFlow?: string;
    currentStep?: string;
    isActive: boolean;
    lastActivity: Date;
    variables?: Record<string, any>;
  } = {
    isActive: false,
    lastActivity: new Date(),
  };
  public userData: {
    name?: string;
    email?: string;
    phone?: string;
    preferences?: Record<string, any>;
    customFields?: Record<string, any>;
  } = {};
  public sessionConfig: {
    timeout?: number;
    maxMessages?: number;
    language?: string;
    timezone?: string;
  } = {
    timeout: 30,
    maxMessages: 100,
    language: 'pt-BR',
    timezone: 'America/Sao_Paulo',
  };
  public metrics?: {
    totalMessages: number;
    userMessages: number;
    botMessages: number;
    sessionDuration?: number;
    firstMessageAt: Date;
    lastMessageAt: Date;
  } = undefined;
  public timestamps: {
    createdAt: Date;
    updatedAt: Date;
    expiresAt?: Date;
  } = {
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<N8nChatContextEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
