// PREENCHER: dados de contato reais da marca.
export const WHATSAPP_NUMBER = ""; // ex.: "5511999999999" (apenas números)
export const INSTAGRAM_URL = "#"; // ex.: "https://instagram.com/seuperfil"

export const whatsappLink = (msg = "Olá! Quero criar meu convite digital.") =>
  WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
    : "#contato";
