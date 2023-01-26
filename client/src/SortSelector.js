import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { sortVideosThunk } from './redux/operations/videosThunk';

function SortSelector({onChange}) {

    const dispatch = useDispatch();

    const handleSortChange = (event) => {
       const sortMethod = event.target.value.substr(0, 3);
       dispatch(sortVideosThunk(sortMethod));
    };

  return (
    <div>
        <div className='sort_group'>
            <p>Sorted by</p>
            <Form.Select className='sort_selector' onChange={handleSortChange}>
                <option>descending</option>
                <option>ascending</option>
            </Form.Select>
        </div>
    </div>
  );
}

export default SortSelector;