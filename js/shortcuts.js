// JSON variable with multiple image entries
const shortcutData = [
    {
        "url": "http://facebook.com/",
        "imgSrc": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg",
        "alt": "Facebook"
    },
    {
        "url": "http://twitter.com/",
        "imgSrc": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
        "alt": "Twitter"
    },
    {
        "url": "http://tumblr.com/",
        "imgSrc": "images/shortcuts/tumbler.png",
        "alt": "Tumblr"
    },
    {
        "url": "http://youtube.com/",
        "imgSrc": "images/shortcuts/youtube.png",
        "alt": "YouTube"
    },
    {
        "url": "http://google.com/",
        "imgSrc": "images/shortcuts/google.png",
        "alt": "Google"
    },
    {
        "url": "http://gmail.com/",
        "imgSrc": "images/shortcuts/gmail.png",
        "alt": "Gmail"
    },
    {
        "url": "http://yahoo.com/",
        "imgSrc": "images/shortcuts/yahoo.png",
        "alt": "Yahoo"
    },
    {
        "url": "#",
        "imgSrc": "images/shortcuts/online_video_converter.png",
        "alt": "Online Video Converter"
    },
    {
        "url": "http://mybiscast.com/",
        "imgSrc": "images/shortcuts/biscast_asteans.png",
        "alt": "Biscast Asteans"
    },
    {
        "url": "https://icloudph.com/biscast/sias/",
        "imgSrc": "images/shortcuts/biscast.png",
        "alt": "Biscast"
    },
    {
        "url": "#",
        "imgSrc": "images/shortcuts/subscript_superscript_converter.png",
        "alt": "Subscript Superscript Converter"
    },
    {
        "url": "https://www3.nhk.or.jp/nhkworld/en/live/",
        "imgSrc": "images/shortcuts/nhk_world_tv.jpg",
        "alt": "NHK World TV"
    }
];

let cardContent = ""; // Initialize the variable to store all card content

// Loop through the shortcutData array and create each image
shortcutData.forEach(data => {
    cardContent += `
        <a class="shortcut-link" href="${data.url}" target="_blank">
            <img class="shortcut-img" src="${data.imgSrc}" alt="${data.alt}">
        </a>
    `;
    document.getElementById('shortcuts').innerHTML = cardContent;
});
