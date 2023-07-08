const xhr = new XMLHttpRequest();
let sub = document.getElementById("btn");
sub.onclick= function(){
    let val=document.getElementById("search").value;
    
    
    xhr.open("GET"," https://www.omdbapi.com/?t="+val+"&apikey=991f5dac");
    xhr.onloadend=postAjaxFunction;
    xhr.send();
};


let postAjaxFunction = function () {
    if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
            console.log(response);
            
            let Moviename=document.getElementById("Moviename");
            movie_name.innerHTML="movie name-"+response.Title;
            
            let Director=document.getElementById("Director");
            director_name.innerHTML="Director-"+response.Director;
            
            let Year=document.getElementById("year");
            year.innerHTML="Year-"+response.Year;
            
            let Rating=document.getElementById("Rating");
           Rating.innerHTML="Rating-"+response.Ratings[0].Value;
            
	
		
		
    } else {
        user.innerHTML = "Something went wrong.";
    }
};
