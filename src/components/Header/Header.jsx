import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";
import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="fundo2">
      <Container maxW="1200px" px={[4, 8]} py={22}>
        <Flex
          maxH={["100vh"]}
          bgPosition="center"
          align="center"
          justify="flex-start" // Sempre mantém o card à esquerda
          wrap="wrap" // Permite que os elementos se ajustem sem quebrar
        >
          <Box
            bg="whiteAlpha.900"
            p={[6, 8]} // Padding menor no mobile
            borderRadius="md"
            boxShadow="xl"
            maxW={["100%", "650px"]} // Responsivo: 100% no mobile, 600px em telas maiores
            textAlign="left"
            ml={[0, "-50px"]} // Mantém deslocamento apenas em telas grandes
          >
            {/* Logotipo e Nome do Escritório */}
            <Flex align="center" mb={6} gap={4} wrap="wrap">
              <Image src={logo} alt="Logo" maxW={["120px", "170px"]} />
              <Heading
                as="h2"
                fontSize={["24px", "33px"]}
                color="gray.800"
                fontFamily="'The Youngest Serif', serif"
                fontWeight="400"
                lineHeight="1.3"
              >
                Dra. Lílian Vasconcelos <br />
                Dra. Marina Santos Costa <br />
              </Heading>
            </Flex>

            {/* Título */}
            <Heading
              as="h1"
              fontSize={["32px", "50px"]}
              color="gray.800"
              fontFamily="'The Youngest Serif', serif"
              fontWeight="400"
              mb={6}
            >
              Direito Imobiliário e Inventário
            </Heading>

            {/* Descrição */}
            <Text
              fontSize={["md", "lg"]}
              color="black.700"
              fontWeight="600"
              mb={4}
            >
              Escritório de advocacia especializado em direito imobiliário e
              sucessões.
            </Text>
            <Text
              fontSize={["md", "lg"]}
              color="black.700"
              fontWeight="600"
              mb={4}
            >
              Nossa equipe é altamente especializada e atua em relevantes
              operações jurídicas no mercado imobiliário.
            </Text>
            <Text
              fontSize={["md", "lg"]}
              color="black.700"
              fontWeight="600"
              mb={6}
            >
              Comprometidos em ajudar nossos clientes a terem sucesso.
            </Text>

            {/* Botão com ícone via CDN */}
            <Flex>
              <Button
                size="lg"
                bg="#878787"
                color="white"
                _hover={{ bg: "#636363" }}
                leftIcon={
                  <Image
                    src="https://img.icons8.com/material-outlined/24/FFFFFF/whatsapp--v1.png"
                    alt="WhatsApp"
                    boxSize={6}
                  />
                }
                onClick={() =>
                  window.open("https://wa.me/5531987533343", "_blank")
                }
              >
                Fale com Especialista
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
