"use client"
import Header from '@/app/lib/components/Header'
import SearchForm from '@/app/lib/components/SearchForm'
import { Box } from '@chakra-ui/react'

const Page = () => {
  return (
    <Box>
      <Header />
      <SearchForm />
    </Box>
  )
}

export default Page
