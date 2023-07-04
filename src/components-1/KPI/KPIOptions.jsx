import React from 'react';
import { Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


function KPIOptions() {
  return (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
        <Dropdown.Menu>
            <DropdownItem href="#">Registrations</DropdownItem>
            <DropdownItem href="#">FTDs</DropdownItem>
            <DropdownItem href="#">QPs</DropdownItem>
        </Dropdown.Menu>
    </Dropdown>
    
  );
}

export default KPIOptions
