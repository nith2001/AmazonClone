import { React, useState } from 'react';
import {
  InputGroup,
  Input,
  Button
} from 'reactstrap';

export default function Searchbar({ handleSearch }) {

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <InputGroup className='w-75 m-2'>
        <div className='col-xs-2'>
          <Input
            type='select'
            name='select'
            id='categories'
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Categories</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Input>
        </div>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button className="bi bi-search" onClick={() => handleSearch(search, category)}></Button>
      </InputGroup>
    </>
  )
}

