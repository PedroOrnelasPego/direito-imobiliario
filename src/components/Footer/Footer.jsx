import React from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#636363" color="white" py={8}>
      <Container maxW="1200px" px={[4, 8]}>
        <Flex
          direction={["column", "row"]} // Coluna em telas pequenas, linha em maiores
          justify={["center", "space-between"]} // Centraliza em telas pequenas
          align={["center", "flex-start"]} // Centraliza verticalmente em telas pequenas
          textAlign={["center", "left"]} // Centraliza texto em telas pequenas
          gap={[8, 12]}
        >
          {/* Contatos */}
          <Box>
            <Heading as="h3" size="md" mb={4}>
              CONTATOS
            </Heading>
            <Text fontSize="md">(31) 98753-3343</Text>
          </Box>

          {/* Horários */}
          <Box>
            <Heading as="h3" size="md" mb={4}>
              HORÁRIOS
            </Heading>
            <Text fontSize="md">Segunda a Sexta: 08:00 até às 18:00 h.</Text>
          </Box>

          {/* Localização */}
          <Box>
            <Flex direction="column">
              <Heading as="h3" size="md" mb={4}>
                LOCALIZAÇÃO
              </Heading>

              {/* Endereço 1 */}
              <Box mb={4}>
                <Text fontSize="md" mb={1}>
                  Rua das Canoas, 757
                </Text>
                <Text fontSize="md" mb={1}>
                  Betânia, Belo Horizonte/MG
                </Text>
                <Text fontSize="md">CEP: 30.580-040</Text>
              </Box>

              {/* Endereço 2 */}
              <Box>
                <Text fontSize="md" mb={1}>
                  Avenida Raja Gabaglia, 1000, salas 1103 e 1104
                </Text>
                <Text fontSize="md" mb={1}>
                  Cidade Jardim, Belo Horizonte/MG
                </Text>
                <Text fontSize="md">CEP: 30.380-090</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
