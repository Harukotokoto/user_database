import React from 'react'
import {
  Avatar,
  Badge,
  Box,
  Card,
  HStack,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'

export const UserCard: React.FC<{
  user: {
    avatarURL: string
    displayName: string
    username: string
    user_id: string
    reason: string
    categories: string[]
  }
}> = ({ user }) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      m={3}
    >
      <HStack p={3} height={90}>
        <Avatar size="lg" name={user.displayName} src={user.avatarURL} m={2} />
        <VStack alignItems={'flex-start'}>
          <Text color={'gray.500'}>
            {user.displayName}({user.username})
          </Text>
          <Text color={'gray.500'}>{user.user_id}</Text>
        </VStack>
      </HStack>
      <Spacer />
      <HStack mx={5}>
        {user.categories.map((category) => {
          return (
            <Badge ml="1" fontSize="0.8em" colorScheme="blue">
              {category}
            </Badge>
          )
        })}
      </HStack>
    </Card>
  )
}
