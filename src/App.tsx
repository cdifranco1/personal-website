import React from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import { EssayLinks } from './components/Essays'
import dummyEssays from './utils/dummyData'

type LinkProps = { to: string; children: React.ReactNode }

const StyledLink: React.FC<LinkProps> = (props: LinkProps) => (
    <Link to={props.to} className="text-white px-2 py-1 block">
        {props.children}
    </Link>
)

const Header: React.FC<{}> = () => (
    <header className="text-3xl bg-slate-500 flex justify-center">
        <div className="flex justify-between w-3/5">
            <Link to="/" className="text-white">
                My Blog
            </Link>
            <nav className="w-2/5 text-base text-red-900 flex justify-end">
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/archive">Archive</StyledLink>
                <StyledLink to="/reading">Reading</StyledLink>
            </nav>
        </div>
    </header>
)

function App() {
    return (
        <div className="App">
            <Header />
            <div className="w-2/3 mx-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default App
