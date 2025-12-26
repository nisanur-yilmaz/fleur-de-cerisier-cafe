
const search =document.getElementById('search'),
 searchbtn =document.getElementById('search-btn'),
 searchClosen =document.getElementById('search-close')

searchbtn.addEventListener('click',() =>
{
    search.classList.add('show-search')
})
searchClosen.addEventListener('click',() =>
{
    search.classList.remove('show-search')
})