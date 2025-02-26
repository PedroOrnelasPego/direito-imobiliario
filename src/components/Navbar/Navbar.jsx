import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} position="sticky" top="0" bg="white" zIndex="1000" shadow="md">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
      >
        {/* Logo */}
        <HStack spacing={8} alignItems="center">
          <Box>
            <Link
              to="header"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
            ></Link>
          </Box>
        </HStack>

        {/* Menu para telas grandes */}
        <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active"
          >
            Sobre
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active"
          >
            Serviços
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active"
          >
            Produtos
          </Link>
          <Link
            to="location"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active"
          >
            Localização
          </Link>
          <Link
            to="footer"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active"
          >
            Contato
          </Link>
        </HStack>

        {/* Botão de Ação */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Button
            size="lg"
            bg="#878787"
            color="white"
            _hover={{ bg: "#636363" }} // Efeito hover
          >
            Fale com Especialista
          </Button>
        </HStack>

        {/* Menu para telas pequenas */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Abrir Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Itens do menu para telas pequenas */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Link
              to="header"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              onClick={onClose}
            >
              Início
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              onClick={onClose}
            >
              Sobre
            </Link>
            <Link
              to="features"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              onClick={onClose}
            >
              Serviços
            </Link>
            <Link
              to="products"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              onClick={onClose}
            >
              Produtos
            </Link>
            <Link
              to="location"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              onClick={onClose}
            >
              Localização
            </Link>
            <Link
              to="footer"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              onClick={onClose}
            >
              Contato
            </Link>
            <Button
              size="sm"
              bg="#D3B26A"
              color="white"
              _hover={{ bg: "#b79c5e" }} // Efeito hover
            >
              Fale com Especialista
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
