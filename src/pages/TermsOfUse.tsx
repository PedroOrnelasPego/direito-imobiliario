import { motion } from "motion/react";

export default function TermsOfUse() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-black text-slate-900 mb-8">Termos de Uso</h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-justify">
            <h2 className="text-2xl font-bold text-slate-800 mt-8">1. Termos</h2>
            <p>
              Ao acessar ao site <a href="https://regularizacaoimobiliariabh.com.br">Josimar Bezerra Advogados</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8">2. Uso de Licença</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Josimar Bezerra Advogados , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>modificar ou copiar os materiais; </li>
              <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </li>
              <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Josimar Bezerra Advogados; </li>
              <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou </li>
              <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
            </ul>
            <p>
              Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Josimar Bezerra Advogados a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8">3. Isenção de Responsabilidade</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Os materiais no site da Josimar Bezerra Advogados são fornecidos 'como estão'. Josimar Bezerra Advogados não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
              <li>Além disso, o Josimar Bezerra Advogados não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8">4. Limitações</h2>
            <p>
              Em nenhum caso o Josimar Bezerra Advogados ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Josimar Bezerra Advogados, mesmo que Josimar Bezerra Advogados ou um representante autorizado da Josimar Bezerra Advogados tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8">5. Precisão dos materiais</h2>
            <p>
              Os materiais exibidos no site da Josimar Bezerra Advogados podem incluir erros técnicos, tipográficos ou fotográficos. Josimar Bezerra Advogados não garante que qualquer material em seu site seja preciso, completo ou atual. Josimar Bezerra Advogados pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Josimar Bezerra Advogados não se compromete a atualizar os materiais.
            </p>
            
            <h1 className="text-2xl font-bold text-slate-800 mt-8">6. Links</h1>
            <p>
              O Josimar Bezerra Advogados não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Josimar Bezerra Advogados do site. O uso de qualquer site vinculado é por conta e risco do usuário.
            </p>
            
            <h3 className="text-xl font-bold text-slate-800 mt-8">Modificações</h3>
            <p>
              O Josimar Bezerra Advogados pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>
            
            <h3 className="text-xl font-bold text-slate-800 mt-8">Lei Aplicável</h3>
            <p>
              Estes termos e condições são regidos e interpretados de acordo com as leis do Josimar Bezerra Advogados e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
