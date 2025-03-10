import React from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import martelo from "../../assets/martelo.jpg";
const Products = () => {
  return (
    <Container maxW="1200px" px={[4, 8]} pb={28}>
      {/* Título da Seção */}

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
            Principais Soluções Jurídicas
          </Heading>
          <Text
            fontSize={["1.2rem", "1.3rem"]}
            color="gray.800"
            mb={4}
            fontFamily="'The Youngest Serif', serif"
          >
            O escritório JOSIMAR BEZERRA ADVOGADOS possui
            equipe jurídica experiente na prestação de assessoria preventiva e
            contenciosa, atuando sempre com honestidade e seriedade em ampla
            variedade de temas imobiliários.
          </Text>
          <Text
            fontSize={["1.2rem", "1.3rem"]}
            color="gray.800"
            mb={4}
            fontFamily="'The Youngest Serif', serif"
          >
            Alguns temas desta especialidade são: regularização imobiliária
            urbana e rural, ações possessórias; ações de usucapião judicial e
            extrajudicial; ações de retificações de áreas, ação de estremação,
            desmembramento de área, distrato imobiliário, suspensão de leilão,
            doações.
          </Text>
          <Text
            fontSize={["1.2rem", "1.3rem"]}
            color="gray.800"
            fontFamily="'The Youngest Serif', serif"
          >
            Elaboração de contratos de locação e compra e venda; revisão de
            contratos imobiliários; arrendamento; ações de despejo; ações
            revisionais; ações de cobranças; direito de vizinhança; dentre
            outras.
          </Text>
        </Box>

        {/* Imagem */}
        <Box flex="1">
          <Image
            src={martelo}
            alt="Imagem de prédios"
            borderRadius="md"
            boxShadow="lg"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Products;
