import { Flex, Image, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const links = [
  { path: "/bag", text: "Bag" },
  { path: "/address", text: "Address" },
  { path: "/payment", text: "Payment" }
]

function PaymentNavbar() {
  const defaultStyle = {
    color: "darkgray",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "bold"
  }
  const activeStyle = {
    color: "green",
    textDecoration: "underline",
    fontSize: "15px",
    fontWeight: "bold"
  }
  return (
    <div>

      <Flex justifyContent={"space-between"} border="1px solid lightgray" w="full" marginBottom={6}
        position="fixed"
        top={0}
        zIndex="999"
        background={"#fff"}
        alignItems={'center'}
      //width={'full'}
      >
        <Box>
          <Link to="/" >
            <Image src={'https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200'} alt="logo" w={["50px", "60px", "70px"]} pl={2} />
          </Link>
        </Box>
        <HStack spacing={[2, 3, 4]} >
          {
            links.map((link) => (
              <Box key={link.path} >
                <NavLink
                  to={link.path}
                  style={({ isActive }) => {
                    return isActive ? activeStyle : defaultStyle
                  }}
                >
                  {link.text}
                </NavLink>
              </Box>
            ))
          }
        </HStack>
        <Box>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-izi1oOv4HzrRkvRftiYqNGjG8OnmjHgSHA&usqp=CAU" w={["50px", "60px", "70px"]} />
        </Box>
      </Flex>
    </div>
  )
}

export default PaymentNavbar