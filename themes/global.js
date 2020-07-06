import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
}

body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
}

a {
    color: ${({ theme }) => theme.link};
    font-family: 'PT Serif', serif;
    text-decoration: none;

}

a:hover {
    text-decoration: underline;
}

p {
    color: $font-color;
    font-family: 'PT Serif', serif;
    text-decoration: none;
}

h1, h2, h3, h4 {
    font-family: 'Rakkas', cursive;
}

.face {
    border-radius: 100px;
    border-style: solid;
    border-width: medium;
    border-color: ${({ theme }) => theme.link};
}

.container {
    padding-top: 20rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.menuList {
    display: flex;
    flex-direction: row; 
}

.menuList li {
    list-style: none;
    padding-right: 2rem;
}

.gallery .card {
    margin-bottom: 4rem;
}

.card {
    background-color: ${({ theme }) => theme.card};
    border-radius: 10px;
    display: grid;
    padding: 2rem;
    grid-template-columns: 15rem 5rem 5rem;
    grid-template-rows: 2rem 10rem;
    grid-template-areas: 
        "image title title"
        "image text text";
}

.card img {
    padding-top: 1rem;
}

.card h2 {
    grid-area: title;
}

.card p {
    grid-area: text;
}

.layout {
    display: flex;
    position: fixed;
    flex-direction: row;
    float: top;
}

.homeButton {
    margin: 1rem;
    position: fixed;
    top: 0px;
    left: 0px; 
}

.darkMode {
    margin: 1rem;
    position: fixed;
    top: 0px;
    right: 0px; 
}

@media screen and (max-width: 600px) {
    .container {
        padding-top: 13rem;
    }
}

`