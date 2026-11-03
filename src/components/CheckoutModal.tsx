import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck, Check, Settings2 } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: 'essential' | 'complete';
  currentUrl: string;
  onSaveUrl: (plan: 'essential' | 'complete', url: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  plan,
  currentUrl,
  onSaveUrl,
}) => {
  const [inputUrl, setInputUrl] = useState(currentUrl);
  const [showConfig, setShowConfig] = useState(!currentUrl);

  if (!isOpen) return null;

  const isComplete = plan === 'complete';
  const planTitle = isComplete ? 'Plano Completo' : 'Plano Básico';
  const planPrice = isComplete ? 'R$ 27,00' : 'R$ 10,00';

  const handleProceed = () => {
    if (inputUrl.trim()) {
      onSaveUrl(plan, inputUrl.trim());
      window.location.href = inputUrl.trim();
    }
  };

  const handleSaveOnly = () => {
    if (inputUrl.trim()) {
      onSaveUrl(plan, inputUrl.trim());
      setShowConfig(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 text-[#2B241F] shadow-xl border border-[#E5D8C7] relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF5EA] hover:bg-[#F1E7D7] flex items-center justify-center text-[#4D4036] cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF2EB] text-[#214735] border border-[#BBD5C2] text-[11px] font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Checkout Seguro</span>
          </div>
          <h3 className="text-xl font-bold text-[#2B241F]">
            {planTitle} — {planPrice}
          </h3>
          <p className="text-xs text-[#4D4036] font-normal mt-1">
            Pagamento único com acesso vitalício imediato.
          </p>
        </div>

        {/* Configuration or Proceed State */}
        {currentUrl && !showConfig ? (
          <div className="space-y-4">
            <div className="bg-[#FAF5EA] p-4 rounded-xl border border-[#E5D8C7] text-left">
              <div className="flex items-center justify-between text-xs text-[#4D4036] font-medium mb-1">
                <span>Link configurado:</span>
                <button
                  onClick={() => setShowConfig(true)}
                  className="text-[#B54F2D] hover:underline font-bold text-[11px] flex items-center gap-1"
                >
                  <Settings2 className="w-3 h-3" />
                  Editar link
                </button>
              </div>
              <p className="text-xs font-mono text-[#2B241F] truncate">
                {currentUrl}
              </p>
            </div>

            <button
              onClick={() => (window.location.href = currentUrl)}
              className="w-full py-4 px-6 bg-[#2A9D68] hover:bg-[#228657] text-white font-extrabold text-sm rounded-full uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ir para o Pagamento</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-[#FAF5EA] p-4 rounded-xl border border-[#E5D8C7] text-left">
              <label className="block text-xs font-bold text-[#2B241F] mb-1">
                Inserir Link do Checkout ({planTitle})
              </label>
              <p className="text-[11px] text-[#4D4036] font-normal mb-2">
                Cole aqui a URL de pagamento da sua plataforma (Hotmart, Kiwify, Eduzz, etc.):
              </p>
              <input
                type="url"
                placeholder="https://pay.kiwify.com.br/..."
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-[#E5D8C7] rounded-xl focus:outline-hidden focus:border-[#2A9D68] focus:ring-1 focus:ring-[#2A9D68] bg-white font-medium"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleProceed}
                disabled={!inputUrl.trim()}
                className="flex-1 py-3.5 px-4 bg-[#2A9D68] hover:bg-[#228657] disabled:opacity-50 text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-[0.99] flex items-center justify-center gap-1.5"
              >
                <span>Salvar e Prosseguir</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleSaveOnly}
                disabled={!inputUrl.trim()}
                className="py-3.5 px-4 bg-[#FAF5EA] hover:bg-[#F1E7D7] disabled:opacity-50 text-[#2B241F] font-semibold text-xs rounded-full transition-all cursor-pointer border border-[#E5D8C7]"
              >
                Salvar
              </button>
            </div>
          </div>
        )}

        {/* Security Trust Badges */}
        <div className="mt-5 pt-4 border-t border-[#E5D8C7] flex items-center justify-center gap-3 text-[11px] text-[#4D4036] font-medium">
          <div className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-[#214735]" />
            <span>7 Dias de Garantia</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-[#214735]" />
            <span>Acesso Imediato</span>
          </div>
        </div>

      </div>
    </div>
  );
};
