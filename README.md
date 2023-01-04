<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url] -->

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/alexgeis/SubTracker">
    <img src="./client/src/components/Images/logo3.png" alt="Logo" width="100" height="80">
  </a>

<h3 align="center">Cache Bandit</h3>

  <p align="center">
    Track all your subsctiptions in one place with ease with Cache Bandit! 
    <br />
    Cache Bandit is an easy to use application where you can input all the details to any subscription services you are currently subscribed to, and see them all in one place.
    <br />
    <a href="https://github.com/alexgeis/SubTracker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a class="deployed_link" href="https://subtracker.up.railway.app/">View Demo</a>
    ·
    <a href="https://github.com/alexgeis/SubTracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/alexgeis/SubTracker/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
<a class="deployed_link" href="https://subtracker.up.railway.app/">
<p align="center">
<img id="product-screenshot" src="./client/src/components/Images/Subscription-Tracker-screenshot.png" alt="Cache Bandit Homepage"
style="display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;"/></p></a>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Webpack](https://webpack.js.org/)
- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Node.js](https://nodejs.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
<!-- - [MySQL](https://www.mysql.com/)
- [JQuery](https://jquery.com) -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

<!-- PREREQ EXAMPLE
Packages used in this project: -->
<!-- - npm
- css-loader
- html-loader
- html-webpack-plugin
- style-loader
- webpack
- webpack-cli
- webpack-dev-server
  ```sh
  npm install npm@latest css-loader html-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server -g
  ``` -->

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alexgeis/SubTracker.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. DEVELOPMENT - run "npm start" to spin up the development server
   ```sh
   npm start
   ```
4. PRODUCTION - run "npm build" to bundle the page per the Webpack settings
   ```sh
   npm build
   ```

<!-- API EXAMPLE
1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/alexgeis/SubTracker.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ``` -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Useful examples of how a project can be used. Additional screenshots, code examples, demos, and/or links to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Better State Management --
      Currently page reloads are used to force new database queries. Updating state management to reduce the need for page reloads
- [ ] Validate against duplicate usernames
- [ ] Add logic to update due-dates --
      Right now, "Due Date" is a static field, and we'd like for it to update dynamically monthly or annual depending on the style of subscription
- [ ] Improved Dark Mode --  
       Dark mode currently effects some but not all elements
- [ ] Sort By due Date on Welcome page and Only Show Upcoming Expenses --
      Hide due dates that are >31 days in future
- [ ] Budget Tips --
      Utilize free API service to populate the user dashboard with randomized budgeting/financial advice

See the [open issues](https://github.com/alexgeis/SubTracker/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**.

Please try to create bug reports that are:

- _Reproducible_. Include steps to reproduce the problem.
- _Specific_. Include as much detail as possible: which version, what environment, etc.
- _Unique_. Do not duplicate existing opened issues.
- _Scoped_ to a Single Bug. One bug per report.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Alex Geis - siegxela@gmail.com

Project Link: [https://github.com/alexgeis/SubTracker](https://github.com/alexgeis/SubTracker)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Contributors:

- Tracye Wilhelm - [Github](https://github.com/tracyewilhelm)
- Austin Andrews - [Github](https://github.com/Capricious150)
- Maria Paterno - [Github](https://github.com/Paterma)
- Max Gorodesky - [Github](https://github.com/jmg5369)
- Alex Geis - [Github](https://github.com/alexgeis)

Helpful resources and kudos.

- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)
<!-- - [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [Markdown Studio](https://readme.so/editor)
- []()
- []() -->
<!-- - []() -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- [contributors-shield]: https://img.shields.io/github/contributors/alexgeis/SubTracker.svg?style=for-the-badge
[contributors-url]: https://github.com/alexgeis/SubTracker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alexgeis/SubTracker.svg?style=for-the-badge
[forks-url]: https://github.com/alexgeis/SubTracker/network/members
[stars-shield]: https://img.shields.io/github/stars/alexgeis/SubTracker.svg?style=for-the-badge
[stars-url]: https://github.com/alexgeis/SubTracker/stargazers -->

[issues-shield]: https://img.shields.io/github/issues/alexgeis/SubTracker.svg?style=for-the-badge
[issues-url]: https://github.com/alexgeis/SubTracker/issues
[license-shield]: https://img.shields.io/github/license/alexgeis/SubTracker.svg?style=for-the-badge
[license-url]: https://github.com/alexgeis/SubTracker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alexngeis
[product-screenshot]: images/screenshot.png
