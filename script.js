/* General Styles */
body {
    background-color: #0a0a0a;
    color: #ffffff;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}

/* Navigation Bar */
nav {
    background-color: #000;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    transition: color 0.3s;
}

nav a:hover {
    color: #00bcd4;
}

/* Hero Section */
.hero {
    background-image: url('adas_hero.png');
    background-size: cover;
    background-position: center;
    text-align: center;
    padding: 120px 20px;
    color: #ffffff;
}

.hero h1 {
    font-size: 3rem;
    margin: 0;
}

.hero p {
    font-size: 1.2rem;
    margin-top: 10px;
}

/* About Section */
.about-section {
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-section h2 {
    font-size: 2.5rem;
    color: #00bcd4;
    margin-bottom: 20px;
}

.about-section .content {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    gap: 40px;
    align-items: center;
}

.about-section .image-container img {
    border-radius: 10px;
    max-width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.about-section .text-container {
    max-width: 600px;
    line-height: 1.6;
}

/* Skills Section */
.skills-section {
    padding: 60px 20px;
    background-color: #111;
}

.skills-section h2 {
    font-size: 2.5rem;
    color: #00bcd4;
    text-align: center;
    margin-bottom: 30px;
}

.skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.skill {
    text-align: center;
    width: 200px;
}

.skill-name {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.progress-bar-container {
    background-color: #333;
    border-radius: 5px;
    overflow: hidden;
    height: 10px;
}

.progress-bar {
    background-color: #00bcd4;
    height: 100%;
    width: 0;
    transition: width 2s;
}

/* Works Section */
.works-section {
    padding: 60px 20px;
    text-align: center;
}

.works-section h2 {
    font-size: 2.5rem;
    color: #00bcd4;
    margin-bottom: 30px;
}

.projects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
}

.project {
    background-color: #222;
    border-radius: 10px;
    padding: 20px;
    max-width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    flex: 1;
}

.project h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 10px;
}

.project p {
    font-size: 1rem;
    color: #aaa;
    line-height: 1.5;
}

/* Contact Section */
.connect-section {
    padding: 60px 20px;
    text-align: center;
    background-color: #000;
}

.connect-section h2 {
    font-size: 2.5rem;
    color: #00bcd4;
    margin-bottom: 30px;
}

.icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}

.icons img {
    width: 40px;
    transition: transform 0.3s;
}

.icons img:hover {
    transform: scale(1.2);
}

form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

form input, form textarea {
    padding: 10px;
    border: 2px solid #333;
    background-color: #111;
    color: #fff;
    font-size: 1rem;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s;
}

form input:focus, form textarea:focus {
    border-color: #00bcd4;
}

form button {
    padding: 10px 20px;
    background-color: #00bcd4;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

form button:hover {
    background-color: #008ba3;
}

/* Footer */
.footer {
    text-align: center;
    padding: 20px;
    color: #888;
    background-color: #000;
}
