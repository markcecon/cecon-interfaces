import { IN8nChatApiCallback } from '../interfaces/i-chat-api-callback';

export class N8nChatApiCallbackEntity implements IN8nChatApiCallback {
  // #region Properties (12)

  // Se deve executar chamada de API
  public callApi: boolean;
  // ID único do callback para rastreamento
  public callbackId: string;
  // URL da API a ser chamada
  public apiUrl: string;
  // Método HTTP
  public method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  // Headers de autorização e outros
  public headers: {
    authorization?: string; // Bearer token, API key, etc.
    contentType?: string;
    userAgent?: string;
    customHeaders?: Record<string, string>;
  };
  // Body/payload da requisição (DTO)
  public payload?: {
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
  public requestConfig?: {
    timeout?: number; // timeout em segundos
    retryAttempts?: number;
    retryDelay?: number; // delay entre tentativas em ms
    validateSSL?: boolean;
  };
  // Configurações de resposta
  public responseHandling?: {
    // Se deve enviar resposta automática baseada no resultado da API
    autoResponse: boolean;
    // Mensagens baseadas no status da resposta
    successMessage?: string;
    errorMessage?: string;
    // Template de resposta dinâmica usando dados da API
    responseTemplate?: string; // Ex: "Agendamento criado para {date} às {time}"
  };
  // Dados para logging e auditoria
  public metadata?: {
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
  public conditions?: {
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
  public webhook?: {
    url: string;
    method: 'POST' | 'PUT';
    notifyOnSuccess?: boolean;
    notifyOnError?: boolean;
  };

  // #endregion Properties (12)

  constructor(data: Partial<IN8nChatApiCallback> = {}) {
    this.callApi = data.callApi ?? false;
    this.callbackId = data.callbackId ?? '';
    this.apiUrl = data.apiUrl ?? '';
    this.method = data.method ?? 'POST';
    this.headers = data.headers ?? {};
    this.payload = data.payload;
    this.requestConfig = data.requestConfig;
    this.responseHandling = data.responseHandling;
    this.metadata = data.metadata;
    this.conditions = data.conditions;
    this.webhook = data.webhook;
  }

  /**
   * Valida se o callback está configurado corretamente para execução
   */
  public isValid(): boolean {
    if (!this.callApi) return true; // Se não vai chamar API, é válido

    return !!(this.callbackId && this.apiUrl && this.method);
  }

  /**
   * Valida se todas as condições são atendidas para executar a API
   */
  public canExecute(formData?: Record<string, any>): boolean {
    if (!this.callApi || !this.isValid()) return false;

    // Verifica campos obrigatórios
    if (this.conditions?.requireAllFields && this.metadata?.requiredFields) {
      for (const field of this.metadata.requiredFields) {
        if (!formData?.[field]) return false;
      }
    }

    // Valida validações customizadas
    if (this.conditions?.customValidations && formData) {
      for (const validation of this.conditions.customValidations) {
        const value = formData[validation.field];

        switch (validation.rule) {
          case 'required':
            if (!value) return false;
            break;
          case 'email':
            if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return false;
            break;
          case 'phone':
            if (value && !/^\+?[\d\s\-\(\)]+$/.test(value)) return false;
            break;
          case 'date':
            if (value && isNaN(Date.parse(value))) return false;
            break;
          case 'regex':
            if (value && validation.value && !new RegExp(validation.value).test(value)) return false;
            break;
        }
      }
    }

    return true;
  }
}
