
var gTrans = {
    'header-secondary-title': {
        en: 'Welcome To my Portfolio',
        he: 'ברוכים הבאים לפורטפוליו שלי'
    },
    'header-main-title': {
        en: 'It\'s Nice To Meet You',
        he: 'נעים להכיר אותך!'
    },
    'tell-me-more': {
        en: 'Tell Me More',
        he: 'ספר לי עוד'
    },
    'specialities': {
        en: 'Specialities',
        he: 'מיומנויות'
    },
    'specialities-desc': {
        en: 'Lorem ipsum dolor sit amet consectetur.',
        he: 'אז מה אני יודע לעשות?'
    },
    'javascript-desc': {
        en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architectoquo inventore harum exmagni, dicta impedit.',
        he: 'ג\'אווה סקריפט ואוו איזה יופי זה מדהים ואוו ואתרים והכל ופוקי'
    },
    'react-desc': {
        en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architectoquo inventore harum exmagni, dicta impedit.',
        he: 'ריאקט ואוו איזה יופי זה מדהים ואוו ואתרים והכל ופוקי'
    },
    'vue-desc': {
        en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architectoquo inventore harum exmagni, dicta impedit.',
        he: 'ויו ואוו איזה יופי זה מדהים ואוו ואתרים והכל ופוקי'
    },
    'portfolio': {
        en: 'Portfolio',
        he: 'תיק עבודות'
    },
    'portfolio-desc': {
        en: 'Lorem ipsum dolor sit amet consectetur.',
        he: 'מוזמנים להיכנס ולהתרשם מהפרוייקטים שלי'
    },
    'portfolio-desc': {
        en: 'Lorem ipsum dolor sit amet consectetur.',
        he: 'מוזמנים להיכנס ולהתרשם מהפרוייקטים שלי'
    },
    'touchNUM-title': {
        en: 'Lorem ipsum dolor sit amet consectetur.',
        he: 'מוזמנים להיכנס ולהתרשם מהפרוייקטים שלי'
    },
    'about-me': {
        en: `Hi, I am Liraz!
        I own a Hummus place, really love to code and solve problems.
        Contact me if you are hungry :)`,
        he: `היי אני לירז!
        אני בעלים של חומוסייה, מאוד אוהב קוד ולפתור בעיות.
         צרו איתי קשר אם אתם רעבים :)`
    },
    'me': {
        en: 'Me',
        he: 'הכירו אותי'
    },
    'contact': {
        en: 'Contact',
        he: 'צרו קשר'
    },
    'contact-me': {
        en: 'Contact Me',
        he: 'צרו קשר'
    },
    'contact-me-desc': {
        en: `Do you have any questions?
        Please do not hesitate to contact me.`,
        he:` יש לכם שאלות?
        תרגישו חופשי לדבר איתי.`
    },
    'your-name': {
        en: 'Your name',
        he: 'שם מלא'
    },
    'your-email': {
        en: 'Your email',
        he: 'אימייל'
    },
    'subject': {
        en: 'Subject',
        he: 'נושא הפנייה'
    },
    'message': {
        en: 'Your message',
        he: 'תוכן הפנייה'
    },
    'send': {
        en: 'Send',
        he: 'שלח'
    },
    'liraz-name': {
        en: 'Liraz Ganon',
        he: 'לירז גנון'
    },
    'liraz-title': {
        en: 'Lead Falafel Team',
        he: 'מוביל צוות פלאפל'
    },
}


let gCurrLang = 'en'

var gTransProj = getTransProj()
gTrans = { ...gTrans, ...gTransProj }
console.log(gTrans)

function getTransProj() {
    const transProj = {}
    gProjects.forEach((proj) => {
        transProj[`${proj.id}-title`] = {
            en: proj.title,
            he: proj.titleHe
        }
    })

    return transProj
}

function getTrans(transKey) {
    const transMap = gTrans[transKey]
    if (!transMap) return 'UNKNOWN'

    let trans = transMap[gCurrLang]
    if (!trans) trans = transMap.en
    return trans
}

function doTrans() {
    const els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        el.classList.toggle('he-font')
        const transKey = el.dataset.trans
        const trans = getTrans(transKey)
        el.innerText = trans
        if (el.placeholder) el.placeholder = trans
    })

}

function setLang() {
    if (gCurrLang === 'en') gCurrLang = 'he'
    else gCurrLang = 'en'
}
