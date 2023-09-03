import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

const toggleSignInForm = () => {
	setIsSignInForm(!isSignInForm);
};
	return (
		<div>
			<Header/>
			<div>
				<img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
				alt="Netflix background"/>
			</div>
			<form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-70'>
				<p className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</p>
				{isSignInForm &&	<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-slate-600'/>}
				<input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-slate-600'/>
				<input type="password" placeholder='Password' className='p-4 my-4 w-full bg-slate-600'/>
				<button className='p-4 my-6 w-full bg-red-700 rounded-lg cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
				<p className='p-4 my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now."}</p>
			</form>
		</div>
	)
}

export default Login;