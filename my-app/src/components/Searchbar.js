import React from 'react';
import {
  InputGroup,
  Input,
  Button
} from 'reactstrap';

export default function Searchbar() {
  return (
    <>
      <InputGroup className='w-75 m-2'>
        <div className='col-xs-2'>
          <Input
            type='select'
            name='select'
            id='categories'
          >
            <option>Categories</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Input>
        </div>
        <Input />
        <Button className="bi bi-search"></Button>
      </InputGroup>
    </>
  )
}

