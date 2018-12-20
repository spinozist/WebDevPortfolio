$(document).ready(function () {
    // $('.parallax').parallax();
    $(`.collapsible`).collapsible();

    var AppCard = [
        {
            Title : "Search for Meaning",
            URL : "../Word-Guess-Game/",
            Info : "This simple word guess game represents my first attempt at writing JavaScript.",
            Image : "hangman_image.png",
        },
        {
            Title : "Witch Hunt",
            URL : "../TriviaGame/",
            Info : "This trivia game is a single-page web application including a timer, hover-over effects, and a bit of dark humor.",
            Image : "trivia_image.png",
        },
        {
            Title : "NY Times Search",
            URL : "../NYTimesSearch/",
            Info : "Using a public API, this JavaScript tool enables the easy querying of New York Times articles from 1960 to the present.",
            Image : "NYTime Search.png",
        },
        {
            Title : "Crystal Collector",
            URL : "../unit-4-game",
            Info : "This is a totally random time-wasting single-page game built using JavaScript.",
            Image : "crystal_collector_image.png",
        },
        {
            Title : "Multiuser Noise Manipulator",
            URL : "https://haydest.github.io/noise-project/",
            Info : "A single-page touch and trackpad interface for creating oscilator:noise by yourself or with other users.  This app utilizes Materialize (CSS) and Firebase (Realtime Database).",
            Image : "noise.png",
        },
        {
            Title : "Friend Finder",
            URL : "https://friendfinder-by-erik.herokuapp.com/",
            Info : "Built using NodeJS's Expess npm for sever-side API and HTML routing, this application pairs a user with a previous user based on survey response similarities.",
            Image : "info_image.jpeg",
        }
    ];

    var rowDiv = $(`<div>`);
    rowDiv.attr(`class`,`row`);

    for (i = 0; i < AppCard.length; i++) {  

        var colDiv = $(`<div>`);
        colDiv.attr(`class`, `col m6 s12 l4`)
            .append(`
            <div class="card #cfd8dc blue-grey lighten-4 z-depth-2">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="assets/images/${AppCard[i].Image}">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                        ${AppCard[i].Title}
                    </span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons center">close</i><br>${AppCard[i].Title}</span>
                    <p>${AppCard[i].Info}</p>
                    <a href="${AppCard[i].URL}" target="_blank"><i class="material-icons center">
                            arrow_forward_ios
                            </i></a>                                  
                </div>
            </div>
            `);
        rowDiv.append(colDiv);
    };

    $(`#portfolio-cards`).append(rowDiv);
});




