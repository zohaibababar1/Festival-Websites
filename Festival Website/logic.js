const artists = [
  {
    name: "A.R Rahman",
    photo1: "assets/ar3.jpg",
    photo2: "assets/ar2.jpg",
    times: "Friday, 2pm to 7pm",
    genre: "Classical",
    popularSong: "Jashn-e-bahara"
  },
  {
    name: "Shreya Ghosal",
    photo1: "assets/sg2.jpg",
    photo2: "assets/sg1.jpg",
    times: "Saturday, 3pm to 7pm",
    genre: "Classical & Pop",
    popularSong: "Kar har maidaan fateh"
  },
  {
    name: "Rahat Fateh Ali Khan",
    photo1: "assets/rf1.jpg",
    photo2: "assets/rf2.jpg",
    times: "Saturday, 6pm to 9pm",
    genre: "Classical",
    popularSong: "Jag soona soona laage"
  },
  {
    name: "Atif Aslam",
    photo1: "assets/atifnew.jpg",
    photo2: "assets/atif1.jpg",
    times: "Tuesday, 2pm to 6pm",
    genre: "Classical & Rock",
    popularSong: "Rabba"
  },
  {
    name: "Arijit singh",
    photo1: "assets/arijit2.jpg",
    photo2: "assets/arijitnew.jpg",
    times: "Wednesday, 2pm to 5pm",
    genre: "Classical & folk",
    popularSong: "Saadi Gali Aja"
  },
  {
    name: "Salim Merchant",
    photo1: "assets/salim2.jpeg",
    photo2: "assets/salim1.jpg",
    times: "Tuesday, 3pm to 6pm",
    genre: "Classical & folk",
    popularSong: "Tere Bina"
  }
  ];
  
  function populateArtistDetails() {
   

    const container = document.getElementById("artist-container");

  artists.forEach(artist => {
    const card = document.createElement("div");
    card.className = "artist-card";

    const image = document.createElement("img");
    image.src = artist.photo1;
    image.alt = artist.name;
    image.className = "artist-image";
    image.addEventListener('mouseenter', () => {
      image.src = artist.photo2; 
    });
    image.addEventListener('mouseleave', () => {
      image.src = artist.photo1; 
    });

    const name = document.createElement("h3");
    name.textContent = artist.name;
    name.className = "artist-name";

    const times = document.createElement("p");
    times.style.fontSize="20px";
    times.textContent = `Performance Times: ${artist.times}`;

    const genre = document.createElement("p");
    genre.style.fontSize="16px";
    genre.textContent = `Genre: ${artist.genre}`;

    const popularSong = document.createElement("p");
    popularSong.style.fontSize="16px";
    popularSong.textContent = `Popular Song: ${artist.popularSong}`;

    const bookButton = document.createElement('button');
    bookButton.className = "book-button";
    bookButton.textContent = "Book ticket";

    bookButton.addEventListener('click', () => {
      window.location.href = 'buyticket.html';
    });
    

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(times);
    card.appendChild(genre);
    card.appendChild(popularSong);
   
    card.appendChild(bookButton);
    

    container.appendChild(card);
  });
  }
  document.addEventListener("DOMContentLoaded", populateArtistDetails);
  