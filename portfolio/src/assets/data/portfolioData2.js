import portfolioImg01 from "../images/portfolio-images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-images/portfolio-02.png";
import portfolioImg03 from "../images/portfolio-images/portfolio-03.png";
import portfolioImg04 from "../images/portfolio-images/portfolio-04.png";
import portfolioImg05 from "../images/portfolio-images/portfolio-05.png";

const portfolios = [
    {
        id: "05",
        imgUrl: portfolioImg05,
        category: "Elementary",
        title: "Fandango Movie Tickets",
        description: "Simple site that utilises an api for updating movie tickets and access to movie details.",
        technologies: ["HTML", "CSS", "Javascript"],
        siteUrl: "https://babamboga.github.io/Weekly-code-challenge/",
    },
    {
        id: "04",
        imgUrl: portfolioImg04,
        category: "Elementary",
        title: "Simple Server Responses",
        description:"Server reponses have been mirrored.",
        technologies: ["HTML","CSS","Javascript"],
        siteUrl: "https://babamboga.github.io/phase-1-stitching-together-the-three-pillars/",
    }, 
    {
        id: "03",
        imgUrl: portfolioImg03 ,
        category: "Elementary",
        title: "Moving Block",
        description:"Using the arrow keys one is able to move the block within the specified space on screen and change colour per corresponding direction.",
        technologies: ["HTML","CSS","Javascript"],
        siteUrl: "https://babamboga.github.io/phase-0-javascript-events-acting-on-events-lab/",
    },
    {
        id: "02",
        imgUrl: portfolioImg02,
        category: "Elementary",
        title: "Riyadh Blog",
        description:"It is a mockup of a potential blog webpage",
        technologies: ["HTML","CSS"],
        siteUrl: "https://babamboga.github.io/phase-0-html-riyadh-blog-lab/",
    },
    {
        id: "01",
        imgUrl: portfolioImg01,
        category: "Elementary",
        title:"Album Cover",
        description:"It is a simple album cover design based on the requirements and resources provided by the client. It showcases typical industry standard workflow.",
        technologies: ["HTML","CSS"],
        siteUrl: "https://babamboga.github.io/phase-0-html-album-cover-lab/",
    },
];

export default portfolios;