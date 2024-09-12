// call to all sections of portfolio

const headerSection = document.querySelector('#header-section');
const heroSection = document.querySelector('#hero-section');
const aboutMeSection = document.querySelector('#about-me');
const contactFormSection = document.querySelector('#contactform');
const footerSection = document.querySelector('#footer-id');

// Open mobile popup menu

function displayPopUp() {
  const popUpMenu = document.querySelector('#popup-menu-id');
  popUpMenu.style.display = 'block';
  popUpMenu.style.right = 0;
}

// close mobile popup menu

function closePopUp() {
  const popUpMenu = document.querySelector('#popup-menu-id');
  popUpMenu.style.right = '-23em';
  popUpMenu.style.display = 'none';
}

// workinfo object

const workInfo1 = {
  myRecentPr: 'My Recent Projects',
  seeProject: 'See Project',
  bgImg: './images/deepfake.png',
  prTitle1: 'DeepFake Face Detector',
  prTitle2: 'Deepfake Detector',
  prDesc: 'This project addresses the challenge of detecting deepfake images through the implementation of a robust deepfake detection system.',
  techList: ['Python', 'Pytorch', 'facenet_pytorch', 'cv2(OpenCV)', 'pytorch_grad_cam', 'gradio', 'PIL'],
};

const workInfo2 = {
  myRecentPr: 'Click Match game',
  seeProject: 'See Project',
  bgImg: './images/clickMatch.png',
  prTitle1: 'Click Match game',
  prTitle2: 'Click Match game',
  prDesc: 'The main purpose of this game is to train your brain and improve your memory',
  techList: ['HTML', 'CSS', 'Javascript', 'ES6'],
};

const workInfo3 = {
  myRecentPr: 'Weather Forecasting using GUI',
  seeProject: 'See Project',
  bgImg: './images/weather.png',
  prTitle1: 'Platform to access weather forecasts based on city names.',
  prTitle2: 'Weather Forecasting using GUI',
  prDesc: 'The project "Weather Forecasting using GUI" seeks to bridge this gap by offering a user-friendly and efficient weather forecasting tool integrated within a graphical interface.',
  techList: ['Python', 'Tkinter', 'Requests Library', 'OpenWeatherMap API'],
};

const workInfo4 = {
  myRecentPr: 'To do List',
  seeProject: 'See Project',
  bgImg: 'https://as1.ftcdn.net/v2/jpg/01/10/01/90/1000_F_110019055_JBbr778hMxpwuwDaFszyQNck5PhBYHli.jpg',
  prTitle1: 'To do list- To list daily tasks',
  prTitle2: 'To do list',
  prDesc: '[To Do List] is a web app. for learning ES6 modules and webpack, and it is a simple website that displays a list of To do tasks and allows you to add and remove tasks from that list.',
  techList: ['HTML', 'CSS', 'Javascript', 'React & Redux'],
};

const workInfo5 = {
  myRecentPr: 'AwsomeBooks list with Featured',
  seeProject: 'See Project',
  bgImg: 'https://as1.ftcdn.net/v2/jpg/03/48/20/04/1000_F_348200441_L3i2pC92h5B19DeaF5YBamm5OEkx68ZH.jpg',
  prTitle1: 'AwsomeBooks',
  prTitle2: 'AwsomeBooks',
  prDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  techList: ['HTML', 'CSS', 'Javascript', 'React & Redux'],
};

const workInfo6 = {
  myRecentPr: 'Exhibition Page',
  seeProject: 'See Project',
  bgImg: 'https://as1.ftcdn.net/v2/jpg/01/89/52/90/1000_F_189529054_DSwYiU4qFiy6nvdkvclXNKVY8lkj10n4.jpg',
  prTitle1: 'Gurez Festival- Border Tourism',
  prTitle2: 'Gurez Festival',
  prDesc: 'Gurez Festival :Every year Civil Administration Bandipore with Tourism Department conducts events regarding border tourism programs, multiple departments take part in the festivals to showcase their skills, products and facilities they provide to boder poeople.',
  techList: ['HTML', 'CSS', 'Javascript'],
};

