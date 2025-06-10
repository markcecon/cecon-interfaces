export interface IN8nChatContext {
  // #region Properties (10)

  // ID único do contexto
  contextId: string;
  // ID da sessão/conversa
  sessionId: string;
  // ID do usuário
  userId: string;
  // Plataforma/canal
  platform: string;
  // Histórico de mensagens (últimas N mensagens)
  messageHistory: Array<{
    messageId: string;
    message: string;
    messageType: string;
    timestamp: Date;
    sender: 'user' | 'bot';
    metadata?: any;
  }>;
  // Estado atual da conversa
  conversationState: {
    currentFlow?: string;
    currentStep?: string;
    isActive: boolean;
    lastActivity: Date;
    variables?: Record<string, any>;
  };
  // Dados do usuário coletados durante a conversa
  userData: {
    name?: string;
    email?: string;
    phone?: string;
    preferences?: Record<string, any>;
    customFields?: Record<string, any>;
  };
  // Configurações da sessão
  sessionConfig: {
    timeout?: number; // timeout em minutos
    maxMessages?: number;
    language?: string;
    timezone?: string;
  };
  // Métricas da conversa
  metrics?: {
    totalMessages: number;
    userMessages: number;
    botMessages: number;
    sessionDuration?: number; // em segundos
    firstMessageAt: Date;
    lastMessageAt: Date;
  };
  // Data de criação e última atualização
  timestamps: {
    createdAt: Date;
    updatedAt: Date;
    expiresAt?: Date;
  };

  // #endregion Properties (10)
}
