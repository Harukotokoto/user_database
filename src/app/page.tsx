'use client'
import Header from '@/lib/components/Header'
import { Box, InputGroup } from '@chakra-ui/react'
import { Input, InputLeftElement } from '@chakra-ui/input'
import { SearchIcon } from '@chakra-ui/icons'
import { ChangeEvent, useEffect, useState } from 'react'
import { UserCard, UserType } from '@/lib/components/UserCard'

export default async function Home() {
  const [search, setSearch] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {}, [search])

  const response= await fetch('http://localhost:3000/api/users')

  const users = await response.json()

  return (
    <Box>
      <Header />
      <Box margin={5}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            variant="flushed"
            placeholder="ユーザー名またはIDで検索"
            onChange={(e) => handleChange(e)}
          />
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
