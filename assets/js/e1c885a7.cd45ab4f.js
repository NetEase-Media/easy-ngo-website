"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6196],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),g=d(n),o=r,N=g["".concat(m,".").concat(o)]||g[o]||u[o]||l;return n?a.createElement(N,i(i({ref:e},k),{},{components:n})):a.createElement(N,i({ref:e},k))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=o;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[g]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},3146:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,title:"server"},i="server",p={unversionedId:"chapter03/intro07_microservice/intro01_grpc/intro01_server",id:"chapter03/intro07_microservice/intro01_grpc/intro01_server",title:"server",description:"\u6211\u4eec\u5bf9grpc\u505a\u4e86\u7b80\u5355\u5c01\u88c5\u3002\u6211\u4eec\u4e5f\u4e3a\u5176\u9002\u914d\u4e86\u81ea\u52a8\u6ce8\u518c\u7684rms\u5305\u7684\u5b9e\u73b0\u3002",source:"@site/docs/chapter03/intro07_microservice/intro01_grpc/intro01_server.md",sourceDirName:"chapter03/intro07_microservice/intro01_grpc",slug:"/chapter03/intro07_microservice/intro01_grpc/intro01_server",permalink:"/docs/chapter03/intro07_microservice/intro01_grpc/intro01_server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter03/intro07_microservice/intro01_grpc/intro01_server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"server"},sidebar:"tutorialSidebar",previous:{title:"grpc",permalink:"/docs/category/grpc"},next:{title:"client",permalink:"/docs/chapter03/intro07_microservice/intro01_grpc/intro02_client"}},m={},d=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u81ea\u52a8\u6ce8\u518c",id:"\u81ea\u52a8\u6ce8\u518c",level:4},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:2},{value:"\u4e3b\u914d\u7f6e",id:"\u4e3b\u914d\u7f6e",level:3},{value:"ServerTLSConfig",id:"servertlsconfig",level:3},{value:"GRPCServerOptions",id:"grpcserveroptions",level:3},{value:"GRPCServerKeepaliveParams",id:"grpcserverkeepaliveparams",level:3},{value:"GRPCServerKeepalivePolicy",id:"grpcserverkeepalivepolicy",level:3},{value:"\u914d\u7f6e\u4e3e\u4f8b",id:"\u914d\u7f6e\u4e3e\u4f8b",level:2},{value:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6",id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6",level:2}],k={toc:d};function g(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"server"},"server"),(0,r.kt)("p",null,"\u6211\u4eec\u5bf9",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/go/quickstart/"},(0,r.kt)("inlineCode",{parentName:"a"},"grpc")),"\u505a\u4e86\u7b80\u5355\u5c01\u88c5\u3002\u6211\u4eec\u4e5f\u4e3a\u5176\u9002\u914d\u4e86\u81ea\u52a8\u6ce8\u518c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"rms"),"\u5305\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,r.kt)("h4",{id:"\u81ea\u52a8\u6ce8\u518c"},"\u81ea\u52a8\u6ce8\u518c"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"rms"),"\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"grpc server"),"\u5bfc\u5165\u5230\u4e3b\u7a0b\u5e8f\u4e2d\uff0c\u6bd4\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "path/to/r/rms/grpc/server"\n)\n\nfunc main() {\n    .....\n}\n')),(0,r.kt)("p",null,"\u4e3b\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e"),"\u4e2d\u7684\u6570\u636e\uff0c\u521b\u5efa\u5bf9\u5e94\u7684\u5b9e\u4f8b\uff0c\u5e76\u4e14\u653e\u5230\u5185\u5b58\u4e2d\u3002\u6211\u4eec\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u8c03\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'srv := server.Get("server1")\n')),(0,r.kt)("p",null,"\u76f4\u63a5\u62ff\u5230\u4e86server\uff0c\u63a5\u4e0b\u6765\u53ef\u4ee5\u7ec4\u518c\u670d\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"testdata.RegisterGreeterServer(srv, &GreeterServerImpl{})\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("h3",{id:"\u4e3b\u914d\u7f6e"},"\u4e3b\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"server\u540d\u79f0\uff0c\u7528\u6765\u83b7\u53d6server\u5b9e\u4f8b\u3002\u5982\u679c\u4f7f\u7528\u6ce8\u518c\u4e2d\u5fc3\uff0c\u4f1a\u4ee5\u8be5\u540d\u79f0\u8fdb\u884c\u6ce8\u518c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tcp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Addr"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},":0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegistrarRef"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u7684\u6ce8\u518c\u4e2d\u5fc3\u540d\u79f0\uff0c\u7528\u6765\u6839\u636e\u540d\u79f0\u83b7\u53d6\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u4f8b"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoggerRef"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u7684\u65e5\u5fd7\u540d\u79f0\uff0c\u7528\u6765\u6839\u636e\u540d\u79f0\u83b7\u53d6\u65e5\u5fd7\u5b9e\u4f8b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u6253\u5230\u63a7\u5236\u53f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnableMetrics"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"td"},"metrics"),"\u63d2\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnableTracing"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"td"},"tracing"),"\u63d2\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnableLogging"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"td"},"logging"),"\u63d2\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tls"),(0,r.kt)("td",{parentName:"tr",align:null},"ServerTLSConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"TLS\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GrpcOpts"),(0,r.kt)("td",{parentName:"tr",align:null},"GRPCServerOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"grpc \u53c2\u6570\u8be6\u7ec6\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"map<string, string>"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5143\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"servertlsconfig"},"ServerTLSConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CertFile"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KeyFile"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"key\u6587\u4ef6\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"grpcserveroptions"},"GRPCServerOptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MaxConcurrentStreams"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u8fde\u63a5\u4e2d\u6700\u5927\u5e76\u53d1Stream\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"math.MaxUint32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MaxReceiveMessageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5141\u8bb8\u63a5\u6536\u7684\u5b57\u8282\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4MB"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MaxSendMessageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5141\u8bb8\u53d1\u9001\u7684\u5b57\u8282\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"math.MaxInt32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KeepaliveParams"),(0,r.kt)("td",{parentName:"tr",align:null},"GRPCServerKeepaliveParams"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"Keepalive\u76f8\u5173\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KeepalivePolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"GRPCServerKeepalivePolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"keepalive \u5f3a\u5236\u7b56\u7565\uff0c\u670d\u52a1\u5668\u5c06\u5173\u95ed\u4e0e\u8fdd\u53cd\u6b64\u89c4\u5b9a\u7684\u5ba2\u6237\u7aef\u7684\u8fde\u63a5"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InitialWindowSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eStream\u7684\u6ed1\u52a8\u7a97\u53e3\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"64KB"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InitialConnWindowSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eConnection\u7684\u6ed1\u52a8\u7a97\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"16 * 64KB"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WriteBufferSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5199\u7f13\u51b2\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"32KB"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadBufferSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u7f13\u51b2\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"32KB"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConnectionTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"120s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MaxHeaderListSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u6b21\u8c03\u7528\u5141\u8bb8\u53d1\u9001\u7684header\u7684\u6700\u5927\u6761\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint32(16 << 20)"))))),(0,r.kt)("h3",{id:"grpcserverkeepaliveparams"},"GRPCServerKeepaliveParams"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MaxConnectionIdle"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u8fde\u63a5\u7a7a\u95f2\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"math.MaxInt64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MaxConnectionAge"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u8fde\u63a5\u5b58\u6d3b\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"math.MaxInt64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MaxConnectionAgeGrace"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u5f3a\u5236\u5173\u95ed\u8fde\u63a5\u4e4b\u95f4, \u5141\u8bb8\u5904\u7406pending\u7684rpc\u8bf7\u6c42\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"math.MaxInt64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u95f2\u68c0\u6d4b\u65f6\u95f4\uff0c\u4e0d\u80fd\u5c0f\u4e8e1s"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2h"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"20s"))))),(0,r.kt)("h3",{id:"grpcserverkeepalivepolicy"},"GRPCServerKeepalivePolicy"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MinTime"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5ba2\u6237\u7aef\u4e24\u6b21 ping \u7684\u95f4\u9694\u5c0f\u4e8eMinTime\uff0c\u5219\u5173\u95ed\u8fde\u63a5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PermitWithoutStream"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5373\u4f7f\u6ca1\u6709 active stream, \u4e5f\u5141\u8bb8 ping"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h2",{id:"\u914d\u7f6e\u4e3e\u4f8b"},"\u914d\u7f6e\u4e3e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[[ngo.microservices.grpc.servers]]\nname = "server1"\nnetwork = "tcp"\naddr = ":8080"\ntimeout = "30s"\nregistrarRef = ""\nloggerRef = ""\nenableMetrics = false\nenableTracing = false\nenableLogging = false\n[ngo.microservices.grpc.servers.metadata]\nkey1 = "value1"\n')),(0,r.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u652f\u6301\u4e86\u540c\u4e00\u4e2a\u5e94\u7528\u7684\u591a",(0,r.kt)("inlineCode",{parentName:"p"},"grpc server"),", \u56e0\u6b64\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"toml"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u591a\u4e2a\u3002"),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6"},"\u6dfb\u52a0\u4e2d\u95f4\u4ef6"),(0,r.kt)("p",null,"ngo\u914d\u7f6e\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"tracing"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"metrics"),"\u4e2d\u95f4\u4ef6\uff0c\u6211\u4eec\u65e0\u9700\u624b\u52a8\u6dfb\u52a0\uff0c\u5bf9\u4e8e\u5176\u4ed6\u4e2d\u95f4\u4ef6\u6211\u4eec\u9700\u8981\u624b\u52a8\u6dfb\u52a0\uff0c\u8c03\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// selector \u652f\u6301 / \u5168\u5c40\u63d2\u4ef6\n//              /{package} \u5305\u7ea7\u522b\u63d2\u4ef6\n//              /{package}.{service} \u670d\u52a1\u7ea7\u522b\u63d2\u4ef6\n//              /{package}.{service}/{method} \u65b9\u6cd5\u7ea7\u522b\u63d2\u4ef6\n// \u52a0\u8f7d\u987a\u5e8f\u5168\u5c40->\u5168\u5c40->\u5305->\u670d\u52a1->\u65b9\u6cd5\nfunc (s *Server) Use(selector string, mws ...middleware.Middleware) \n")))}g.isMDXComponent=!0}}]);