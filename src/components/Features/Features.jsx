import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import justica from "../../assets/justiça.png";

const Features = () => {
  return (
    <Container maxW="1200px" px={[4, 8]} py={28}>
      {/* Título principal */}
      <Flex
        direction={["column", "row"]} // Coluna em telas pequenas, linha em maiores
        align="center"
        justify="space-between"
        gap={[8, 12]}
      >
        {/* Imagem */}
        <Box flex="1" >
          <Image
            src={justica}
            alt="Imagem de edifício"
            borderRadius="md"
            boxShadow="lg"
            objectFit="cover"
            maxW="600px"
          />
        </Box>

        {/* Texto */}
        <Box flex="2"textAlign="justify">
          <Heading
            as="h2"
            fontSize={["2xl", "4xl"]}
            fontWeight="bold"
            mb={6}
            fontFamily="'The Youngest Serif', serif"
          >
            Nossa equipe
          </Heading>
          <Text
            fontSize={["1.2rem", "1.3rem"]}
            color="gray.800"
            mb={4}
            fontFamily="'The Youngest Serif', serif"
          >
            Equipe altamente especializada, atuando em relevantes operações
            jurídicas no mercado imobiliário.
          </Text>
          <Text
            fontSize={["1.2rem", "1.3rem"]}
            color="gray.800"
            mb={4}
            fontFamily="'The Youngest Serif', serif"
          >
            O escritório prima pela elevação do atendimento aos nossos clientes,
            com transparência, agilidade e ética profissional. Estamos aptos a
            fornecer aos nossos clientes uma especializada assessoria jurídica
            no que tange ao Direito Imobiliário e todas as suas abrangências.
          </Text>
          <Text
            fontSize={["1.2rem", "1.3rem"]}
            color="gray.800"
            mb={4}
            fontFamily="'The Youngest Serif', serif"
          >
            Trabalhamos na operação envolvendo imóveis urbanos e rurais,
            assessorando na aquisição, transferência, estruturação do
            empreendimento e no desenvolvimento de soluções inteligentes sobre
            os mais diversos temas do setor imobiliário. Confira, a seguir, um
            pouco mais sobre temas relacionados ao Direito Imobiliário e os
            serviços que prestamos na área.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Features;
