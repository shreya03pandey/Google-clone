import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import './Searchpage.css'
// import response from '../response';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const[{term}, dispatch] = useStateValue();

     const {data}=useGoogleSearch(term);
    // const data=response;
    console.log(data);

  return (
    <div className='searchPage'>
      <div className='searchPage_header'>
       <Link to="/">
         <img className='searchPage_logo' src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
         alt="google logo"/>
       </Link>
       <div className='searchPage_headerBody'>
         <Search hideButtons/>
         <div className="searchPage_options">
<div className="searchPage_optionsLeft">
    <div className="searchPage_option">
        <SearchIcon/>
        <Link to="/all">All</Link>
    </div>
    <div className="searchPage_option">
        <DescriptionIcon/>
        <Link to="/news">News</Link>
    </div>
    <div className="searchPage_option">
        <ImageIcon/>
        <Link to="/images">Images</Link>
    </div>
    <div className="searchPage_option">
        <LocalOfferIcon/>
        <Link to="/shopping">Shopping</Link>
    </div>
    <div className="searchPage_option">
        <RoomIcon/>
        <Link to="/maps">Maps</Link>
    </div>
    <div className="searchPage_option">
        <MoreVertIcon/>
        <Link to="/more">More</Link>
    </div>
</div>
<div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                        </div>
       </div>
      </div>
       {term &&(
      <div className='searchPage_results'>
           <p className="searchPage_resultCount">About {data?.searchInformation.formattedTotalResults
      } results({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
      {data?.items.map(item=>(
        <div className='searchPage_result'>
           <a href={item.link} target="_blank">
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage_resultImage"
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                        alt=''
                                    />
                                )}
                                {item.displayLink} ✔
                            </a>
                            <a className="searchPage_resultTitle" href={item.link} target="_blank">
                                <h2>{item.title}</h2>
                            </a>
         <p className="searchPage_resultSnippet">
           {item.snippet}
         </p>
       </div>
      ))}
      </div>
      )}
    </div>
  )
}

export default SearchPage;