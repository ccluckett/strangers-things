import React , {useState} from "react";



const SearchForm = (posts, setPosts) => {
    console.log(posts)
    const [searchTerm,setSearchTerm] = useState('');
        

    const postMatches= (post,searchTerm) => {
        const result = post.toLowerCase().includes(searchTerm.toLowerCase);
         return result;
    }
    //const filteredPosts = posts.filter(post => postMatches(post, searchTerm));

    return (
        <div>
            <form>
                 <input type="text"  onChange={(e) => {
            setSearchTerm(e.target.value);
          }}></input>
          <button onClick={()=> {
            setPosts(filteredPosts);
          }}>Search</button>
            </form>
        </div>
    )

}
export default SearchForm;