import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './style.css';
import { Navbar, Posts, Profile, Home, Register  } from './components';
import { Route, Routes, BrowserRouter, useNavigate  } from 'react-router-dom';
import { getPosts } from './api';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    console.log(token)

    async function fetchPosts() {
        const results = await getPosts()
        setPosts(results.data.posts);
    }
    
    useEffect(() => {
        fetchPosts()
    }, []);

    return (
        <div>
            {/* <h1>Welcome to Stranger's Things!</h1> */}
            <Navbar setToken={ setToken } />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/posts' element={<Posts posts={ posts }/>} />
                    <Route exact path='/profile' element={<Profile />} />   
                    <Route exact path='/register' element={<Register setToken={ setToken } navigate={ navigate }/>
                } />   
                </Routes>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
);


// Login
// Register
// Posts
// Profile
// Navbar
// AddPost
