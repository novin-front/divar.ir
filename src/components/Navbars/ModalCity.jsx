import React from 'react'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default function ModalCity() {
    return (
        <>
            <InputGroup className="in-modal-city">
                
                <Input placeholder="جستجوی سریع نام شهر" />
                <InputGroupAddon addonType="prepend"><button><i className="fa fa-search" ></i></button></InputGroupAddon>
            </InputGroup>
            <div className="city-wrapper-btn">
                <button className="city-Selection-btn"> تهران </button>
                <button className="city-Selection-btn"> تهران </button>
                <button className="city-Selection-btn"> تهران </button>
                <button className="city-Selection-btn"> تهران </button>
                <button className="city-Selection-btn"> تهران </button>
                <button className="city-Selection-btn"> تهران </button>
                <button className="city-Selection-btn"> تهران </button>
                <button className="city-Selection-btn"> تهران </button>
                <button className="city-Selection-btn"> تهران </button>
                <button className="city-Selection-btn"> تهران </button>
                <button className="city-Selection-btn"> تهران </button>
            </div>
        </>
    )
}
