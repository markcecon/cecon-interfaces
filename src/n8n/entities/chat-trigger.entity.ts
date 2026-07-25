import { IN8nChatTrigger } from '../interfaces/i-chat-trigger';

export class N8nChatTriggerEntity implements IN8nChatTrigger {
  // #region Properties (15)

  public messageId: string = '';
  public sessionId: string = '';
  public userId: string = '';
  public message: string = '';
  public messageType: 'text' | 'image' | 'audio' | 'video' | 'document' | 'location' | 'contact' | 'sticker' | 'emoji' = 'text';
  public timestamp: Date = new Date();
  public platform: string = '';
  public user: {
    id: string;
    name: string;
    phone?: string;
    email?: string;
    avatar?: string;
    language?: string;
  } = {
    id: '',
    name: '',
  };
  public conversation: {
    id: string;
    title?: string;
    isGroup: boolean;
    participantCount?: number;
  } = {
    id: '',
    isGroup: false,
  };
  public metadata: {
    isForwarded?: boolean;
    isReply?: boolean;
    replyToMessageId?: string;
    hasMedia?: boolean;
    mediaUrl?: string;
    mediaType?: string;
    location?: {
      latitude: number;
      longitude: number;
      address?: string;
    };
  } = {};
  public webhook: {
    id: string;
    url: string;
    headers?: Record<string, string>;
  } = {
    id: '',
    url: '',
  };
  public rawData?: any = null;
  public tags?: string[] = [];
  public customData?: Record<string, any> = {};
  public status: 'pending' | 'processing' | 'completed' | 'error' = 'pending';

  // #endregion Properties (15)

  // #region Constructors (1)

  constructor(data?: Partial<N8nChatTriggerEntity>) {
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
