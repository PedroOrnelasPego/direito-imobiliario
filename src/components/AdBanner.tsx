import { useEffect } from "react";

export const AdBanner = ({ slot, label = "Publicidade", debug = false }: { slot?: string; label?: string; debug?: boolean }) => {
  useEffect(() => {
    if (slot) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Erro ao carregar AdSense:", e);
      }
    }
  }, [slot]);

  // Se não houver Slot e não estivermos em Debug, o componente não ocupa espaço (colapsa)
  if (!slot && !debug) return null;

  return (
    <div className="container mx-auto px-6 py-8 flex justify-center">
      <div className={`w-full max-w-4xl min-h-[50px] flex flex-col items-center justify-center relative ${debug ? 'bg-slate-50 border border-dashed border-slate-200 rounded-xl' : ''}`}>
        {(debug || !slot) && (
          <>
            <div className="absolute top-2 right-2 text-[8px] text-slate-300 font-bold uppercase tracking-widest">{label}</div>
            <div className="text-slate-200 text-[10px] uppercase font-bold tracking-tighter flex items-center gap-2">
               <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-slate-100 italic font-serif text-slate-400">Ad</span>
               {slot ? "Canto de Publicidade" : "Espaço reservado para conteúdo informativo"}
            </div>
          </>
        )}
        
        {slot && (
          <ins 
            className="adsbygoogle"
            style={{ display: 'block', width: '100%' }}
            data-ad-client="ca-pub-5471973562089914"
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        )}
      </div>
    </div>
  );
};