const workInfo7 = {
  myRecentPr: 'CRYPTOIST',
  seeProject: 'See Project',
  bgImg: 'https://as2.ftcdn.net/v2/jpg/01/81/82/83/1000_F_181828333_3Q8pe0RN85ZePtLpfzulyyTJI9e5LxsF.jpg',
  prTitle1: 'Cryptoist- the crypto currency',
  prTitle2: 'Cryptoist',
  prDesc: '[CRYPTOIST] This project is a SPA built around coingeco\'s Api; it fetches the crypto market\'s data and displays it to the user for informative purposes in well-structured and interactive UI with help of Redux toolkit builtin middle ware Asyncthunk .',
  techList: ['HTML', 'CSS', 'Javascript'],
};
// markup work section from the wworkinfo array object

const mainElmnt = document.querySelector('main');
const divSection = document.createElement('div');
mainElmnt.insertBefore(divSection, aboutMeSection);
divSection.innerHTML = `<div class="myworks" id="my-works" class="blur">
        <div class="work-heading">
            <h4>${workInfo1.myRecentPr}</h4>
            <hr class="hline">
        </div>
        <div class="work-details" id="work-details">
            <div class="work-details-row1">
                <img src="${workInfo1.bgImg}">
                <div class="details-right1">
                    <h4>${workInfo1.prTitle2}</h4>
                    <p>${workInfo1.prDesc}</p>
                    <ul>
                        <li>${workInfo1.techList[0]}</li>
                        <li>${workInfo1.techList[1]}</li>
                        <li>${workInfo1.techList[2]}</li>
                        <li>${workInfo1.techList[3]}</li>
                    </ul>
                    <button class="btn" type="button" id="seeProject-1">${workInfo1.seeProject}</button>
                </div>
            </div>
            <div class="card-work">
                    <div class=" work wdr21">
                    <h4>${workInfo2.prTitle1}</h4>
                    <p>${workInfo2.prDesc}</p>
                    <ul>
                        <li>${workInfo2.techList[0]}</li>
                        <li>${workInfo2.techList[1]}</li>
                        <li>${workInfo2.techList[2]}</li>
                    </ul>
                    <button type="button" id="seeProject-2">${workInfo2.seeProject}</button>
                </div>
                <div class=" work wdr22">
                    <h4>${workInfo3.prTitle1}</h4>
                    <p>${workInfo3.prDesc}</p>
                    <ul>
                        <li>${workInfo3.techList[0]}</li>
                        <li>${workInfo3.techList[1]}</li>
                        <li>${workInfo3.techList[2]}</li>
                    </ul>
                    <button type="button" id="seeProject-3">${workInfo3.seeProject}</button>
                </div>
                <div class=" work wdr23">
                    <h4>${workInfo4.prTitle1}</h4>
                    <p>${workInfo4.prDesc}</p>
                    <ul>
                        <li>${workInfo4.techList[0]}</li>
                        <li>${workInfo4.techList[1]}</li>
                        <li>${workInfo4.techList[2]}</li>
                    </ul>
                    <button type="button" id="seeProject-4">${workInfo4.seeProject}</button>
                </div>
                <div class="work wdr31">
                    <h4>${workInfo5.prTitle1}</h4>
                    <p>${workInfo5.prDesc}</p>
                    <ul>
                        <li>${workInfo5.techList[0]}</li>
                        <li>${workInfo5.techList[1]}</li>
                        <li>${workInfo5.techList[2]}</li>
                    </ul>
                    <button type="button" id="seeProject-5">${workInfo5.seeProject}</button>
                </div>

                <div class="work wdr32">
                    <h4>${workInfo6.prTitle1}</h4>
                    <p>${workInfo6.prDesc}</p>
                    <ul>
                        <li>${workInfo6.techList[0]}</li>
                        <li>${workInfo6.techList[1]}</li>
                        <li>${workInfo6.techList[2]}</li>
                    </ul>
                    <button type="button" id="seeProject-6">${workInfo6.seeProject}</button>
                </div>
                <div class="work wdr33">
                    <h4>${workInfo7.prTitle1}</h4>
                    <p>${workInfo7.prDesc}</p>
                    <ul>
                        <li>${workInfo7.techList[0]}</li>
                        <li>${workInfo7.techList[1]}</li>
                        <li>${workInfo7.techList[2]}</li>
                    </ul>
                    <button type="button" id="seeProject-7">${workInfo7.seeProject}</button>
                </div>
                </div>

        </div>

    </div>`;

// popup window will go here for project details

