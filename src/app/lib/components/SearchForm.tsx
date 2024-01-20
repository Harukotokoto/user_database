import { Input, InputLeftElement } from '@chakra-ui/input'
import { Box, InputGroup } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchForm = () => {
  return (
    <Box margin={5}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.300' />
        </InputLeftElement>
        <Input variant='flushed' placeholder='ユーザー名またはIDで検索' />
      </InputGroup>
    </Box>
  )
}

export default SearchForm