import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './FilterComponent.css'

const FilterComponent = () => {
    return (
        <DropdownButton
            id="dropdown-basic-button"
            title={<span><i className="bi bi-sliders"></i> Mês</span>}
            variant="light"
            className="filter-dropdown"
        >
            <Dropdown.Item href="#/action-1">Janeiro</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Fevereiro</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Março</Dropdown.Item>
            {/* Adicione mais meses conforme necessário */}
        </DropdownButton>
    );
};

export default FilterComponent;
