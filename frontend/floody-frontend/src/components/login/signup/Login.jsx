import React, { useState } from "react";
import Map from "../../Map/Map";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email || !password) {
            setMessage('Please enter both email and password');
            return;
        }

        const storedUser = localStorage.getItem(email);

        if (!storedUser) {
            setMessage('User not found. Please sign up.');
            return;
        }

        try {
            const userData = JSON.parse(storedUser);

            if (userData.password === password) {
                setMessage('Login successful!');
                navigate('/dashboard');
            } else {
                setMessage('Invalid password.');
            }
        } catch (error) {
            setMessage('Error retrieving user data.');
            console.error('Error parsing user data from localStorage:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                 <Map isBackground={true} />
            </div>
            <div className="relative z-10 gap-6 grid grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
               
                <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Log In</h2>
                    {message && <div className={`mb-4 text-center text-sm ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>{message}</div>}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className=" items-center justify-between mb-6">
                        <Link to="#" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" >Forgot Password?</Link>
                    </div>
                    <button className="bg-stone-200 border font-bold py-2 px-4 rounded transition-colors hover:text-violet-700 w-full mb-4" type="button" onClick={handleLogin}>Log in</button>
                    
                    <div className="text-center">
                        <Link to="/signup" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" >Don't have an account? Sign up</Link>
                    </div>

                </div>

                <div className="p-8 bg-black text-white flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Welcome to PluvIA</h2>
                        <p className="text-gray-400 text-sm mb-6">PluvIA is an intelligent flood monitoring and early-warning system powered by real-time weather data, sensor networks, and AI.</p>
                        <p className="text-gray-400 text-sm">We help cities, emergency teams, and communities prepare for floods before they happen — with smarter data, faster alerts, and safer outcomes.</p>
                    </div>
                     
                    <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                         <h3 className="text-xl font-semibold mb-2">Monitor live flood risks <br />
                            Get predictive alerts <br />
                            Empower local decision-making</h3>
                        <p className="text-gray-400 text-sm mb-4">More than 17,000 people trust PluvIA to stay ahead of extreme weather — now it's your turn.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}