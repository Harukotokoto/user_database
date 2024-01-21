'use client'
import React, { useState, useEffect } from 'react'
import Header from '@/lib/components/Header'
import { Box, Center, Heading, InputGroup } from '@chakra-ui/react'
import { Input, InputLeftElement } from '@chakra-ui/input'
import { SearchIcon } from '@chakra-ui/icons'
import { UserCard, UserType } from '@/lib/components/UserCard'

const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://users.ktrnds.com/api/users')
      const data = await response.json()
      setUsers(data)
    }

    getUsers()
  }, [])

  return !users ? (
    <Box>
      <Center m={10}>
        <Heading m={10}>読み込み中...</Heading>
      </Center>
    </Box>
  ) : (
    <Box>
      <Header />
      <Box margin={5}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input variant="flushed" placeholder="ユーザー名またはIDで検索" />
        </InputGroup>
      </Box>
      <Box margin={5}>
        {users.map((user: UserType, index: number) => (
          <UserCard key={index} user={user} />
        ))}
      </Box>
    </Box>
  )
}

export default Home
