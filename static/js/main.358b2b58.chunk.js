(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,function(e,t,a){var i={"./0.jpg":14,"./1.jpg":15,"./2.jpg":16,"./3.jpg":17,"./4.jpg":18,"./5.jpg":19,"./6.jpg":20,"./7.jpg":21};function c(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}c.keys=function(){return Object.keys(i)},c.resolve=n,e.exports=c,c.id=13},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/0.3d7682ed.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/1.c1c19a87.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/2.80dee7bc.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/3.788dc4f2.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/4.b72fae0a.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/5.00f21e2a.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/6.5f022561.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/7.6b80fcde.jpg"},function(e,t,a){var i={"./0.jpg":23,"./1.jpg":24,"./2.jpg":25,"./3.jpg":26,"./4.jpg":27,"./5.jpg":28,"./6.jpg":29,"./7.jpg":30};function c(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}c.keys=function(){return Object.keys(i)},c.resolve=n,e.exports=c,c.id=22},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/0.7e0925a7.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/1.28c15038.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/2.aa229dd8.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/3.366e3cf9.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/4.c6451130.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/5.6c29e43d.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/6.7d45a1e3.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/7.e38ed7ba.jpg"},function(e,t,a){"use strict";a.r(t);var i=a(1),c=a.n(i),n=a(6),r=a.n(n),s=(a(11),a(2));function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var d=a(0);var l=function(e){var t=e.categories,a=void 0===t?[]:t,c=e.setCurrentCategory,n=e.contactSelected,r=e.resumeSelected,s=e.currentCategory,l=e.setContactSelected,u=e.setResumeSelected;return Object(i.useEffect)((function(){document.title=o(s.name)}),[s]),Object(d.jsxs)("header",{className:"flex-row px-1",children:[Object(d.jsx)("h2",{children:Object(d.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(d.jsxs)("span",{role:"img","aria-label":"laptop",children:[" ","\ud83d\udcbb"]})," ","AB"]})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"flex-row",children:[Object(d.jsx)("li",{className:"mx-2",children:Object(d.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return l(!1)},children:"About Me"})}),Object(d.jsx)("li",{className:"mx-2 ".concat(n&&"navActive"),children:Object(d.jsx)("span",{onClick:function(){return l(!0)},children:"Contact"})}),a.map((function(e){return Object(d.jsx)("li",{className:"mx-1 ".concat(s.name===e.name&&!n&&"navActive"),children:Object(d.jsx)("span",{onClick:function(){c(e),l(!1)},children:o(e.name)})},e.name)})),Object(d.jsx)("li",{className:"mx-2 ".concat(r&&"navActive"),children:Object(d.jsx)("a",{"data-testid":"about",href:"#resume",onClick:function(){u(!0),l(!1)},children:"Resume"})})]})})]})},u=a.p+"static/media/cover-image.5b0e8432.jpeg";var j=function(){return Object(d.jsxs)("section",{className:"my-5",children:[Object(d.jsx)("h1",{id:"about",children:"Who am I?"}),Object(d.jsx)("img",{src:u,className:"my-2",style:{width:"100%"},alt:"cover"}),Object(d.jsx)("div",{className:"my-2",children:Object(d.jsx)("p",{children:"Welcome to my portfolio! I\u2019m Anderson, and I\u2019m a full-stack web developer, having experience in HTML, CSS, JavaScript, jQuery, MySQL, Express.js and React, to name a few. Here you will find information about the projects I have worked with, as well as, links for the deployed application and the repositories. Have a look at my work and feel free to contact me."})})]})},h=a(3),b=function(e){var t=e.onClose,i=e.currentPhoto,c=i.name,n=i.description,r=i.index,s=i.github,o=i.deployed;return Object(d.jsx)("div",{className:"modalBackdrop",children:Object(d.jsxs)("div",{className:"modalContainer",children:[Object(d.jsxs)("h3",{className:"modalTitle",children:[c," "]}),Object(d.jsx)("img",{src:a(13)("./".concat(r,".jpg")).default,alt:"current category"}),Object(d.jsx)("p",{children:n}),Object(d.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:"GitHub Repo"}),Object(d.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:"- Deployed Application"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"button",onClick:t,children:"Close Project"})]})})},m=function(e){var t=e.category,c=Object(i.useState)(!1),n=Object(s.a)(c,2),r=n[0],o=n[1],l=Object(i.useState)(),u=Object(s.a)(l,2),j=u[0],m=u[1],p=Object(i.useState)([{name:"SEEK",category:"projects",description:"An event app for a post-COVID world aimed toward busy, city-life adults looking for a night out SEEK allows you to plan a night out and provides a few convenient features Events by city,Event information, Location, Dates, Times. Click to purchase tickets then Redirect to Ticketmaster.",github:"https://github.com/andybuzzi/Seek",deployed:"https://andybuzzi.github.io/Seek/"},{name:"Pokemon Team Builder",category:"projects",description:"The Pokemon Team Builder application has been created for fans of Pokemon, and anyone interested in learning, playing and having fun in the Pokemon world. The user can build their own team, and select the Pokemons as they like. This application uses the pokeapi.co API to retrieve Pokemon data.",github:"https://github.com/andybuzzi/bc-project-2",deployed:"https://bc-project-2.herokuapp.com/"},{name:"Social Network API",category:"projects",description:"The social network api has been built for a social network web application where users can share their thoughts, react to friends\u2019 thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.",github:"https://github.com/andybuzzi/social-network-api",deployed:"https://github.com/andybuzzi/social-network-api"},{name:"Note Taker",category:"projects",description:"The note taker application has been created for users to be able to write and save notes. This application uses an express.js back end which save and retrieve data from a JSON file.",github:"https://github.com/andybuzzi/note-taker",deployed:"https://murmuring-mountain-65060.herokuapp.com"},{name:"Weather Dashboard",category:"projects",description:"The weather dashboard application has been created for users to be able to search current weather by city, as well as, to view the forecast for the next 5 days. This application uses the OpenWeather API to retrieve weather data.",github:"https://github.com/andybuzzi/weather-dashboard",deployed:"https://andybuzzi.github.io/weather-dashboard/"},{name:"ReadMe Generator",category:"projects",description:"This application has been created to generate a professional readMe, where the main goal is to help your project to stand out. In this generator, the user is presented with few questions on the terminal that permits them to add the information needed for the readMe.",github:"https://github.com/andybuzzi/professional-readme-generator",deployed:"https://github.com/andybuzzi/professional-readme-generator"},{name:"Password Generator",category:"projects",description:"This application has been created to generate random, strong, and safe passwords. The user is presented with few questions on the application that permits them to decide which type of character should be included in the password.",github:"https://github.com/andybuzzi/password-generator",deployed:"https://andybuzzi.github.io/password-generator/"},{name:"Horiseon Social Solution Services Webpage",category:"projects",description:"This is a company webpage built using HTML and CSS. The main purpose of this project was to refactor the existing code in order to improve its database and make sure the code was running perfectly, making it more efficient and maintainable.",github:"https://github.com/andybuzzi/horiseon-webpage",deployed:"https://andybuzzi.github.io/horiseon-webpage/"}]),g=Object(s.a)(p,1)[0].filter((function(e){return e.category===t})),f=function(e,t){m(Object(h.a)(Object(h.a)({},e),{},{index:t})),o(!r)};return Object(d.jsxs)("div",{children:[r&&Object(d.jsx)(b,{onClose:f,currentPhoto:j}),Object(d.jsx)("div",{className:"flex-row",children:g.map((function(e,t){return Object(d.jsx)("img",{src:a(22)("./".concat(t,".jpg")).default,alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return f(e,t)}},e.name)}))})]})};var p=function(e){var t=e.currentCategory;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{"data-testid":"h1tag",children:o(t.name)}),Object(d.jsx)("p",{children:t.description}),Object(d.jsx)(m,{category:t.name})]})},g=a(4);var f=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)(""),r=Object(s.a)(n,2),o=r[0],l=r[1],u=a.name,j=a.email,b=a.message,m=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?"":"Your email is invalid.")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."));o||(c(Object(h.a)(Object(h.a)({},a),{},Object(g.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(d.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",a)},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(d.jsx)("input",{type:"text",name:"name",defaultValue:u,onBlur:m})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(d.jsx)("input",{type:"email",name:"email",defaultValue:j,onBlur:m})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(d.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:m})]}),o&&Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"error-text",children:o})}),Object(d.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var A=function(){return Object(d.jsxs)("section",{className:"my-5",children:[Object(d.jsxs)("div",{className:"container d-flex flex-column text-center",children:[Object(d.jsx)("div",{className:"p-2 text-center",children:Object(d.jsx)("h6",{id:"resume",children:Object(d.jsx)("a",{href:"https://drive.google.com/file/d/1R9ihLrLSYIcYrTj4zvmwdBxDQSGmcNgo/view?usp=sharing",target:"blank",download:!0,children:"Click Here to Download Resume in PDF"})})}),Object(d.jsx)("br",{}),Object(d.jsxs)("ul",{children:["Full-stack curriculum Bootcamp with emphasis on the most in-demand technologies, including:",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("li",{children:"- HTML"}),Object(d.jsx)("li",{children:"- CSS"}),Object(d.jsx)("li",{children:"- JavaScript"}),Object(d.jsx)("li",{children:"- jQuery"}),Object(d.jsx)("li",{children:"- Bootstrap"}),Object(d.jsx)("li",{children:"- Node.js"}),Object(d.jsx)("li",{children:"- MySQL"}),Object(d.jsx)("li",{children:"- MongoDB"}),Object(d.jsx)("li",{children:"- Express.js"}),Object(d.jsx)("li",{children:"- React"})]})]}),Object(d.jsx)("div",{className:"p-2"})]})},O=function(){return Object(d.jsx)("section",{className:"footer",children:Object(d.jsx)("ul",{className:"row justify-content-center",children:Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://github.com/andybuzzi",target:"blank",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",className:"img-link-social",alt:"GitHub Icon"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/andybuzzi/",target:"blank",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEAklEQVR4nO2bTYgcRRiGn2mGEMJi4hKsICEuEgRFMHgQwRIFPYgHQbzIomgUVAoxiETMYQkiGk8Rgik1+IfuIXoRRcW/i1goKCjk4EFBQxBJiSyLLMsyDIOH6jaddme6qmcy1d2TB4qd7v2q5qt3qqq/+ukOBaxRO4B7gZuAS4AtuZQA3TQluUThOjm/VLrF7/GkX7gepKn4uZ/720/v94ENoAesAl8DJ4XUa/kCO/kLa9QTwHO4ireRFeCAkHo5u9EBsEYlwCvAI5EcmzaHhNQvwrmm+jSzU3mAI9aoRYCONWo38CuwNa5PU2cFuCIBHmL2Kg8wDywmwD2xPYnIbQntHfF9mC8+r2eNLRcFGCPzABdlFaO1JtGtIsAAeB24GtgOXApcB7zNudC0KXRDY/Q+sD8fSqacAvZbo77DRZRN6VrBLeDVTSr/H0LqE8DJ8XyaKkECDIAjHnYvVXQmCiECrAup//SwO4WbhjaBSoNgGdl8vBGECLDVGrXTw24vsK2iP9MmCRGgi5s4lfFoRWdiECQAwGFr1I3D/mmNuhV4fCyXpkxoHLAN+NIatQScEFKvA1ij5gAFHMatHTaGjjXqd2ChQt5V4BfcOHIVzZxVnq66WguwA7hhUp7Eoikh6wUjtAXk1+JDyyzLW9xPGABfAZ8Af+BmngkwB+wCbgbuZMwxJ1SA94EHSmw+wDmWp4+bNfZG5HsLWEw/fwE8KaT+eYT9UWvUHuB54L4Sn4YS3AKE1KMqgTVq2K/cG5XXGpXt6hwEjgmpS6NJIfUZ4H5r1OfAG1RoDeMMgheCh4XU74RmElIvW6MA3g3NW6dB8HiVymek0/ShU/Vh1EYAIfX3EyhmidHjzP+ojQCTQEh9Gvg0JE+rBEj5MMS4boMg1qh53JPgLuByXMj9GfCskPqsRxHfhnxfrVqANWov8BPwDHANLtxeAB4DfrBGLXgUc5aApfraCJCeUXgP2DPEZDdw3KOoHgErUrURALgduL7E5g5r1LUlNkFLcnUSYJ+HTYLrGqPwma+cV2Bd2D6JQnxC6Dx1EsD3kIaPz41sAb6+tFaAKDFJEwWYqM91EsCX1goQxZc6CeBLa1uAL60VIMZTYFAnAXyZpFC1EmDmB8EYvtSqBfhysQtMkP7MCxB6PmAN+KvEZhebnxH6rSTfZbiNzzL+Bv4psVnAT9AfQ/vTHH5ObsaVFfMV2ZmmSVCrLhCD3qwLsJEA67G9iMhqAnwU24uIfJMArxG4o9oS1oDlJN1RPRrZmRgcElKvZIPgEvBxTG+mzDEh9cuQBgtC6j5wN/AC7e4OG8BTQuoD2Y1O0SI9efUgcAtudzZ7dT57Zb4JZK/P99K0gnt9/s3iOw//AttG6g4+2MXXAAAAAElFTkSuQmCC",className:"img-link-social",alt:"LinkedIn Icon"})})]})})})};var x=function(){var e=Object(i.useState)([{name:"projects",description:"Here are the projects I have worked on. For more information please click on the project image and you will find a description, as well as, the links for the application and repository."}]),t=Object(s.a)(e,1)[0],a=Object(i.useState)(t[0]),c=Object(s.a)(a,2),n=c[0],r=c[1],o=Object(i.useState)(!1),u=Object(s.a)(o,2),h=u[0],b=u[1],m=Object(i.useState)(!1),g=Object(s.a)(m,2),x=g[0],w=g[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{categories:t,setCurrentCategory:r,currentCategory:n,contactSelected:h,setContactSelected:b,resumeSelected:x,setResumeSelected:w}),Object(d.jsxs)("main",{children:[h?Object(d.jsx)(f,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{currentCategory:n}),Object(d.jsx)(j,{})]}),x?Object(d.jsx)(A,{}):Object(d.jsx)(d.Fragment,{})]}),Object(d.jsx)(O,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.358b2b58.chunk.js.map