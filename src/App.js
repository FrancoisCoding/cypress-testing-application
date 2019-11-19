import React, { useState } from 'react';
import './App.css';
import Routes from './components/utils/Routes';
import { Link } from 'react-router-dom';
import axios from 'axios';

function App() {
    const [testInput, setTestInput] = useState({ first: '', second: '' });
    const [data, setData] = useState();

    const handleChanges = e => {
        e.preventDefault();

        setTestInput({ ...testInput, [e.target.name]: e.target.value });
    };

    const fetchData = () => {
        axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    };

    console.log('Input', testInput);
    console.log('Data', data);
    return (
        <div className='App'>
            <Routes />
            <h1>Cypress Testing</h1>
            <input
                type='text'
                name='first'
                value={testInput.first}
                onChange={handleChanges}
                Placeholder='Example Input'
                data-cy='input1'
                className='input'
            />
            <input
                type='text'
                name='second'
                value={testInput.second}
                Placeholder='Example Input That Fails'
                data-cy='input2'
                className='input'
            />
            <h3>Example Link</h3>
            <Link className='example' to='/example'>
                Example
            </Link>
            <br />
            {data &&
                data.results.map(character => (
                    <img
                        key={character.id}
                        src={character.image}
                        alt='Character'
                    />
                ))}
            <button
                data-cy='button'
                onClick={() => fetchData()}
                disabled={data}
            >
                Fetch Data
            </button>
        </div>
    );
}

export default App;
