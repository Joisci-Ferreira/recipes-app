import React, { createContext } from 'react';
import userEvent from '@testing-library/user-event';
// import Search from '../Components/Search';
import Foods from '../Pages/Foods';
// import Header from '../Components/Header';
import RenderWithRouter from './RenderWithRouter';

describe('testing search bar component', () => {
  const context = createContext();

  it('test if bar search exist', () => {
    const { getAllByRole, getByRole } = RenderWithRouter(<Foods />, context);
    const searchButton = getAllByRole('button')[0];
    userEvent.click(searchButton);

    const searchBar = getByRole('searchbox');
    expect(searchBar).toBeInTheDocument();
  });

  it('test if have 3 radio buttons', () => {
    const { getAllByRole } = RenderWithRouter(<Foods />, context);
    const MAX_RADIO = 3;
    const searchButton = getAllByRole('button')[0];
    userEvent.click(searchButton);

    const radioButtons = getAllByRole('radio');
    expect(radioButtons.length).toBe(MAX_RADIO);
  });
});
