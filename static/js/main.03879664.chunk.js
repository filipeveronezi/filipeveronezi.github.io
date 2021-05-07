(this["webpackJsonpfilipeveronezi.github.io"]=this["webpackJsonpfilipeveronezi.github.io"]||[]).push([[0],{19:function(n,e,t){"use strict";t.r(e);var i,r,a,o,s,c,l,p,d,m,g=t(1),h=t.n(g),x=t(8),b=t.n(x),f=t(2),u=t(3),j=Object(u.a)(i||(i=Object(f.a)(["\n  html, body {\n    overflow-x: hidden;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  *, button, input {\n    font-family: Inter, sans-serif;\n  }\n\n  :root {\n    --bg-primary: #363333;\n    --bg-secondary: #151515;\n    --color-primary: #eee;\n    --color-secondary: #a685e2;\n  }\n\n  @keyframes up {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.animate-up {\n  animation-name: up;\n  animation-duration: 300ms;\n  animation-fill-mode: backwards;\n}\n"]))),v=u.b.div(r||(r=Object(f.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding: 0 10rem;\n  align-items: center;\n  justify-items: center;\n\n  position: relative;\n\n  &.gray {\n    --bg-color: var(--bg-primary);\n  }\n\n  &.black {\n    --bg-color: var(--bg-secondary);\n  }\n\n  background: var(--bg-color);\n\n  @media (min-width: 1720px) {\n    padding: 0 20rem;\n  }\n\n  @media (max-width: 1150px) {\n    grid-template-columns: 1fr;\n    position: relative;\n  }\n\n  @media (max-width: 780px) {\n    padding: 0 5%;\n  }\n"]))),O=u.b.div(a||(a=Object(f.a)(["\n  width: 100%;\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  right: 0;\n\n  z-index: 1;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"]))),w=t(0),y=function(n){var e=n.left,t=n.right,i=n.variant,r=n.wave;return Object(w.jsxs)(v,{className:i,children:[e,t,r&&Object(w.jsx)(O,{children:Object(w.jsx)("svg",{width:"1920",height:"308",viewBox:"0 0 1920 308",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(w.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 1L80 39.4989C160 77.3341 320 154.332 480 192.167C640 230.666 800 230.666 960 224.028C1120 218.054 1280 204.779 1440 211.416C1600 218.054 1760 243.278 1840 255.889L1920 268.501V307H1840C1760 307 1600 307 1440 307C1280 307 1120 307 960 307C800 307 640 307 480 307C320 307 160 307 80 307H0V1Z",fill:"#A685E2",stroke:"#A685E2"})})})]})},z=u.b.div(o||(o=Object(f.a)(["\n  width: 100%;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n\n  z-index: 1;\n\n  h1,\n  h2 {\n    font-family: Inter, sans-serif;\n    color: var(--color-primary);\n    text-transform: uppercase;\n  }\n\n  h2 {\n    font-weight: 300;\n    font-size: 1.2rem;\n    color: #888;\n    letter-spacing: 7px;\n  }\n\n  h1 {\n    font-weight: 700;\n    font-size: 4rem;\n    letter-spacing: 15px;\n  }\n\n  @media (max-width: 1380px) {\n    h1 {\n      font-size: 2.5rem;\n    }\n  }\n"]))),k=u.b.a(s||(s=Object(f.a)(["\n  width: 227px;\n  height: 43px;\n  margin-top: 33px;\n\n  font-family: Inter, sans-serif;\n  font-weight: 300;\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  color: var(--color-primary);\n  text-decoration: none;\n\n  display: grid;\n  place-items: center;\n\n  background: rgba(255, 255, 255, 0);\n  outline: none;\n  border: 1px solid var(--color-primary);\n\n  cursor: pointer;\n  transition: 0.4s;\n\n  z-index: 2;\n\n  &:hover {\n    background: var(--color-secondary);\n  }\n"]))),C=function(n){var e=n.text,t=n.link;return Object(w.jsx)(k,{href:t,target:"_blank",rel:"noreferrer",className:"animate-up",children:e})},I=function(){return Object(w.jsxs)(z,{children:[Object(w.jsx)("h2",{className:"animate-up",children:"Filipe Veronezi"}),Object(w.jsx)("h1",{className:"animate-up",children:"Front-end Engineer"}),Object(w.jsx)(C,{text:"Contact me",link:"https://api.whatsapp.com/send?phone=5511972550286"})]})},N=u.b.div(c||(c=Object(f.a)(["\n  width: 100%;\n  height: 80%;\n  display: flex;\n  justify-content: center;\n\n  img {\n    max-height: 900px;\n    height: 100%;\n    width: 100%;\n  }\n\n  @media (max-width: 1150px) {\n    position: absolute;\n    right: 0;\n    left: 10%;\n    img {\n      z-index: 0;\n    }\n  }\n"]))),L=t.p+"static/media/illustration.f84eed4f.svg",A=function(){return Object(w.jsx)(N,{children:Object(w.jsx)("img",{src:L,alt:"Illustration",className:"animate-up"})})},E=u.b.div(l||(l=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 23px;\n  margin: 40px 0;\n\n  @media (max-width: 1600px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (max-width: 920px) {\n    grid-template-columns: 1fr;\n  }\n"]))),F=u.b.div(p||(p=Object(f.a)(["\n  width: 174px;\n  height: 174px;\n  background: var(--bg-primary);\n\n  cursor: pointer;\n  transition: 0.4s;\n  box-shadow: 0 0 15px #000;\n\n  padding: 0 5%;\n\n  a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    width: auto;\n    height: 100%;\n    color: var(--color-primary);\n    font-family: Inter, sans-serif;\n    font-size: 1rem;\n    font-weight: 300;\n    text-decoration: none;\n    text-transform: uppercase;\n    letter-spacing: 7px;\n    margin-right: -7px;\n    text-align: center;\n    line-height: 1.5;\n  }\n\n  &:hover {\n    background: var(--color-secondary);\n  }\n"]))),V=function(n){var e=n.project;return Object(w.jsx)(F,{children:Object(w.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.title})})},B=[{title:"IBT Web",url:"https://github.com/filipeveronezi/ibt-web"},{title:"Move it",url:"https://github.com/filipeveronezi/move-it"},{title:"Weather App",url:"https://github.com/filipeveronezi/weather-vue-app"},{title:"FAQ Cataline",url:"https://github.com/filipeveronezi/cataline-vuex-challenge"},{title:"Dropbox UI Clone",url:"https://github.com/filipeveronezi/dropbox-ui-clone"},{title:"Upcoming",url:""}],H=function(){return Object(w.jsx)(E,{children:B.map((function(n,e){return Object(w.jsx)(V,{project:n})}))})},M=u.b.div(d||(d=Object(f.a)(["\n  display: grid;\n  grid-template-rows: 1fr 1fr 0.8fr;\n  align-items: center;\n  justify-items: start;\n\n  h1 {\n    font-family: Inter, sans-serif;\n    font-size: 4rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: var(--color-primary);\n    letter-spacing: 15px;\n  }\n\n  @media (max-width: 1150px) {\n    grid-row: 1;\n    justify-items: center;\n\n    margin: 40px 0;\n\n    h1 {\n      font-size: 2rem;\n    }\n  }\n"]))),J=u.b.div(m||(m=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 0;\n  align-items: center;\n  justify-items: start;\n"]))),U=t.p+"static/media/vue.83c72626.svg",W=t.p+"static/media/nuxt.e0b399b3.svg",Y=t.p+"static/media/react.59a526f0.svg",_=t.p+"static/media/next.10641f12.svg",D=function(){return Object(w.jsxs)(M,{children:[Object(w.jsxs)(J,{children:[Object(w.jsx)("img",{src:U,alt:"Vue Logo"}),Object(w.jsx)("img",{src:W,alt:"Nuxt Logo"}),Object(w.jsx)("img",{src:Y,alt:"React Logo"}),Object(w.jsx)("img",{src:_,alt:"Next Logo"})]}),Object(w.jsx)("h1",{children:"Projects"}),Object(w.jsx)(C,{text:"GitHub",link:"https://github.com/filipeveronezi"})]})};var G=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y,{variant:"gray",left:Object(w.jsx)(I,{}),right:Object(w.jsx)(A,{}),wave:!0}),Object(w.jsx)(y,{variant:"black",left:Object(w.jsx)(H,{}),right:Object(w.jsx)(D,{}),wave:!1}),Object(w.jsx)(j,{})]})};b.a.render(Object(w.jsx)(h.a.StrictMode,{children:Object(w.jsx)(G,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.03879664.chunk.js.map