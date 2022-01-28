import Link from 'next/link'
import Image from "next/image"
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/logo512${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} alt="logo" width={20} height={20} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="Noto Sans CJK TC"
            fontWeight="bold"
            ml={3}
          >
            Wesley Chen
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo