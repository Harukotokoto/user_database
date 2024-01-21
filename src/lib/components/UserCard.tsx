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

export type UserType = {
  avatarURL: string;
  displayName: string;
  username: string;
  user_id: string;
  reason: string;
  categories: string[];
}

export const UserCard: React.FC<{
  user: UserType
}> = ({ user }) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      m={3}
      as={"a"}
      href={`/users/${user.user_id}`}
    >
      <HStack p={0} height={90} m={3}>
        <Avatar size="lg" name={user.displayName} src={user.avatarURL} m={2} />
        <VStack alignItems={'flex-start'}>
          <Text color={'gray.500'} m={0} p={0}>
            {user.displayName}({user.username})
          </Text>
          <Text color={'gray.500'} m={0} p={0}>{user.user_id}</Text>
          <Text m={0} p={0}>理由: {user.reason}</Text>
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
