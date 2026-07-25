export interface IN8nChatApiCallback {
  // #region Properties (12)

  // Se deve executar chamada de API
  callApi: boolean;
  // ID único do callback para rastreamento
  callbackId: string;
  // URL da API a ser chamada
  apiUrl: string;
  // Método HTTP
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  // Headers de autorização e outros
  headers: {
    authorization?: string; // Bearer token, API key, etc.
    contentType?: string;
    userAgent?: string;
    customHeaders?: Record<string, string>;
  };
  // Body/payload da requisição (DTO)
  payload?: {
    // Dados do usuário da conversa
    userData?: {
      userId: string;
      name?: string;
      phone?: string;
      email?: string;
    };
    // Dados coletados durante a conversa
    formData?: Record<string, any>;
    // Dados específicos do contexto
    contextData?: {
      sessionId: string;
      messageId: string;
      platform: string;
      timestamp: Date;
    };
    // DTO customizado específico da ação
    customPayload?: any;
  };
  // Configurações da requisição
  requestConfig?: {
    timeout?: number; // timeout em segundos
    retryAttempts?: number;
    retryDelay?: number; // delay entre tentativas em ms
    validateSSL?: boolean;
  };
  // Configurações de resposta
  responseHandling?: {
    // Se deve enviar resposta automática baseada no resultado da API
    autoResponse: boolean;
    // Mensagens baseadas no status da resposta
    successMessage?: string;
    errorMessage?: string;
    // Template de resposta dinâmica usando dados da API
    responseTemplate?: string; // Ex: "Agendamento criado para {date} às {time}"
  };
  // Dados para logging e auditoria
  metadata?: {
    action: string; // Ex: "create_schedule", "register_user"
    description?: string;
    requiredFields?: string[]; // Campos obrigatórios para a chamada
    workflow?: {
      workflowId: string;
      nodeId: string;
      stepName: string;
    };
  };
  // Condições para executar a API
  conditions?: {
    // Executar só se todos os campos obrigatórios estiverem preenchidos
    requireAllFields?: boolean;
    // Validações customizadas
    customValidations?: Array<{
      field: string;
      rule: 'required' | 'email' | 'phone' | 'date' | 'regex';
      value?: string; // Para regex
      message?: string; // Mensagem de erro
    }>;
  };
  // Webhook para notificar resultado
  webhook?: {
    url: string;
    method: 'POST' | 'PUT';
    notifyOnSuccess?: boolean;
    notifyOnError?: boolean;
  };

  // #endregion Properties (12)
}
