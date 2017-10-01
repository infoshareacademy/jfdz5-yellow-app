import React from 'react'

import {Grid,
    FormGroup,
    FormControl,
    Col,
}
    from 'react-bootstrap'

import './SearchBar.css'



const SearchBar = () => (
    <Grid>
        <FormGroup>
            <Col sm={2}>
            </Col>
            <Col sm={8}>
                <FormControl
                    className="searchbar"
                    placeholder="szukaj imprezy w swojej okolicy"
                />
            </Col>
            <Col sm={2}>
            </Col>
        </FormGroup>
    </Grid>
)


export default SearchBar