// project iformation goes here as an array of objects
const projectInfo = [
  {
    prName: 'Deepfake Detector',
    prDesc: 'Efficient Deepfake Detection Utilizing Advanced AI',
    techList: ['Python', 'Pytorch', 'facenet_pytorch', 'cv2(OpenCV)', 'pytorch_grad_cam', 'gradio', 'PIL'],
    backgroundImg: './images/deepfake.png',
    pg: 'This project addresses the challenge of detecting deepfake images through the implementation of a robust deepfake detection system.',
    buttonLive: 'See Live',
    liveLink: 'https://29shivani.github.io/DeepFake_Detector/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/29Shivani/DeepFake_Detector',
  },

  {
    prName: 'Click Match game',
    prDesc: 'Game for Memory Enhancement',
    techList: ['HTML5', 'Javascript', 'ES6', 'CSS3'],
    backgroundImg: './images/clickMatch.png',
    pg: 'The use of photographic Memory Games is a great way to help the student to develop their memory skills. The game is designed to help students to learn how to remember more and faster. It does this by helping them to develop their short-term memory, as well as their long-term memory.',
    buttonLive: 'See Live',
    liveLink: 'https://29shivani.github.io/ClickMatch_game/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/29Shivani/ClickMatch_game',
  },

  {
    prName: 'Weather Forecasting using GUI',
    prDesc: 'Platform to access weather forecasts based on city names.',
    techList: ['Python', 'Tkinter', 'Requests Library', 'OpenWeatherMap API'],
    backgroundImg: './images/weather.png',
    pg: 'The project "Weather Forecasting using GUI" seeks to bridge this gap by offering a user-friendly and efficient weather forecasting tool integrated within a graphical interface.',
    buttonLive: 'See Live',
    liveLink: 'https://29shivani.github.io/WeatherForecastGUI/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/29Shivani/WeatherForecastGUI',
  },

  {
    prName: 'To Do List',
    prDesc: 'To do list',
    techList: ['HTML', 'CSS', 'React', 'Redux'],
    backgroundImg: 'https://as1.ftcdn.net/v2/jpg/01/10/01/90/1000_F_110019055_JBbr778hMxpwuwDaFszyQNck5PhBYHli.jpg',
    pg: '[To Do List] is a web app. for learning ES6 modules and webpack, and it is a simple website that displays a list of To do tasks and allows you to add and remove tasks from that list.',
    buttonLive: 'See Live',
    liveLink: 'https://codewithhyder.github.io/to-do-list-final/dist/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/codeWithHyder/to-do-list-final',
  },

  {
    prName: 'AwsomeBooks list with Featured',
    prDesc: 'To add or remove list of books',
    techList: ['HTML', 'CSS', 'Javascript'],
    backgroundImg: 'https://as1.ftcdn.net/v2/jpg/03/48/20/04/1000_F_348200441_L3i2pC92h5B19DeaF5YBamm5OEkx68ZH.jpg',
    pg: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonLive: 'See Live',
    liveLink: 'https://codewithhyder.github.io/awesomebook-es6-module/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/codeWithHyder/awesomebook-module1',
  },

  {
    prName: 'Gurez festival',
    prDesc: 'Gurez Festival :Every year Civil Administration Bandipore with Tourism Department conducts events regarding border tourism programs, multiple departments take part in the festivals to showcase their skills, products and facilities they provide to boder poeople.',
    techList: ['HTML', 'CSS', 'Javascript'],
    backgroundImg: 'https://as1.ftcdn.net/v2/jpg/01/89/52/90/1000_F_189529054_DSwYiU4qFiy6nvdkvclXNKVY8lkj10n4.jpg',
    pg: 'Gurez Festival :Every year Civil Administration Bandipore with Tourism Department conducts events regarding border tourism programs, multiple departments take part in the festivals to showcase their skills, products and facilities they provide to boder poeople.',
    buttonLive: 'See Live',
    liveLink: 'https://codewithhyder.github.io/gurez-festival/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/codeWithHyder/gurez-festival',
  },

  {
    prName: 'Cryptoist',
    prDesc: '[CRYPTOIST] This project is a SPA built around coingeco\'s Api; it fetches the crypto market\'s data and displays it to the user for informative purposes in well-structured and interactive UI with help of Redux toolkit builtin middle ware Asyncthunk .',
    techList: ['HTML', 'CSS', 'React'],
    backgroundImg: 'https://as2.ftcdn.net/v2/jpg/01/81/82/83/1000_F_181828333_3Q8pe0RN85ZePtLpfzulyyTJI9e5LxsF.jpg',
    pg: '[CRYPTOIST] This project is a SPA built around coingeco\'s Api; it fetches the crypto market\'s data and displays it to the user for informative purposes in well-structured and interactive UI with help of Redux toolkit builtin middle ware Asyncthunk .',
    buttonLive: 'See Live',
    liveLink: 'https://react-reduxtoolkit-capston.onrender.com/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/codeWithHyder/react-capston',
  },

];

