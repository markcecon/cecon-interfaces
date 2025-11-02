# Cecon Interfaces

[![npm version](https://badge.fury.io/js/cecon-interfaces.svg)](https://badge.fury.io/js/cecon-interfaces)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Biblioteca TypeScript contendo interfaces e tipos para os projetos do ecossistema Cecon. Este pacote fornece definições de tipos reutilizáveis para garantir consistência e type safety em todos os serviços e aplicações.

## 📦 Instalação

```bash
npm install cecon-interfaces
```

ou

```bash
yarn add cecon-interfaces
```

## 🚀 Uso Básico

```typescript
import { 
  ICompany, 
  IUser, 
  IOrder, 
  INotification 
} from 'cecon-interfaces';

// Exemplo de uso das interfaces
const company: ICompany = {
  id: '123',
  name: 'Minha Empresa',
  // ... outras propriedades
};

const user: IUser = {
  id: '456',
  email: 'usuario@exemplo.com',
  // ... outras propriedades
};
```

## 📁 Estrutura do Projeto

Este pacote contém interfaces organizadas por domínios:

### 🏢 **Negócio e Gestão**
- `company` - Interfaces para empresas e configurações corporativas
- `customer` - Definições para clientes e membros
- `member` - Gestão de membros e acessos
- `plan` - Planos e assinaturas
- `subscription-*` - Diferentes tipos de assinaturas

### 💰 **Pagamentos e Financeiro**
- `billing` - Faturamento e cobrança
- `invoice` - Faturas e documentos fiscais
- `transaction` - Transações financeiras
- `mercado-pago` - Integração Mercado Pago
- `iugu` - Integração Iugu
- `payio` - Integração PayIO
- `firebank` - Integração Firebank
- `binance` - Integração Binance

### 📦 **Pedidos e Produtos**
- `order` - Pedidos e gestão de vendas
- `product-*` - Produtos globais, por empresa e containers
- `container` - Containers de produtos
- `requested-items` - Itens solicitados

### 🛍️ **Integrações de Marketplace**
- `ifood` - Integração iFood
- `meli` - Integração Mercado Livre
- `desenfila-*` - Integração Desenfila

### 📱 **Comunicação e Notificações**
- `notification` - Sistema de notificações
- `wa-server` - Servidor WhatsApp
- `evolution` - Integração Evolution API
- `fcm-token-message` - Firebase Cloud Messaging

### 🔧 **Infraestrutura e Utilitários**
- `app` - Configurações de aplicação
- `device` - Dispositivos e instalações
- `storage-files` - Arquivos e armazenamento
- `monitor` - Monitoramento e logs
- `pubsub` - Sistema de mensageria

### 🔐 **Autenticação e Segurança**
- `token` - Tokens de acesso
- `jwt-token` - JSON Web Tokens
- `verifier-token` - Verificação de tokens
- `member-access` - Controle de acesso

### 🌐 **APIs Externas**
- `viacep` - Integração ViaCEP
- `bluesoft` - Integração Bluesoft
- `n8n` - Automação N8N
- `mobyo` - Integração Mobyo

## 💻 Desenvolvimento

### Pré-requisitos

- Node.js >= 16
- npm ou yarn

### Scripts Disponíveis

```bash
# Compilar o pacote
npm run packagr

# Build TypeScript
npm run build

# Deploy completo (packagr + build + publish)
npm run deploy

# Limpar arquivos de distribuição
npm run clean-dist
```

### 🔄 Workflow de Publicação

1. **Atualizar versão**: Sempre altere a versão no `package.json` antes de publicar
   ```bash
   # Exemplo: de "2.0.1" para "2.0.2"
   ```

2. **Compilar e publicar**:
   ```bash
   npm run deploy
   ```
   
   Ou executar os comandos individualmente:
   ```bash
   npm run packagr
   npm run build
   npm publish
   ```

3. **Commit e push**: Não esqueça de fazer commit das alterações
   ```bash
   git add .
   git commit -m "chore: bump version to x.x.x"
   git push origin develop
   ```

## 📖 Exemplos de Uso

### Trabalhando com Empresas

```typescript
import { ICompany, ICompanyContact } from 'cecon-interfaces';

const empresa: ICompany = {
  id: 'comp_123',
  name: 'Tech Solutions LTDA',
  document: '12.345.678/0001-90',
  // ... outras propriedades
};

const contato: ICompanyContact = {
  id: 'contact_456',
  companyId: 'comp_123',
  email: 'contato@techsolutions.com',
  phone: '+55 11 99999-9999'
};
```

### Gerenciando Pedidos

```typescript
import { IOrder, OrderStatus } from 'cecon-interfaces';

const pedido: IOrder = {
  id: 'order_789',
  customerId: 'customer_123',
  status: OrderStatus.PENDING,
  items: [
    {
      productId: 'prod_456',
      quantity: 2,
      price: 29.90
    }
  ],
  total: 59.80,
  createdAt: new Date()
};
```

### Integrações de Pagamento

```typescript
import { IMercadoPagoPayment, IIuguInvoice } from 'cecon-interfaces';

// Mercado Pago
const pagamentoMP: IMercadoPagoPayment = {
  id: 'mp_payment_123',
  status: 'approved',
  amount: 100.00,
  // ... outras propriedades
};

// Iugu
const faturaIugu: IIuguInvoice = {
  id: 'iugu_inv_456',
  status: 'paid',
  total_cents: 10000,
  // ... outras propriedades
};
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-interface`)
3. Commit suas mudanças (`git commit -am 'Add: nova interface para XYZ'`)
4. Push para a branch (`git push origin feature/nova-interface`)
5. Abra um Pull Request

### Convenções

- Use interfaces com prefixo `I` (ex: `IUser`, `ICompany`)
- Organize por domínios em pastas separadas
- Mantenha consistência com os tipos existentes
- Documente interfaces complexas com JSDoc

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Mark Cecon**

- GitHub: [@markcecon](https://github.com/markcecon)
- Email: [contato através do GitHub](https://github.com/markcecon/cecon-interfaces/issues)

## 🐛 Reportar Bugs

Encontrou um bug? [Abra uma issue](https://github.com/markcecon/cecon-interfaces/issues) no GitHub.

## 📈 Changelog

### v2.0.1
- Versão atual com todas as interfaces principais
- Suporte completo para TypeScript
- Integração com principais APIs do ecossistema

---

⭐ **Se este projeto te ajudou, considere dar uma estrela no GitHub!**