import React from 'react';
import { Link, NavLink } from 'react-router';
import "./NavBar.css"
import { GitBranch, GitCommit } from 'lucide';
import { GiTacos } from 'react-icons/gi';
import { GitBranchIcon } from 'lucide-react';
const NavBar = () => {
    const links = <>
        <NavLink className='m-2' to='/'>Home</NavLink>
        <NavLink className='m-2' to="/app">App</NavLink>
        <NavLink className='m-2' to='/installation'>Installation</NavLink>
        
    </>
    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
      </ul>
    </div>
    
      <Link to='/' className='flex items-center gap-1'>

        <img className='w-1/10' src="/assets/logo.png" alt="" />
        <h2 className='font-semibold text-2xl'>HERO.IO</h2>
      </Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    
    {/* <GitCommit></GitCommit> */}
    
    <Link target='_blank' to='https://github.com/YeacinSanto/hero-app' className='btn'>
      <GitBranchIcon></GitBranchIcon>
      <a className="">Contribution</a>
      
    </Link>
  </div>
</div>
    );
};

export default NavBar;