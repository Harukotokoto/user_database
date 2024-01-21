import { Button, Heading, HStack, Image } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons'

const Header = () => {
  return (
    <HStack backgroundColor={'gray.400'} height={90} padding={5}>
      <Image
        height={70}
        borderRadius="full"
        src={
          'https://cdn.discordapp.com/icons/1176812762110885908/8fac1457f0720bbadaca2a1a3bea88d1.png'
        }
        alt={'Logo'}
      />
      <Heading marginX={'auto'}>危険人物データベース</Heading>
      <Button
        as={'a'}
        href="#"
        leftIcon={<AttachmentIcon />}
        aria-label={'API'}
      >
        API
      </Button>
    </HStack>
  )
}

export default Header
