import {
  InputGroup,
  Input,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import "./searchbar.css";

export default function Searchbar({ setSearch, setCategory }) {

  return (
    <>
      <InputGroup id="input-group" className='w-75 m-1'>
        <div className='col-xs-2'>
          <Input
            type='select'
            name='select'
            id='categories'
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Categories</option>
            <option>Tech</option>
            <option>Shoes</option>
            <option>Baby</option>
          </Input>
        </div>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          id="bar"
          placeholder='Search here...'
        />
        <Link to="/searchresults">
          <Button className="bi bi-search" id="search-button"></Button>
        </Link>
      </InputGroup>
    </>
  )
}

