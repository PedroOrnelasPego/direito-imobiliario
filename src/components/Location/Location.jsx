import React from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Location = () => {
  return (
    <div className="fundo">
      <Container maxW="1200px" px={[4, 8]} py={22}>
        <Flex
          direction={["column", "column"]} // Coluna em telas pequenas, lado a lado em maiores
          justify="space-between"
          align="center"
          gap={[12, 16]} // Espaçamento entre os blocos de texto
        >
          {/* Bloco SUCESSÕES */}

          {/* Bloco INVENTÁRIO */}
          <Box flex="1" textAlign="justify">
            <Heading
              as="h2"
              fontSize={["lg", "2xl", "3xl"]}
              color="black"
              mb={4}
              fontFamily="'The Youngest Serif', serif"
              fontWeight="bold"
            >
              Inventário
            </Heading>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              mb={4}
              fontFamily="'The Youngest Serif', serif"
            >
              O inventário é um processo de levantamento, apuração e avaliação
              de bens, direitos e dívidas da pessoa que acabou de falecer. O
              procedimento visa dividir e transmitir aos herdeiros legais e
              testamentários a herança líquida deixada pelo de cujus – autor da
              herança. O processo de inventário é obrigatório para que possa ser
              feito qualquer coisa com os bens da pessoa falecida. Caso
              contrário, os bens ficarão bloqueados e sujeitos à incidência de
              multas, não podendo ser usados, vendidos ou gerenciados.
            </Text>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              mb={4}
              fontFamily="'The Youngest Serif', serif"
            >
              O escritório JOSIMAR BEZERRA ADVOGADOS possui
              advogados de inventário experientes em processos de inventário
              extrajudicial ou judicial, com amplo conhecimento sobre a
              legislação e as recentes decisões de Tribunais Superiores.
            </Text>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              mb={4}
              fontFamily="'The Youngest Serif', serif"
            >
              Contamos com uma equipe de advogados especializados em inventário
              extrajudicial, oferecendo toda agilidade, de forma simplificada e
              com menores custo e burocracia, executando o procedimento em
              cartório através de escritura pública, ou seja, sem a necessidade
              de intermédio do Poder Judiciário.
            </Text>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              mb={4}
              fontFamily="'The Youngest Serif', serif"
            >
              Caso não seja possível a realização do procedimento extrajudicial
              supracitado, nossa equipe oferece serviços jurídicos de excelência
              na abertura e acompanhamento do processo de inventário judicial,
              atendendo às determinações legais e defendendo com afinco os
              interesses dos nossos clientes.
            </Text>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              mb={4}
              fontFamily="'The Youngest Serif', serif"
            >
              <strong>Prazos</strong>: A depender da situação, o inventário pode
              ser realizado de forma judicial ou extrajudicial. Em qualquer um
              desses casos, o prazo para a abertura do inventário é de 60 dias e
              seu atraso está sujeito a multas a serem definidas pelo estado da
              federação no qual ocorre.
            </Text>
          </Box>

          <Box flex="1" textAlign="justify">
            <Heading
              as="h2"
              fontSize={["lg", "2xl", "3xl"]}
              color="black"
              mb={4}
              fontFamily="'The Youngest Serif', serif"
              fontWeight="bold"
            >
              Inventário Judicial e Extrajudicial
            </Heading>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              fontWeight={"bold"}
              mb={4}
              fontFamily="'The Youngest Serif', serif"
            >
              Inventário Judicial
            </Text>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              mb={4}
              fontFamily="'The Youngest Serif', serif"
            >
              Diferentemente do inventário extrajudicial, quando existirem
              incapazes ou menores, bem como existir, entre os herdeiros, alguma
              controvérsia sobre os termos, será necessário que o inventário
              seja realizado de forma judicial. Esta modalidade é a mais comum e
              mais conhecida, em que se busca o Poder Judiciário, com o
              intermédio de um advogado, para ingressar com o processo e
              descrever os bens e direitos da pessoa falecida, de modo a
              distribuí-los de forma equitativa entre os seus beneficiários
              legais. O inventário judicial pode ser amigável ou litigioso
              (quando as partes envolvidas discordam com relação à partilha ou
              ao direito de algum herdeiro acerca dos bens). O processo será
              acompanhado por um juiz da Vara de Sucessões ou, no caso de
              localidades que não a possuam, da Vara de Família, que vai fazer a
              avaliação das informações e providenciar a sua legitimação para
              que todas as condições e exigências legais do inventário sejam
              atendidas. Ao final de todo o procedimento, o juiz homologará a
              partilha dos bens através de um documento para a distribuição do
              patrimônio aos beneficiários.
            </Text>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              mb={4}
              fontWeight={"bold"}
              fontFamily="'The Youngest Serif', serif"
            >
              Inventário Extrajudicial
            </Text>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              mb={24}
              fontFamily="'The Youngest Serif', serif"
            >
              O inventário extrajudicial é aquele em que as partes não precisam
              recorrer ao Poder Judiciário para decidir acerca da divisão dos
              bens. Realizar o inventário extrajudicial é uma forma de acelerar
              o inventário e reduzir os custos e desgastes emocionais dele
              decorrentes. Nele, os herdeiros não recorrem à Justiça para a
              realização do inventário. Em consenso, definem os bens destinados
              a cada um e fazem o registro do acordado em escritura pública, sem
              haver necessidade de ingressar com ação judicial de nenhum tipo.
              No entanto, para que o inventário extrajudicial seja feito, é
              necessário que se atenda a alguns requisitos elencados no 982 do
              Código de Processo Civil. São eles:
              <br /> • Todos os herdeiros devem ser maiores de 18 anos e
              capazes;
              <br /> • Não pode haver testamento deixado pela pessoa falecida;{" "}
              <br /> • Deve haver consenso entre os herdeiros sobre a partilha
              dos bens. Ademais, é preciso que todas as partes envolvidas
              estejam de comum acordo sobre a divisão dos bens. Na prática, isso
              significa que eles serão partilhados de forma igualitária entre os
              herdeiros, sem quaisquer categorias de disputas.
            </Text>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default Location;
