import { IN8nChatApiCallback } from '../interfaces/i-chat-api-callback';
import { IN8nChatResponse } from '../interfaces/i-chat-response';

export class N8nChatResponseEntity implements IN8nChatResponse {
  // #region Properties (12)

  public responseId: string = '';
  public originalMessageId: string = '';
  public sessionId: string = '';
  public userId: string = '';
  public message: string = '';
  public messageType: 'text' | 'image' | 'audio' | 'video' | 'document' | 'template' | 'quick_reply' | 'button' = 'text';
  public timestamp: Date = new Date();
  public platform: string = '';
  public responseData?: {
    buttons?: Array<{
      id: string;
      text: string;
      type: 'reply' | 'url' | 'call';
      payload?: string;
      url?: string;
      phoneNumber?: string;
      apiCallback?: IN8nChatApiCallback;
    }>;
    quickReplies?: Array<{
      id: string;
      text: string;
      payload?: string;
      apiCallback?: IN8nChatApiCallback;
    }>;
    template?: {
      type: string;
      elements: any[];
    };
    media?: {
      url: string;
      type: string;
      caption?: string;
      filename?: string;
    };
  } = undefined;
  public delivery: {
    priority: 'low' | 'normal' | 'high';
    delay?: number;
    retryAttempts?: number;
  } = {
    priority: 'normal',
  };
  public metadata?: {
    automated: boolean;
    botName?: string;
    workflowId?: string;
    nodeId?: string;
  } = undefined;
  public status: 'queued' | 'sent' | 'delivered' | 'read' | 'failed' = 'queued';

  // #endregion Properties (12)

  // #region Constructors (1)

  constructor(data?: Partial<N8nChatResponseEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)

  /**
   * Adiciona um botão com callback de API opcional
   */
  public addButton(button: {
    id: string;
    text: string;
    type: 'reply' | 'url' | 'call';
    payload?: string;
    url?: string;
    phoneNumber?: string;
    apiCallback?: IN8nChatApiCallback;
  }): void {
    if (!this.responseData) {
      this.responseData = {};
    }
    if (!this.responseData.buttons) {
      this.responseData.buttons = [];
    }
    this.responseData.buttons.push(button);
    this.messageType = 'button';
  }

  /**
   * Adiciona uma resposta rápida com callback de API opcional
   */
  public addQuickReply(quickReply: { id: string; text: string; payload?: string; apiCallback?: IN8nChatApiCallback }): void {
    if (!this.responseData) {
      this.responseData = {};
    }
    if (!this.responseData.quickReplies) {
      this.responseData.quickReplies = [];
    }
    this.responseData.quickReplies.push(quickReply);
    this.messageType = 'quick_reply';
  }

  /**
   * Valida se a resposta está pronta para ser enviada
   */
  public isValid(): boolean {
    const hasBasicData = !!(this.responseId && this.userId && this.sessionId);
    const hasContent = !!(this.message || this.responseData);
    return hasBasicData && hasContent;
  }
}
