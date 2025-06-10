import { IN8nChatApiCallback } from './i-chat-api-callback';

export interface IN8nChatResponse {
  // #region Properties (12)

  // ID da resposta
  responseId: string;
  // ID da mensagem original que está sendo respondida
  originalMessageId: string;
  // ID da sessão/conversa
  sessionId: string;
  // ID do usuário destinatário
  userId: string;
  // Conteúdo da resposta
  message: string;
  // Tipo da resposta
  messageType: 'text' | 'image' | 'audio' | 'video' | 'document' | 'template' | 'quick_reply' | 'button';
  // Timestamp da resposta
  timestamp: Date;
  // Plataforma/canal de destino
  platform: string;
  // Dados adicionais da resposta
  responseData?: {
    // Para mensagens com botões
    buttons?: Array<{
      id: string;
      text: string;
      type: 'reply' | 'url' | 'call';
      payload?: string;
      url?: string;
      phoneNumber?: string;
      // Callback de API para executar quando botão for clicado
      apiCallback?: IN8nChatApiCallback;
    }>;
    // Para respostas rápidas
    quickReplies?: Array<{
      id: string;
      text: string;
      payload?: string;
      // Callback de API para executar quando quick reply for selecionado
      apiCallback?: IN8nChatApiCallback;
    }>;
    // Para templates estruturados
    template?: {
      type: string;
      elements: any[];
    };
    // Para mídia
    media?: {
      url: string;
      type: string;
      caption?: string;
      filename?: string;
    };
  };
  // Configurações de entrega
  delivery: {
    priority: 'low' | 'normal' | 'high';
    delay?: number; // delay em segundos
    retryAttempts?: number;
  };
  // Metadados da resposta
  metadata?: {
    automated: boolean;
    botName?: string;
    workflowId?: string;
    nodeId?: string;
  };
  // Status da resposta
  status: 'queued' | 'sent' | 'delivered' | 'read' | 'failed';

  // #endregion Properties (12)
}
