import {SearchQuery} from "./SearchQuery";
import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Search query',()=>{
    it('renders loading when search button is pressed',()=>{
      render(<SearchQuery
        searchQuery={{
            term:'Pizza',
            location:'Manchester',
            sortBy:'Best Match'
        }}
        />)

        expect(screen.findbyText('looking for restaurants....')).toBeInTheDocument()

    })
})