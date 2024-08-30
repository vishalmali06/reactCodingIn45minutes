import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import TodoApp from './Todolist';
import DataFetcher from './Datafetcher';
import SimpleForm from './Simpleform';
import ModalComponent from './Modalcomponent';
import Tabs from './Tabs';
import SearchableList from './Searchablelist';
import ImageGallery from './Imagegallery';
import ToggleSwitch from './Toggleswitch';
import Accordion from './Accordion';

const AppLayout = () => {
    return (
        <div className='app'>
            <p>HI</p>
            {/* <Counter /> */}
            {/* <TodoApp /> */}
            {/* <DataFetcher /> */}
            {/* <SimpleForm /> */}
            {/* <ModalComponent /> */}
            {/* <Tabs /> */}
            {/* <SearchableList /> */}
            {/* <ImageGallery /> */}
            {/* <ToggleSwitch /> */}
            {/* <Accordion /> */}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);