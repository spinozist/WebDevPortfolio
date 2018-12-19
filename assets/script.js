$(document).ready(function () {
    // $('.parallax').parallax();
    $(`.collapsible`).collapsible();

    var App = [
        {
            Title : "Search for Meaning",
            URL : "../Word-Guess-Game/",
            Info : "This simple word guess game represents my first attempt at writing JavaScript.",
            Image : "hangman_image.png"
        },
        {
            Title : "Witch Hunt",
            URL : "../TriviaGame/",
            Info : "This trivia game is a single-page web application including a timer, hover-over effects, and a bit of dark humor.",
            Image : "trivia_image.png"
        },
        {
            Title : "NY Times Search",
            URL : "../NYTimesSearch",
            Info : "Using a public API, this JavaScript tool enables the easy querying of New York Times articles from 1960 to the present.",
            Image : "NYTime Search.png"
        },
        {
            Title : "Crystal Collector",
            URL : "../unit-4-game",
            Info : "This is a totally random time-wasting single-page game built using JavaScript.",
            Image : "crystal_collector_image.png"
        },
        {
            Title : "Multiuser Noise Manipulator",
            URL : "https://haydest.github.io/noise-project/",
            Info : "A single-page touch and trackpad interface for creating noise by yourself or with other users.  This app utilizes Materialize (CSS) and Firebase (Realtime Database).",
            Image : "noise.png"
        }
    ];

    var rowDiv = $(`<div>`);
    rowDiv.attr(`class`,`row`);

    for (i = 0; i < App.length; i++) {  

        var colDiv = $(`<div>`);
        colDiv.attr(`class`, `col m6 s12 l4`)
            .append(`
            <div class="card #cfd8dc blue-grey lighten-4 z-depth-2">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="assets/images/${App[i].Image}">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                        ${App[i].Title}
                    </span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons center">close</i><br>${App[i].Title}</span>
                    <p>This simple word guess game represents my first attempt at writing JavaScript.</p>
                    <a href="${App[i].URL}"><i class="material-icons center">
                            arrow_forward_ios
                            </i></a>                                  
                </div>
            </div>
            `);
        rowDiv.append(colDiv);
    };

    $(`#portfolio-cards`).append(rowDiv);
});




