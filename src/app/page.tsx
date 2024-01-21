'use client'
import Header from '@/app/lib/components/Header'
import { Box, InputGroup } from '@chakra-ui/react'
import { Input, InputLeftElement } from '@chakra-ui/input'
import { SearchIcon } from '@chakra-ui/icons'
import { ChangeEvent, useEffect, useState } from 'react'

const Page = () => {
  const [search, setSearch] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {}, [search])

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
    </Box>
  )
}

export default Page
