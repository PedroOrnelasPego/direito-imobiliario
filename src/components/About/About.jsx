import React from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import "./About.scss";
import predios2 from "../../assets/predios2.jpg";

const About = () => {
  return (
    <div className="fundo">
      <Container maxW="1200px" px={[4, 5]} pt={24}>
        <Flex
          direction={["column", "row"]} // Coluna para telas menores, linha para maiores
          align="center"
          justify="space-between"
          gap={8}
        >
          {/* Texto */}
          <Box flex="1" textAlign="justify">
            <Heading
              as="h2"
              fontSize={["2xl", "3xl", "4xl"]}
              color="black"
              mb={6}
              fontFamily="'The Youngest Serif', serif"
              fontWeight="bold"
            >
              O que é Direito Imobiliário?
            </Heading>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              mb={4}
              fontFamily="'The Youngest Serif', serif"
            >
              O Direito Imobiliário é um ramo do direito privado que regula as
              relações envolvidas sobre posse, uso e fruição de bens imóveis e
              seus respectivos acessórios.
            </Text>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              mb={4}
              fontFamily="'The Youngest Serif', serif"
            >
              A base legal do Direito Imobiliário está prevista no Código Civil,
              nos capítulos de Direitos Reais, e no corpo das leis especiais
              complementares como a Lei dos Registros Públicos, Lei do
              Inquilinato, entre outras.
            </Text>
            <Text
              fontSize={["1.2rem", "1.3rem"]}
              color="gray.800"
              fontFamily="'The Youngest Serif', serif"
            >
              Nossos advogados especializados atuam em ações jurídicas que
              envolvem o direito de propriedade, aquisição, compra e venda,
              financiamento, usucapião, locação, direito de vizinhança,
              inventário, como também no exercício da propriedade e no direito
              de construir.
            </Text>
          </Box>

          {/* Imagem */}
          <Box flex="1">
            <Image
              src={predios2}
              alt="Imagem de prédios"
              borderRadius="md"
              boxShadow="lg"
            />
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default About;
