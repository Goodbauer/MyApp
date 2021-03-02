import React from 'react';
import PageSider from "../layout/Sider";
import {MAIN_PAGE, CHARACTERS_PAGE, LOCATIONS_PAGE, EPISODES_PAGE} from '../constants/Paths';
import MainPageComponent from '../components/MainPageComponent/MainPageComponent';
import CharactersComponent from '../components/CharactersComponent/CharactersComponent';
import LocationsComponent from '../components/LocationsComponent/LocationsComponent';
import EpisodesComponent from '../components/EpisodesComponent/EpisodesComponent';

const ContentPagesContainer = () => {
    let container;
    switch (window.location.pathname) {
        case MAIN_PAGE:
            container = <MainPageComponent />;
            break;
        case CHARACTERS_PAGE:
            container = <CharactersComponent />
            break;
        case LOCATIONS_PAGE:
            container = <LocationsComponent />
            break;
        case EPISODES_PAGE:
            container = <EpisodesComponent />
            break;
    }

    return (
        <PageSider component={container}/>
    )
};
export default ContentPagesContainer;