# Fluxo de Recarga - Organograma

## 📱 Frontend (App)

### 1. Botão de Recarga
- **Localização**: Interface do usuário
- **Ação**: Usuário solicita recarga de créditos
- **Chamada**: API interna para gerar PIX

---

## 🔧 Backend (API Interna)

### 2. Endpoint de Geração de PIX
- **Método**: POST `/api/recarga/gerar-pix`
- **Parâmetros**:
  - `amount`: Valor da recarga
  - `userId`: ID do usuário
- **Ação**: Chama API Natipay

### 3. Chamada para Natipay
- **Endpoint**: POST Natipay `/orders`
- **Body**:
```json
{
  "displayId": "${TENANT_ID}_POSID_PAYIO_GESTOR",
  "from": "PAYIO_GESTOR",
  "items": [],
  "orderAmount": ":AMOUNT",
  "reference": ":REFERENCE",
  "saleChannel": "PAYIOGESTOR",
  "callbacks": ["URL_CALLBACK"]
}