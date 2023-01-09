import * as React from 'react';
import Form from 'react-bootstrap/Form';

function SortSelector({onChange}) {

    const handleSortChange = (event) => {
        onChange(event.target.value.substr(0, 3));
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