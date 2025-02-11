import { useContext } from 'react'
import { utils } from 'ethers'
import ReactPlayer from 'react-player'
import { Context, useAppState } from '../../state'

import {
  Box,
  Flex,
  VStack,
  // HStack,
  Text,
  SimpleGrid,
  Heading,
  Input,
  Spacer,
} from '@chakra-ui/react'
import { TYPE_CYBER } from '../../state/constants'

const CartItem = (props: any) => {
  const { product, quantity, deleteProduct } = props
  const { dispatch } = useContext(Context)
  const { cyberName } = useAppState()

  return (
    <Box
      borderBottom="1px solid white"
      borderRight={{ base: 'none', md: '1px solid white' }}
    >
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box padding="25px" flex="3">
          <ReactPlayer
            // url={token.media}
            // url = '/static/comfy5402_gloss.mp4'
            url={product.mediaUrl}
            // url={product.styles[product.selectedStyle]['animationUri']}
            loop={true}
            playing={true}
            muted={true}
            width="100%"
            height="100%"
          />
        </Box>
        <Box
          padding="40px"
          flex="7"
          borderLeft={{ base: 'none', md: '1px solid white' }}
        >
          <VStack align="stretch" spacing="0" h="100%">
            <Flex>
              <Box>
                <Text
                  color="#a5a5a5"
                  textTransform="uppercase"
                  fontWeight="600"
                  mb="16px"
                >
                  ntf &amp; physical
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text
                  color="#800000"
                  textTransform="uppercase"
                  fontWeight="600"
                  mb="16px"
                  cursor="pointer"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </Text>
              </Box>
            </Flex>
            <Box>
              <Heading as="h3" fontWeight="600" fontSize="32px" mb="24px">
                {product.type === TYPE_CYBER
                  ? `${cyberName} Eau de Parfum`
                  : product.name}
              </Heading>
            </Box>
            <Box>
              <Text color="white" fontSize="24px" fontWeight="600" mb="16px">
                Ξ {Number(utils.formatEther(product.price))} + gas
              </Text>
            </Box>
            <Box w="100%">
              <Text
                textTransform="uppercase"
                color="rgba(186, 186, 186, 0.5)"
                fontSize="14px"
                mb="20px"
                fontWeight="500"
              >
                {/* TODO change if sold out */}
                SUPPLY 30/1337
              </Text>
              <SimpleGrid flexDirection="row">
                <Box w="100%">
                  <Text
                    textTransform="uppercase"
                    color="#a5a5a5"
                    fontSize="16px"
                    mb="8px"
                  >
                    QTY:
                  </Text>
                  <Flex
                    direction={{ base: 'row', md: 'row' }}
                    spacing="10px"
                    align="stretch"
                    mt="8px"
                  >
                    <Box
                      background="linear-gradient(0deg, rgba(165, 165, 165, 0.2), rgba(165, 165, 165, 0.2)), #000000"
                      color="#A5A5A5"
                      fontSize="32px"
                      w="100%"
                      textAlign="center"
                      border="3px solid #a5a5a5"
                      p="10px"
                      h="80px"
                      // onClick={minQty}
                      onClick={() =>
                        dispatch({
                          type: 'DECREASE_QUANTITY',
                          payload: product.id,
                        })
                      }
                      cursor={'pointer'}
                      userSelect="none"
                    >
                      -
                    </Box>
                    <Box
                      w="100%"
                      textAlign="center"
                      background="#191919"
                      ml="10px"
                      mr="10px"
                      h="80px"
                    >
                      <Input
                        fontSize="32px"
                        p="36px"
                        w={{ base: '100%', md: '150px' }}
                        textAlign="center"
                        borderRadius="0px"
                        border="none"
                        // value={order.qty}
                        value={quantity}
                        min="1"
                        max="10"
                        readOnly
                        userSelect="none"
                        cursor={'default'}
                        color="#A5A5A5"
                        fontWeight="600"
                      />
                    </Box>
                    <Box
                      background="linear-gradient(0deg, rgba(165, 165, 165, 0.2), rgba(165, 165, 165, 0.2)), #000000"
                      border="1px solid #A5A5A5"
                      color="#A5A5A5"
                      fontSize="32px"
                      w="100%"
                      textAlign="center"
                      p="10px"
                      h="80px"
                      // onClick={plusQty}
                      onClick={() => {
                        dispatch({
                          type: 'ADD_PRODUCT',
                          payload: {item: { product: product, quantity: 1 }, callback: (item: any) => {}},
                        })
                      }}
                      cursor={'pointer'}
                      userSelect="none"
                    >
                      +
                    </Box>
                  </Flex>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}

export { CartItem }
