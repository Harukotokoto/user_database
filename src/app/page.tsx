'use client'
import Header from '@/lib/components/Header'
import { Box, InputGroup } from '@chakra-ui/react'
import { Input, InputLeftElement } from '@chakra-ui/input'
import { SearchIcon } from '@chakra-ui/icons'
import { ChangeEvent, useEffect, useState } from 'react'
import { UserCard } from '@/lib/components/UserCard'

export default function Home() {
  const [search, setSearch] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {}, [search])

  const users = [
    {
      avatarURL:
        'https://cdn.discordapp.com/avatars/1176812229631430660/7974a7d98fba5170fb93a42a355bced7.png',
      displayName: 'たっくん',
      username: 'admintakkun413',
      user_id: '1176812229631430660',
      reason: 'ハゲ',
      categories: ['ハゲ', 'くちくさい'],
    },
    {
      avatarURL:
        'https://cdn.discordapp.com/avatars/1176812229631430660/7974a7d98fba5170fb93a42a355bced7.png',
      displayName: 'たっくん',
      username: 'admintakkun413',
      user_id: '1176812229631430660',
      reason: 'ハゲ',
      categories: ['ハゲ', 'くちくさい'],
    },
    {
      avatarURL:
        'https://cdn.discordapp.com/avatars/1176812229631430660/7974a7d98fba5170fb93a42a355bced7.png',
      displayName: 'たっくん',
      username: 'admintakkun413',
      user_id: '1176812229631430660',
      reason: 'ハゲ',
      categories: ['ハゲ', 'くちくさい'],
    },
  ]

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
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </Box>
    </Box>
  )
}
