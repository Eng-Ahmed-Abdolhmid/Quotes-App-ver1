var list = [
    { quote: " “The way to get started is to quit talking and begin doing.” ", author: " ― Walt Disney " },
    { quote: " “Don’t let yesterday take up too much of today.” ", author: " ― Will Rogers " },
    { quote: " “You learn more from failure than from success. Don’t let it stop you. Failure builds character.” ", author: " ― Unknown " },
    { quote: " “It’s not whether you get knocked down, it’s whether you get up.” ", author: " ― Vince Lombardi " },
    { quote: " “People who are crazy enough to think they can change the world are the ones who do.” ", author: " ― Rob Siltanen " },
    { quote: " “Knowing is not enough; we must apply. Wishing is not enough; we must do.” ", author: " ― Johann Wolfgang Von Goethe " },
    { quote: " “We generate fears while we sit. We overcome them by action.” ", author: " ― Dr. Henry Link " },
    { quote: " “Whether you think you can or think you can’t, you’re right.” ", author: " ― Henry Ford " },
    { quote: " “Security is mostly a superstition. Life is either a daring adventure or nothing.” ", author: " ― Helen Keller " },
    { quote: " “The man who has confidence in himself gains the confidence of others.” ", author: " ― Hasidic Proverb " },
    { quote: " “Do what you can with all you have, wherever you are.” ", author: " ― Theodore Roosevelt " },
    { quote: " “What you get by achieving your goals is not as important as what you become by achieving your goals.” ", author: " ― Zig Ziglar " },
    { quote: " “You are never too old to set another goal or to dream a new dream.” ", author: " ― C.S. Lewis " },
    { quote: " “To see what is right and not do it is a lack of courage.” ", author: " ― Confucius " },
    { quote: " “Reading is to the mind, as exercise is to the body.” ", author: " ― Brian Tracy " },
    { quote: " “The only limit to our realization of tomorrow will be our doubts of today.” ", author: " ― Franklin D. Roosevelt " },
    { quote: " “Creativity is intelligence having fun.” ", author: " ― Albert Einstein " },
    { quote: " “Do what you feel in your heart to be right – for you’ll be criticized anyway.” ", author: " ― Eleanor Roosevelt " },
    { quote: " “The only way to achieve the impossible is to believe it is possible.” ", author: " ― Charles Kingsleigh " },
    { quote: " “Act as if what you do makes a difference. It does.” ", author: " ― William James " }
];


var quote = document.getElementById('quote');
var author = document.getElementById('author');
var lastCounter = -1;

function quoteOutput() {
    var counter;
    do {
        counter = Math.floor(Math.random() * list.length); 
    } while (counter === lastCounter); 
    lastCounter = counter;
    quote.innerHTML = `${list[counter].quote}`;
    author.innerHTML = `${list[counter].author}`;
}
