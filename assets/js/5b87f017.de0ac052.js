"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1807],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},k=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,k=c(e,["components","mdxType","originalType","parentName"]),d=l(r),s=a,f=d["".concat(p,".").concat(s)]||d[s]||u[s]||o;return r?n.createElement(f,i(i({ref:t},k),{},{components:r})):n.createElement(f,i({ref:t},k))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6,title:"kafka \u63d2\u4ef6"},i="kafka \u63d2\u4ef6",c={unversionedId:"chapter01/chapter01-01/intro06_kafka",id:"chapter01/chapter01-01/intro06_kafka",title:"kafka \u63d2\u4ef6",description:"\u5982\u4f55\u4f7f\u7528\u4f8b\u5b50\u6765\u5feb\u901f\u4f7f\u7528 kafka \u63d2\u4ef6",source:"@site/docs/chapter01/chapter01-01/intro06_kafka.md",sourceDirName:"chapter01/chapter01-01",slug:"/chapter01/chapter01-01/intro06_kafka",permalink:"/docs/chapter01/chapter01-01/intro06_kafka",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter01/chapter01-01/intro06_kafka.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"kafka \u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"log \u63d2\u4ef6",permalink:"/docs/chapter01/chapter01-01/intro05_log"},next:{title:"redis \u63d2\u4ef6",permalink:"/docs/chapter01/chapter01-01/intro07_redis"}},p={},l=[{value:"\u6587\u4ef6\u63cf\u8ff0",id:"\u6587\u4ef6\u63cf\u8ff0",level:2},{value:"\u6267\u884c\u8fc7\u7a0b",id:"\u6267\u884c\u8fc7\u7a0b",level:2},{value:"\u7b2c\u4e00\u6b65 \u5148\u6784\u5efa<code>docker</code>\u955c\u50cf, \u5e76\u4e14\u542f\u52a8\u4ee5\u6765\u670d\u52a1<code>kafka</code>",id:"\u7b2c\u4e00\u6b65-\u5148\u6784\u5efadocker\u955c\u50cf-\u5e76\u4e14\u542f\u52a8\u4ee5\u6765\u670d\u52a1kafka",level:5},{value:"\u7b2c\u4e8c\u6b65 \u7f16\u8bd1\u4e3b\u7a0b\u5e8f<code>main.go</code>",id:"\u7b2c\u4e8c\u6b65-\u7f16\u8bd1\u4e3b\u7a0b\u5e8fmaingo",level:5},{value:"\u7b2c\u4e09\u6b65 \u8fd0\u884c\u4e3b\u7a0b\u5e8f",id:"\u7b2c\u4e09\u6b65-\u8fd0\u884c\u4e3b\u7a0b\u5e8f",level:5}],k={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kafka-\u63d2\u4ef6"},"kafka \u63d2\u4ef6"),(0,a.kt)("p",null,"\u5982\u4f55\u4f7f\u7528\u4f8b\u5b50\u6765\u5feb\u901f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka")," \u63d2\u4ef6"),(0,a.kt)("h2",{id:"\u6587\u4ef6\u63cf\u8ff0"},"\u6587\u4ef6\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"app.toml")," \u7a0b\u5e8f\u542f\u52a8\u7684\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"main.go"),"  \u4e3b\u7a0b\u5e8f\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u4e3b\u7a0b\u5e8f\u9700\u8981\u8fde\u63a5",(0,a.kt)("inlineCode",{parentName:"p"},"kafka"),"\uff0c\u56e0\u6b64\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compse"),"\u5feb\u901f\u542f\u52a8\u4e00\u7ec4\u4f9d\u8d56\u4ee5\u63d0\u4f9b\u6570\u636e\u5e93\u670d\u52a1"),(0,a.kt)("h2",{id:"\u6267\u884c\u8fc7\u7a0b"},"\u6267\u884c\u8fc7\u7a0b"),(0,a.kt)("h5",{id:"\u7b2c\u4e00\u6b65-\u5148\u6784\u5efadocker\u955c\u50cf-\u5e76\u4e14\u542f\u52a8\u4ee5\u6765\u670d\u52a1kafka"},"\u7b2c\u4e00\u6b65 \u5148\u6784\u5efa",(0,a.kt)("inlineCode",{parentName:"h5"},"docker"),"\u955c\u50cf, \u5e76\u4e14\u542f\u52a8\u4ee5\u6765\u670d\u52a1",(0,a.kt)("inlineCode",{parentName:"h5"},"kafka")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// \u6267\u884c\u547d\u4ee4\ndocker-compose up\n")),(0,a.kt)("h5",{id:"\u7b2c\u4e8c\u6b65-\u7f16\u8bd1\u4e3b\u7a0b\u5e8fmaingo"},"\u7b2c\u4e8c\u6b65 \u7f16\u8bd1\u4e3b\u7a0b\u5e8f",(0,a.kt)("inlineCode",{parentName:"h5"},"main.go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// \u6267\u884c\u547d\u4ee4\ngo build -o main .\n")),(0,a.kt)("h5",{id:"\u7b2c\u4e09\u6b65-\u8fd0\u884c\u4e3b\u7a0b\u5e8f"},"\u7b2c\u4e09\u6b65 \u8fd0\u884c\u4e3b\u7a0b\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// \u6267\u884c\u547d\u4ee4\n./main -c app.toml\n")))}d.isMDXComponent=!0}}]);