import { Flex,Circle,Box,Image,Badge,useColorModeValue,Icon,Button,Tooltip,Stack,Link,HStack,Text, Center, } from "@chakra-ui/react";
import {FiShoppingCart} from 'react-icons/fi';
import {Link as ReactLink} from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";


const Rating=({rating,numReviews})=>{
  const{iconsize,useIconSize}=useState("14px");
  return(
    <Flex>
      <HStack>
        <StarIcon size={iconsize} w="14=x" color='orange.500' />
        <StarIcon size={iconsize} w="14=x" color={rating >=2 ? 'orange.500': 'gray.200'} />
        <StarIcon size={iconsize} w="14=x" color={rating >=3 ? 'orange.500': 'gray.200'} />
        <StarIcon size={iconsize} w="14=x" color={rating >=4 ? 'orange.500': 'gray.200'} />
        <StarIcon size={iconsize} w="14=x" color={rating >=5 ? 'orange.500': 'gray.200'} />
      </HStack>
      <Text fontSize='md' fontWeight='bold' ml='4px'>
        {`${numReviews} ${numReviews ===1 ? 'Review': 'Reviews'}`}
      </Text>
    </Flex>
  )
}

const ProductCard = ({product}) => {
  return (
    <Stack 
    p="2"
    spacing="3px"
    bg={useColorModeValue('white','Gray.800')}
    minW='240px'
    h='450px'
    borderWidth="1px"
    rounded="1g"
    position='relative'>
      
      {product.isNew && <circle size="10px"position="absolute"top={2}right={2}bg='green.300' />}
      {product.stock <= 0 && <circle size="10px"position="absolute"top={2}right={2}bg='green.300' />}
      <Image src={product.image} alt={product.name} roundedTop="1g"/>

      <Box flex='1' maxH='5'alignItems='baseline'>
        {product.stock <= 0 && (
          <Badge rounded='full' px="2"fontSize="0.8em" colorScheme="red">Sold out</Badge>
        )}
        {product.isNew && (
          <Badge rounded='full' px="2"fontSize="0.8em" colorScheme="green">New</Badge>
        )}
         </Box>
         <Flex mt="1" justifyContent="space-between"alignContent="Center">
          <Link as={ReactLink} to={`/product${product._id}`}pt="2"cursor="pointer">
          <Box fontSize='2x1' fontWeight='semibold' lineHeight='tight'>
            {product.name}
          </Box>
          </Link>
         </Flex>
         <Flex justifyContent='space-between' alignContent='center' py="2">
          <Rating rating={product.rating} numReviews={product.numReviews} />
         </Flex>
         <Flex justify="space-between">
          <Box fontSize='2x1' color={useColorModeValue('gray.800','white')}>
            <Box as="span" color={'gray.600'} fontSize="1g">
            $
            </Box>
            {product.price.toFixed(2)} 
        </Box>
          <Tooltip label="Add to Card" bg="white" placement="top" color="gray.800"fontSize="1.2em">
            <Button variant='ghost' display="flex" disabled={product.stock <= 0}>
              <Icon as={FiShoppingCart}h={7}w={7}alignSelf='Center'> </Icon>
            </Button>
          </Tooltip>
         </Flex>
    </Stack>

    )
}

export default ProductCard