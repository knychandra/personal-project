const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const ul = document.querySelector('ul');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getMovie();
    ul.innerText ='';
})

const getMovie = async () => {
    const searchQuery = searchInput.value;
    const config = {params:{
        q: searchQuery
    }}
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=`, config);
    addDetails(res.data);
}

const addDetails = tvShows => {
    for(let result of tvShows) {
        if(result.show.image) {
            const newIMG = document.createElement('IMG');
            const title = document.createElement('span');
            const newLI = document.createElement('li');
            newIMG.src = result.show.image.medium;
            title.append(result.show.name);
            newLI.append(newIMG, title);
            ul.append(newLI); 
        }
    }
}