import { Avatar } from '@material-ui/core';
import React , { useState } from 'react'
import './Chatscreen.css'

function Chatscreen() {
    const [input, setInput] = useState('');
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message:input }]);
        setInput('');
    }
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_.jpg',
            message: 'Hi'
        },
        {
            name: 'Ellen',
            image: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_.jpg',
            message: 'How are you'
        },
        {
            message: 'Doing work'
        },
    ]);
    return (
        <div className='chatscreen'>
        <p className='chatscreen__timestamp'>YOU MATCHED WITH ELLEN ON 4/12/2020</p>
            {messages.map(jai => (
                jai.name ?
                (<div className='chatscreen__message'>
                    <Avatar className='chatscreen__image' src={jai.image} alt={jai.name} />
                    <p className='chatscreen__text'>{jai.message}</p>
                </div>)  :
                (<div className='chatscreen__message'>
                <p className='chatscreen__textUser'>{jai.message}</p>
                </div>)
                 ))}
            
                <form className='chatscreen__input'>
                    <input value={input} onChange={e => setInput(e.target.value)} className='chatscreen__inputField' placeholder='Type a Message...' type='text' />
                    <button className='chatscreen__inputButton' onClick={handleSend}>SEND</button>
                </form>       
                 
        </div>
    )
}

export default Chatscreen
