import React from 'react';
import './Search.css';
import SearchIcon from  '@material-ui/icons/Search';
import MicIcon from "@material-ui/icons/Mic";
import {Button} from "@material-ui/core";
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import {actionTypes} from "../StateProvider/reducer";
function Search({hideButtons = false})
{ 
  const [{},dispatch]=useStateValue(); 
     const [input,setInput]=useState("");
     const history = useHistory();
    const search = g => {
        g.preventDefault();
        console.log('Click google search button>>>', input);
        dispatch({
          type:actionTypes.SET_SEARCH_TERM,
          term:input
        })
        history.push('/search'); 
    };
  return (
    <form className='search'> 
    <div className='search_input'>
        <SearchIcon className="search_inputIcon"/>
        <input value={input} onChange={g=>setInput(g.target.value)}/>
        <MicIcon/>
    </div>
    {!hideButtons ?(
    <div className='search_buttons'>
    <Button onClick={
      search} type="submit" variant="outlined" >Google Search</Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>
    </div>):(
      <div className='search_buttons'>
      <Button  className="search_buttonHidden" onClick={
        search} type="submit" variant="outlined" >Google Search</Button>
          <Button className="search_buttonHidden" variant='outlined'>I'm Feeling Lucky</Button>
      </div>
    )}
    </form>
  );
}

export default Search;