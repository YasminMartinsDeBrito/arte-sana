import { Box, Flex, Image, Stat } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useProducts } from "../../Providers/ProductsContext";
import Gabriel from "../../assets/gabs.jpeg";
import Vilson from "../../assets/viu.jpeg";

interface User {
  name: string;
  state: string;
  id: number;
}

const CardSeller = ({ name, state, id }: User) => {
  const history = useHistory();
  const { getUserId } = useProducts();

  function chooseSeller(userId: number) {
    getUserId(userId);
    history.push("/shop");
  }

  return (
    <>
      <Box
        m="25px"
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        w="200px"
      >
        <Flex
          cursor="pointer"
          boxShadow="7px 7px 7px 0px rgba(0,0,0,0.22)"
          rounded="lg"
          bg="white"
          onClick={() => chooseSeller(id)}
          h="290px"
          w="200px"
          justifyContent="center"
          background="#E5E5E5"
          p={3}
          color="black"
        >
          <Box
            fontSize="21px"
            padding-bottom="2px"
            key={name}
            color="green.200"
            fontWeight={800}
          >
            {name}
            <Box
              mt="30px"
              mb="30px"
              bg="white"
              display="flex"
              justifyContent="center"
              background="#E5E5E5"
              alignItems="center"
            >
              <Image
                border="solid #E5E5E5 1px"
                borderRadius="100%"
                boxSize="120px"
                src={
                  //"https://thumbs.dreamstime.com/b/homem-do-fazendeiro-da-vila-no-chap%C3%A9u-de-palha-17126306.jpg"
                  id % 2 === 0 ? Gabriel : Vilson
                }
                alt={""}
              />
            </Box>
            <Stat>
              <Stat fontSize="20px">{state}</Stat>
            </Stat>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default CardSeller;
