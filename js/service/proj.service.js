'use strict'

const gProjects = _createProjects()
 
function _createProjects(){
    const publishedAt = formatDate(1448693940000)
    const desc = makeLorem() 
    return [
        {
            id: "touchNUM",
            name: "Touch Numbers",
            title: "Better touch those numbers",
            titleHe: 'כמה מהירים אתם חושבים שאתם?',
            desc,
            url: "https://github.com/LirazGanon/touch-number-game",
            publishedAt,
            category: 'Games',
            labels: ["Game", "javascript", "HTML"],
        },
        {
            id: "mineSweeper",
            name: "MineSweeper",
            title: "Better terminate those mines",
            titleHe: "זהירות! מוקשים בשטח זה",
            desc,
            url: "https://github.com/LirazGanon/Mine-Sweeper",
            publishedAt,
            category: 'Games',
            labels: ["Game", "javascript", "HTML"],
        },
        {
            id: "pacman",
            name: "Pacman",
            title: "Better eat those foods",
            titleHe: "אני רעב! עזרו לי לאכול את הכל",
            desc,
            url: "https://github.com/LirazGanon/pacman",
            publishedAt,
            category: 'Games',
            labels: ["Game", "javascript", "HTML"],
        },
        // {
        //     id: "inpic",
        //     name: "In Pic",
        //     title: "Better answer those questions",
        //     desc,
        //     url: "https://github.com/LirazGanon/inpic",
        //     publishedAt,
        //     category: 'Games',
        //     labels: ["Game", "javascript", "HTML"],
        // },
        {
            id: "todo",
            name: "Todo List",
            title: "Better done those TODOs",
            titleHe: "אל תדחו למחר מה שאפשר לעשות מחרתיים",
            desc,
            url: "https://github.com/LirazGanon/vanilla-todo",
            publishedAt,
            category: 'Apps',
            labels: ["MVC", "javascript", "HTML"],
        },
        {
            id: "guessme",
            name: "Guess ME",
            title: "Better guess this person",
            titleHe: "אני יכול לנחש כל אדם נסו אותי",
            desc,
            url: "https://github.com/LirazGanon/Guess-Me",
            publishedAt,
            category: 'Games',
            labels: ["tree", "javascript", "HTML"],
        },
        {
            id: "bookshop",
            name: "Books Shop App",
            title: "Better read those books",
            titleHe: "ספרים רבותיי! ספרים",
            desc,
            url: "https://github.com/LirazGanon/book-shop",
            publishedAt,
            category: 'Apps',
            labels: ["MVC", "javascript", "HTML"],
        },
        
    ]
}


function getProjs() {
    return gProjects
}