// call to seeproject buttons on each card in work section

const cardButtonsArray = [
  document.querySelector('#seeProject-1'),
  document.querySelector('#seeProject-2'),
  document.querySelector('#seeProject-3'),
  document.querySelector('#seeProject-4'),
  document.querySelector('#seeProject-5'),
  document.querySelector('#seeProject-6'),
  document.querySelector('#seeProject-7'),
];

// link see project buttons to project info array respectively

const worksSection = document.querySelector('#my-works');
cardButtonsArray.forEach((buttonItem, index) => {
  const items = projectInfo[index];
  // start popup window
  buttonItem.addEventListener('click', () => {
    // blur the website background
    headerSection.classList.toggle('blur');
    heroSection.classList.toggle('blur');
    worksSection.classList.toggle('blur');
    aboutMeSection.classList.toggle('blur');
    contactFormSection.classList.toggle('blur');
    footerSection.classList.toggle('blur');

    // add markup for modal

    const bodyEle = document.querySelector('main');
    const section = document.createElement('section');
    bodyEle.appendChild(section);
    section.innerHTML = `<div class="modal" id="modal">
  
  <div class="modal-header" id="modal-header">
  <h2>${items.prName}</h2>
    
  <button type=""button" class="cross-button" id="cross-button">&times;</button>
  </div>
  <div class="tech-list" id="tech-list">
  <span class="tech-list1">${items.techList[0]}</span>
  <span class="tech-list1">${items.techList[1]}</span>
  <span class="tech-list1">${items.techList[2]}</span>
  <span class="tech-list1">${items.techList[3]}</span>
  <span class="tech-list1">${items.techList[4]}</span>
  </div>
  <div class="modal-body" id="modal-body">
  
  <div class="modalbody-left"><img src="${items.backgroundImg}" alt='featureimg'></div>
  <div class="modalbody-right">
  <h3>${items.pg}</h3> 
  <div class="modal-source-live">
  <a href="${items.liveLink}"><button type="button" class="livebtn">See Live <img src="./images/live-icon.png"></button></a>
  <a href="${items.sourceLink}"><button type="button" class="sourcebtn">See Source <img src="./images/git-icon.png"></button></a>
  </div>
  </div>
  </div>
</div>`;

    // close popup window

    const crossButton = document.querySelector('.cross-button');
    crossButton.addEventListener('click', () => {
      const modalContainer = document.querySelector('.modal');
      modalContainer.classList.toggle('modal-close');
      headerSection.classList.remove('blur');
      heroSection.classList.remove('blur');
      worksSection.classList.remove('blur');
      aboutMeSection.classList.remove('blur');
      contactFormSection.classList.remove('blur');
      footerSection.classList.remove('blur');
      const modalWindow = document.querySelector('main');
      modalWindow.removeChild(modalWindow.lastElementChild);
    });
  });
});

// function definition here

function formValidation(e) {
  const emailSection = document.querySelector('#email');
  const errMsg = document.querySelector('.errmsg');
  if (emailSection.value !== emailSection.value.toLowerCase()) {
    errMsg.textContent = '*Email must be in lower case';
    errMsg.style.color = 'red';
    emailSection.focus();
    e.preventDefault();
    e.stopPropagation();
  }
  return false;
}

// client side form validation

const form = document.getElementById('contactform');
form.addEventListener('submit', formValidation);

// local storage

const myForm = document.querySelector('#contactform');
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#email');
const userMsg = document.querySelector('#message');
// saving form data to local storage
myForm.addEventListener('input', () => {
  const info = {
    name: userName.value,
    email: userEmail.value,
    message: userMsg.value,
  };
  localStorage.setItem('storedData', JSON.stringify(info));
});

// get data from local storage
let userObject = JSON.parse(localStorage.getItem('storedData'));
if (!userObject) {
  userObject = {
    name: '',
    email: '',
    message: '',
  };
  userName.value = userObject.name;
  userEmail.value = userObject.email;
  userMsg.value = userObject.message;
}