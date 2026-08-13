import React, { useState } from 'react';
import { QuoteItem } from '../types';
import { CITIES_COVERAGE } from '../data/locations';
import { X, Trash2, ShoppingBag, Send, MapPin, Truck, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  quoteItems: QuoteItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onUpdatePeriod: (id: string, period: 'daily' | 'weekly' | 'biweekly' | 'monthly') => void;
  onRemoveItem: (id: string) => void;
  onClearQuote: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  quoteItems,
  onUpdateQuantity,
  onUpdatePeriod,
  onRemoveItem,
  onClearQuote
}) => {
  if (!isOpen) return null;

  const [selectedCityId, setSelectedCityId] = useState<string>('braganca-paulista');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);

  const selectedCity = CITIES_COVERAGE.find(c => c.id === selectedCityId) || CITIES_COVERAGE[0];

  const getItemTotal = (item: QuoteItem) => {
    let rate = item.equipment.dailyRate;
    if (item.period === 'weekly') rate = item.equipment.weeklyRate;
    else if (item.period === 'biweekly') rate = Math.round(item.equipment.weeklyRate * 1.85);
    else if (item.period === 'monthly') rate = item.equipment.monthlyRate;

    return rate * item.quantity;
  };

  const subtotal = quoteItems.reduce((sum, item) => sum + getItemTotal(item), 0);
  const total = subtotal + selectedCity.deliveryFee;

  const handleSendWhatsApp = () => {
    if (quoteItems.length === 0) return;

    let itemsText = quoteItems.map((item, index) => {
      const pText = 
        item.period === 'daily' ? 'Diária (1 dia)' :
        item.period === 'weekly' ? 'Semanal (7 dias)' :
        item.period === 'biweekly' ? 'Quinzenal (15 dias)' : 'Mensal (30 dias)';
      
      const itemPrice = getItemTotal(item);
      return `${index + 1}. *${item.equipment.name}*
   • Quantidade: ${item.quantity} un.
   • Período: ${pText}
   • Subtotal: R$ ${itemPrice.toFixed(2).replace('.', ',')}`;
    }).join('\n\n');

    const message = `🚧 *SOLICITAÇÃO DE ORÇAMENTO - BRAGANÇA LOCADORA* 🚧

*Dados do Cliente:*
• Nome: ${customerName || 'Não informado'}
• Telefone: ${customerPhone || 'Não informado'}
• Cidade / Bairro: ${selectedCity.name} - ${neighborhood || 'Não informado'}

*Itens Selecionados:*
${itemsText}

----------------------------------
*Subtotal Equipamentos:* R$ ${subtotal.toFixed(2).replace('.', ',')}
*Frete Estimado (${selectedCity.name}):* ${selectedCity.deliveryFee === 0 ? 'GRÁTIS' : `R$ ${selectedCity.deliveryFee.toFixed(2).replace('.', ',')}`}
*VALOR TOTAL ESTIMADO:* R$ ${total.toFixed(2).replace('.', ',')}

*Tempo de Entrega Estimado:* ${selectedCity.estimatedDeliveryTime}

Por favor, confirmem a disponibilidade dos equipamentos e prazo de entrega!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5511965939300?text=${encoded}`, '_blank');
    setOrderSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Box */}
      <div className="relative z-10 w-full max-w-md bg-[#fff8f6] shadow-2xl h-full flex flex-col justify-between overflow-y-auto border-l border-[#e2bfb0]">
        {/* Drawer Header */}
        <div className="p-4 bg-[#ffeae1] border-b border-[#e2bfb0] flex justify-between items-center sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#ff6a00]" />
            <h2 className="font-montserrat font-extrabold text-base text-[#261812] uppercase">
              Meu Orçamento ({quoteItems.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#5a4136] hover:bg-[#fee3d8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 space-y-4 overflow-y-auto flex-1">
          {quoteItems.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 bg-[#fee3d8] text-[#ff6a00] rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-bold text-base text-[#261812]">
                Seu orçamento está vazio
              </h3>
              <p className="font-inter text-xs text-[#5a4136] max-w-xs mx-auto">
                Navegue pelo catálogo e adicione os equipamentos que precisa para sua obra.
              </p>
              <button
                onClick={onClose}
                className="bg-[#ff6a00] hover:bg-[#a14000] text-white font-montserrat font-bold py-2.5 px-5 rounded-xl text-xs uppercase shadow-md transition-all"
              >
                Ver Equipamentos
              </button>
            </div>
          ) : (
            <>
              {/* Selected Items List */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-montserrat font-bold text-xs uppercase text-[#5a4136]">
                    Equipamentos no Carrinho
                  </span>
                  <button
                    onClick={onClearQuote}
                    className="text-[11px] font-inter text-[#ba1a1a] hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" /> Limpar tudo
                  </button>
                </div>

                {quoteItems.map((item) => {
                  const itemTotal = getItemTotal(item);
                  return (
                    <div
                      key={item.equipment.id}
                      className="bg-white p-3 rounded-xl border border-[#e2bfb0] shadow-xs space-y-2 relative"
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={item.equipment.imageUrl}
                          alt={item.equipment.name}
                          className="w-14 h-14 object-contain bg-[#fff8f6] p-1 rounded-lg border border-[#fee3d8]"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-montserrat font-extrabold text-xs text-[#261812] uppercase truncate">
                            {item.equipment.name}
                          </h4>
                          <span className="font-montserrat font-bold text-sm text-[#ff6a00]">
                            R$ {itemTotal.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.equipment.id)}
                          className="text-[#8e7164] hover:text-[#ba1a1a] p-1"
                          title="Remover item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Period & Quantity Controls */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#fee3d8] text-xs">
                        {/* Period Selector */}
                        <select
                          value={item.period}
                          onChange={(e) => onUpdatePeriod(item.equipment.id, e.target.value as any)}
                          className="bg-[#fff8f6] border border-[#e2bfb0] rounded-lg px-2 py-1 text-xs font-inter text-[#261812] focus:outline-none focus:border-[#ff6a00]"
                        >
                          <option value="daily">Diária (1 dia)</option>
                          <option value="weekly">Semanal (7 dias)</option>
                          <option value="biweekly">Quinzenal (15 dias)</option>
                          <option value="monthly">Mensal (30 dias)</option>
                        </select>

                        {/* Quantity Counter */}
                        <div className="flex items-center border border-[#e2bfb0] rounded-lg bg-[#fff8f6]">
                          <button
                            onClick={() => onUpdateQuantity(item.equipment.id, -1)}
                            className="px-2 py-0.5 text-xs font-bold text-[#5a4136] hover:bg-[#fee3d8]"
                          >
                            -
                          </button>
                          <span className="px-2 font-montserrat font-bold text-xs text-[#261812]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.equipment.id, 1)}
                            className="px-2 py-0.5 text-xs font-bold text-[#5a4136] hover:bg-[#fee3d8]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Delivery City Selector */}
              <div className="bg-white p-3 rounded-xl border border-[#e2bfb0] space-y-2">
                <label className="block font-montserrat font-bold text-xs text-[#261812] uppercase flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#ff6a00]" />
                  Cidade de Entrega (Frete)
                </label>
                <select
                  value={selectedCityId}
                  onChange={(e) => setSelectedCityId(e.target.value)}
                  className="w-full bg-[#fff8f6] border border-[#e2bfb0] rounded-lg p-2 text-xs font-inter text-[#261812] focus:outline-none focus:border-[#ff6a00]"
                >
                  {CITIES_COVERAGE.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name} - {city.state} {city.deliveryFee === 0 ? '(Frete Grátis)' : `(+R$ ${city.deliveryFee})`}
                    </option>
                  ))}
                </select>

                <div className="flex items-center gap-1 text-[11px] text-[#006d2f] font-inter">
                  <Truck className="w-3.5 h-3.5" />
                  <span>{selectedCity.estimatedDeliveryTime}</span>
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="bg-white p-3 rounded-xl border border-[#e2bfb0] space-y-2">
                <span className="block font-montserrat font-bold text-xs text-[#261812] uppercase">
                  Seus Dados para o Orçamento
                </span>
                <input
                  type="text"
                  placeholder="Seu Nome / Nome da Empresa"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#fff8f6] border border-[#e2bfb0] rounded-lg p-2 text-xs font-inter focus:outline-none focus:border-[#ff6a00]"
                />
                <input
                  type="text"
                  placeholder="Seu Telefone / WhatsApp"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#fff8f6] border border-[#e2bfb0] rounded-lg p-2 text-xs font-inter focus:outline-none focus:border-[#ff6a00]"
                />
                <input
                  type="text"
                  placeholder="Bairro ou Endereço da Obra"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full bg-[#fff8f6] border border-[#e2bfb0] rounded-lg p-2 text-xs font-inter focus:outline-none focus:border-[#ff6a00]"
                />
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer with Totals and WhatsApp CTA */}
        {quoteItems.length > 0 && (
          <div className="p-4 bg-white border-t border-[#e2bfb0] space-y-3 sticky bottom-0 z-20">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-[#5a4136]">
                <span>Subtotal equipamentos:</span>
                <span className="font-montserrat font-bold text-[#261812]">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between text-[#5a4136]">
                <span>Frete ({selectedCity.name}):</span>
                <span className="font-montserrat font-bold text-[#006d2f]">
                  {selectedCity.deliveryFee === 0 ? 'GRÁTIS' : `R$ ${selectedCity.deliveryFee.toFixed(2).replace('.', ',')}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-extrabold pt-2 border-t border-[#fee3d8]">
                <span className="font-montserrat uppercase text-[#261812]">Total Estimado:</span>
                <span className="font-montserrat text-lg text-[#ff6a00]">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <button
              onClick={handleSendWhatsApp}
              className="w-full bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-3.5 px-4 rounded-xl uppercase text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              Enviar Orçamento via WhatsApp
            </button>

            {orderSubmitted && (
              <p className="text-[11px] text-[#006d2f] text-center font-bold flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Orçamento enviado! Aguarde nosso contato.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
