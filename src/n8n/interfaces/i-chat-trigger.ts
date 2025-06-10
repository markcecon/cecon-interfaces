export interface IN8nChatTrigger {
  // #region Properties (15)

  // ID único da mensagem
  messageId: string;
  // ID da sessão/conversa
  sessionId: string;
  // ID do usuário que enviou a mensagem
  userId: string;
  // Conteúdo da mensagem
  message: string;
  // Tipo da mensagem (text, image, audio, video, document, etc.)
  messageType: 'text' | 'image' | 'audio' | 'video' | 'document' | 'location' | 'contact' | 'sticker' | 'emoji';
  // Timestamp da mensagem
  timestamp: Date;
  // Plataforma/canal de origem (whatsapp, telegram, discord, etc.)
  platform: string;
  // Dados do usuário
  user: {
    id: string;
    name: string;
    phone?: string;
    email?: string;
    avatar?: string;
    language?: string;
  };
  // Contexto da conversa
  conversation: {
    id: string;
    title?: string;
    isGroup: boolean;
    participantCount?: number;
  };
  // Metadados da mensagem
  metadata: {
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
  };
  // Dados do webhook/trigger
  webhook: {
    id: string;
    url: string;
    headers?: Record<string, string>;
  };
  // Dados brutos da requisição original
  rawData?: any;
  // Tags/categorias para organização
  tags?: string[];
  // Dados customizados adicionais
  customData?: Record<string, any>;
  // Status de processamento
  status: 'pending' | 'processing' | 'completed' | 'error';

  // #endregion Properties (15)
}
