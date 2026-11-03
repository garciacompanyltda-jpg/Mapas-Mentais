import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#112D22] text-white/70 py-9 px-4 border-t border-[#173A2C]">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-xs text-white/70 font-normal">
          © 2026 <span className="text-[#FAF5EA] font-semibold">Cultura Indígena Ilustrada</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
