import React from 'react'
import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react'

export const Card: React.FC<{
  user: {
    avatarURL: string
    displayName: string
    username: string
    user_id: string
    reason: string
    category: string[]
  }
}> = ({ user }) => {
  return (
    <Box>
      <HStack p={3} height={90}>
        <Avatar size="lg" name={user.displayName} src={user.avatarURL} m={2} />
        <VStack>
          <Text>
            {user.displayName}({user.username})
          </Text>
        </VStack>
      </HStack>
    </Box>
  )
}
