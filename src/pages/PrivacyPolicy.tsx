import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-black text-slate-900 mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-justify">
            <p>
              A sua privacidade é importante para nós. É política do <strong>Josimar Bezerra Advogados</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://regularizacaoimobiliariabh.com.br">Josimar Bezerra Advogados</a>, e outros sites que possuímos e operamos.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8">1. Coleta de Informações</h2>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8">2. Uso de Dados</h2>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8">3. Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8">4. Cookies e Publicidade</h2>
            <p>
              O serviço Google AdSense que usamos para veicular publicidade utiliza um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você. Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8">5. Compromisso do Usuário</h2>
            <p>
              O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Josimar Bezerra Advogados oferece no site e com caráter enunciativo, mas não limitativo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
              <li>B) Não divulgar conteúdo ou propaganda de natureza racista, xenofóbica, ou sobre cassinos, casas de apostas, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
              <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Josimar Bezerra Advogados, de seus fornecedores ou terceiros.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8">Mais Informações</h2>
            <p>
              Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
            </p>
            <p>Esta política é efetiva a partir de <strong>Março de 2026</strong>.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
