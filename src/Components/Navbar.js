import React, { Component } from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <header className="sticky top-0 w-full bg-white shadow-2xl z-50">
                <div className='sticky'>
                    <nav className="bg-{#BDFA7B} border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                        <div className="flex flex-wrap justify-between items-center mx-auto  px-4 md:px-6 ">
                            <div className="flex items-center">
                                <img src={logo} className="h-20 mr-3 py-3" alt="site logo" />
                                <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">SpudWatch</span>
                            </div>
                            <div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li> <Link to="/" className="block text-lg py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Home</Link> </li>
                                    <li> <Link to="/prediction" className="block text-lg py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Prediction</Link> </li>
                                    <li> <Link to="/about" className="block text-lg py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About</Link> </li>
                                    <li> <Link to="/contact" className="block text-lg py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link> </li>
                                    <li> <Link to="/privacy-policy" className="block text-lg py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Privacy Policy</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
