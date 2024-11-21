const searchbtn = document.querySelector('.searchbtn');
const entertext = document.querySelector('.entertext');
const movieposter = document.querySelector('.movieposter');

const getMovieInfo = async (movieTitle) => {
	try {
		const myAPIkey = 'e69e0e0';
		const url = `https://www.omdbapi.com/?apikey=${myAPIkey}&t=${encodeURIComponent(movieTitle)}`;

		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		console.log(data);
		// Check if the movie was found
		if (data.Response === 'False') {
			movieposter.innerHTML = `<p>Error: ${data.Error}</p>`; // Display error message
			return; // Exit the function if the movie is not found
		}

		moviedata(data);
	} catch (error) {
		Showerror("No movie Found! Bro");
	}
};

const moviedata = (data) => {
	const { Released, Runtime, Title, imdbRating, Poster, Plot, Language, Director, Country, Awards, Genre } = data;
	const Moviepage = document.createElement('div');
	Moviepage.className = 'nn';
	Moviepage.innerHTML = `

	<div class="posterimg">
					<img
						src="${Poster}"
						alt=""
					/>

				<strong><h2>${Title}</h2></strong>
				</div>
				<div class="postertext">
				<div class="head">


				</div>


					<p>Released : ${Released}</p>
					<p>IMDb Rating : ⭐${imdbRating}</p>
					<p>Runtime : ${Runtime}</p>
					<p>Language : ${Language}</p>
					<p>Director : ${Director}</p>
					<p>Country : ${Country}</p>
					<p>Awards : ${Awards}</p>
					<p>Plot : ${Plot}</p>
				</div>
    `;

	const Moviegenere = document.createElement('div');
	Moviegenere.className = 'genere';
	Genre.split(', ').forEach((e) => {
		const spann = document.createElement('span');
		spann.innerHTML = e;
		Moviegenere.appendChild(spann);
	});
	Moviepage.appendChild(Moviegenere);
	movieposter.innerHTML = ''; // Clear previous results
	movieposter.appendChild(Moviepage);
};
const Showerror = (message) => {
	movieposter.innerHTML = `<p>${message}</p>`;
};
searchbtn.addEventListener('click', (e) => {
	e.preventDefault();
	const searchedname = entertext.value.trim();
	if (searchedname !== '') {
		getMovieInfo(searchedname);
	} else {
		// Prompt user to enter a title
		Showerror('Please enter a movie title.');
	}
});






// const moviedata = (data) => {
// 	const { Released, Runtime, Title, imdbRating, Poster, Plot, Language, Director, Country, Awards, Genre } = data;
// 	const Moviepage = document.createElement('div');
// 	Moviepage.className = 'nn shimmer'; // Added shimmer class
// 	Moviepage.innerHTML = `
// 	<div class="posterimg">
// 		<img
// 			src="${Poster}"
// 			alt=""
// 		/>
// 		<strong><h2>${Title}</h2></strong>
// 	</div>
// 	<div class="postertext">
// 		<div class="head">
// 		</div>
// 		<p>Released : ${Released}</p>
// 		<p>IMDb Rating : ⭐${imdbRating}</p>
// 		<p>Runtime : ${Runtime}</p>
// 		<p>Language : ${Language}</p>
// 		<p>Director : ${Director}</p>
// 		<p>Country : ${Country}</p>
// 		<p>Awards : ${Awards}</p>
// 		<p>Plot : ${Plot}</p>
// 	</div>
//     `;

// 	// Add CSS for shimmer effect
// 	const style = document.createElement('style');
// 	style.textContent = `
// 	.shimmer {
// 		position: relative;
// 		overflow: hidden;
// 	}
// 	.shimmer::before {
// 		content: '';
// 		position: absolute;
// 		top: 0;
// 		left: -100%;
// 		width: 100%;
// 		height: 100%;
// 		background: linear-gradient(
// 			90deg,
// 			rgba(255,255,255,0) 0%,
// 			rgba(255,255,255,0.2) 50%,
// 			rgba(255,255,255,0) 100%
// 		);
// 		animation: shimmerEffect 1.5s infinite;
// 	}
// 	@keyframes shimmerEffect {
// 		0% {
// 			left: -100%;
// 		}
// 		100% {
// 			left: 100%;
// 		}
// 	}
// 	`;
// 	document.head.appendChild(style);

// 	const Moviegenere = document.createElement('div');
// 	Moviegenere.className = 'genere';
// 	Genre.split(', ').forEach((e) => {
// 		const spann = document.createElement('span');
// 		spann.innerHTML = e;
// 		Moviegenere.appendChild(spann);
// 	});
// 	Moviepage.appendChild(Moviegenere);

// 	// Remove shimmer class after content is loaded
// 	setTimeout(() => {
// 		Moviepage.classList.remove('shimmer');
// 	}, 1500);

// 	movieposter.innerHTML = ''; // Clear previous results
// 	movieposter.appendChild(Moviepage);
// };
