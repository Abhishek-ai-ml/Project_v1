 const data = [
  {
    Id: 1,
    Title: "Tu Jhooti Mai Makkaar",
    Genre: ["Comedy", "Romantic"],
    Languages: ["Hindi"],
    Dimension: ["2D"],
    RunTime: 159,
    About: "Madness ensues when a `player` in the world of romantic relationships finds a girl who`s a worthy opponent. Tu Jhoothi Main Makkaar is a film that believes love is a battle of wits.",
    Casts: [5, 6, 7, 8],
    Poster: "https://drive.google.com/uc?id=16d5x6DHRF_hRvfb0SU2hZC4WzhWJahgm"
  },
  {
    Id: 2,
    Title: "Shazam! Fury of the Gods",
    Genre: ["Action", "Adventure", "Fantasy"],
    Languages: ["Hindi", "English", "Tamil", "Telugu"],
    Dimension: ["2D","4DX","ICE","MX4D","IMAX 2D"],
    RunTime: 130,
    About: "Billy Batson and his foster siblings, who transform into superheroes by saying 'Shazam!', are forced to fight the Daughters of Atlas, who are using a weapon that could destroy the world.",
    Casts: [9, 10, 11, 12],
    Poster: "https://drive.google.com/uc?id=12OalsQ1RC2nGQd7uhImxOriuAtLb1ALW"
  },
  {
    Id: 3,
    Title: "The Pope's Exorcist",
    Genre: ["Horror", "Thriller"],
    Languages: ["Hindi","English","Tamil","Telugu"],
    Dimension: ["2D","MX4D"],
    RunTime: 105,
    About: "Inspired by the actual files of Father Gabriele Amorth, Chief Exorcist of the Vatican (Academy Award-winner Russell Crowe), The Pope`s Exorcist follows Amorth as he investigates a young boys terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    Casts: [13, 14, 15],
    Poster: "https://drive.google.com/uc?id=1Br7r2O8o577TbvASUbaaigb6yJoG_4ov"
  },
  {
    Id: 4,
    Title: "The Super Mario Bros. Movie",
    Genre: ["Adventure", "Animation"],
    Languages: ["Hindi","English"],
    Dimension: ["2D","ICE 3D","MX4D 3D","4DX 3D","IMAX 3D","3D"],
    RunTime: 92,
    About: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.",
    Casts: [16, 17, 18, 19],
    Poster: "https://drive.google.com/uc?id=1z63NkUVAkBaaZhfZ_KIYJGYp3c3cJQSy"
  },
  {
    Id: 5,
    Title: "John Wick: Chapter 4",
    Genre: ["Action", "Thriller"],
    Languages: ["Hindi","English","Tamil", "Telugu"],
    Dimension: ["2D","ICE","MX4D","4DX","IMAX 2D"],
    RunTime: 171,
    About: "John Wick (Keanu Reeves) takes on his most lethal adversaries yet in the upcoming fourth installment of the series. With the price on his head ever increasing, Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Osaka to Berlin.",
    Casts: [20, 21, 22, 23],
    Poster: "https://drive.google.com/uc?id=1aErH02JRFv0PQWXPHDZ8dvNPKPvGPJMs"
  },
  {
    Id: 6,
    Title: "Gumraah",
    Genre: ["Crime", "Thriller"],
    Languages: ["Hindi"],
    Dimension: ["2D"],
    RunTime: 130,
    About: "The murder investigation of a young man , takes an unexpected turn when the cops discover that the prime suspect has a lookalike.",
    Casts: [24,25,26],
    Poster: "https://drive.google.com/uc?id=1te6RprI8k5RPYNkBNySQpzjVR0y0RmJ8"
  },
  {
    Id: 7,
    Title: "Dungeons and Dragons: Honor Among Thieves",
    Genre: ["Action", "Adventure","Fantasy"],
    Languages: ["Hindi","English", "Tamil", "Telugu"],
    Dimension: ["2D","ICE","MX4D","4DX","IMAX 2D","2D SCREEN X"],
    RunTime: 135,
    About: "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people. Dungeons & Dragons: Honor Among Thieves brings the rich world and playful spirit of the legendary roleplaying game to the big screen in a hilarious and action-packed adventure.",
    Casts: [27, 28, 29, 30],
    Poster: "https://drive.google.com/uc?id=1Aehm2mUDze1qQWUFVrDovx-tFCSORDzY"
  },
  {
    Id: 8,
    Title: "Dasara",
    Genre: ["Action", "Adventure","Drama"],
    Languages: ["Hindi","Malayalam", "Kannada", "Tamil", "Telugu"],
    Dimension: ["2D"],
    RunTime: 156,
    About: "Dharani (Nani), Suri (Deekshith Shetty) and Vennela (Keerthy Suresh) are friends since childhood. Their lives are upended for reasons far beyond their control and they will never be the same.",
    Casts: [31, 32, 33, 34],
    Poster: "https://drive.google.com/uc?id=12AXfyPZ4GEMu-99qzIRaw5XHR9ejxIkn"
  },
  {
    Id: 9,
    Title: "Mrs. Chatterjee Vs Norway",
    Genre: ["Biography", "Drama"],
    Languages: ["Hindi"],
    Dimension: ["2D"],
    RunTime: 156,
    About: "Mrs. Chatterjee`s fight against an entire nation to reunite with her children is now Desh Ka Matter.",
    Casts: [35, 36, 37, 38],
    Poster: "https://drive.google.com/uc?id=1afJk-RrhXUyzEB5tSTTpIC-QD5lyWjJq"
  },
  {
    Id: 10,
    Title: "Bholaa",
    Genre: ["Action", "Drama", "Thriller"],
    Languages: ["Hindi"],
    Dimension: ["2D", "ICE 3D", "IMAX 3D", "4DX 3D", "3D"],
    RunTime: 145,
    About: "Bholaa, a prisoner, is finally going home after 10 years of imprisonment to meet his young daughter. His journey gets difficult when he is arrested mid-way. At first, he is not aware of the grave situation he has got himself into but after a crazy incident takes place, he must travel a pathway full of crazy obstacles with death lurking around every corner. Will he get to meet his daughter?",
    Casts: [1,2,3,4],
    Poster: "https://drive.google.com/uc?id=1grxlDdU3w-0dRF28DPbWVAKdxSvJGwPo"
  }
];

export default data;