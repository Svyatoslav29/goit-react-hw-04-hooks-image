(this["webpackJsonpgoit-react-hw-04-hooks-image"]=this["webpackJsonpgoit-react-hw-04-hooks-image"]||[]).push([[0],{14:function(e,t,a){e.exports={Button:"Button_Button__UUCg_",ButtonWraper:"Button_ButtonWraper__38hlr"}},15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__18xn0",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__193Xf",ImageGalleryItemIimage:"ImageGalleryItem_ImageGalleryItemIimage__3bbKy"}},16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3zur2",Modal:"Modal_Modal__JzWj5"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2J8yT"}},33:function(e,t,a){},6:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__3lSOb",SearchForm:"SearchBar_SearchForm__3N3fa",SearchFormButton:"SearchBar_SearchFormButton__m9A83",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__hWnf9",SearchFormInput:"SearchBar_SearchFormInput__JWKWo"}},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),o=a.n(c),l=(a(33),a(5)),s=a.n(l),i=a(18),u=a(12),m=a(4),g=a(14),j=a.n(g),b=a(0);var h=function(e){var t=e.onClick;return Object(b.jsx)("div",{className:j.a.ButtonWraper,children:Object(b.jsx)("button",{className:j.a.Button,type:"button",onClick:function(){return t()},children:"Load more"})})},d=a(15),f=a.n(d),p=a(16),O=a.n(p),v=a(2),I=a.n(v),_=document.querySelector("#modal-root");function x(e){var t=e.modalImage,a=e.tags,r=e.onToggleModal;Object(n.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&r()};return Object(c.createPortal)(Object(b.jsx)("div",{className:O.a.Orerlay,onClick:function(e){e.currentTarget===e.target&&r()},children:Object(b.jsx)("div",{className:O.a.Modal,children:Object(b.jsx)("img",{src:t,alt:a})})}),_)}x.PropTypes={onToggleModal:I.a.func,modalImage:I.a.string,tags:I.a.string};var y=x;var S=function(e){var t=e.id,a=e.previewImg,n=e.tags,r=e.onToggleModal,c=e.showModal,o=e.modalImage,l=e.onImgClick,s=e.largeImgURL;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(b.jsx)("img",{"data-img":s,src:a,alt:n,className:f.a.ImageGalleryItemImage,onClick:l})},t),c&&Object(b.jsx)(y,{modalImage:o,onToggleModal:r,tags:n})]})},w=a(27),B=a.n(w);var F=function(e){var t,a=e.images,r=Object(n.useState)(!1),c=Object(m.a)(r,2),o=c[0],l=c[1],s=Object(n.useState)(""),i=Object(m.a)(s,2),u=i[0],g=i[1],j=function(){l(!o)},h=function(e){var t=e.target.dataset.img;g(t),j()};return a&&(t=Object(b.jsx)("ul",{className:B.a.ImageGallery,children:a.map((function(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.largeImageURL;return Object(b.jsx)(S,{largeImageURL:r,previewImg:a,tags:n,onToggleModal:j,showModal:o,onImgClick:h,modalImg:u},t)}))})),Object(b.jsx)("div",{children:t})},k=a(28),G=a.n(k);a(56);var C=function(){return Object(b.jsx)("div",{className:"Button-wraper",children:Object(b.jsx)(G.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100,timeout:3e3})})},L=a(6),N=a.n(L);var M=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],o=r[1];return Object(b.jsx)("div",{children:Object(b.jsx)("section",{className:N.a.Searchbar,children:Object(b.jsxs)("form",{className:N.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return alert("Enter your query!");t(c),o("")},children:[Object(b.jsx)("button",{type:"submit",className:N.a.SearchFormButton,children:Object(b.jsx)("span",{className:N.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{name:"query",value:c,onChange:function(e){o(e.target.value.toLowerCase())},className:N.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})},T=a(17),E=a.n(T),U="23250657-60999439b4e5e927be309f9a4";E.a.defaults.baseURL="https://pixabay.com/api/";var W="image_type=photo&orientation=horizontal&per_page=12";function J(){return(J=Object(u.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("?&q=".concat(t,"&page=").concat(a,"&key=").concat(U,"&").concat(W));case 2:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=function(e,t){return J.apply(this,arguments)};var q=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),o=Object(m.a)(c,2),l=o[0],g=o[1],j=Object(n.useState)([]),d=Object(m.a)(j,2),f=d[0],p=d[1],O=Object(n.useState)(!1),v=Object(m.a)(O,2),I=v[0],_=v[1];Object(n.useEffect)((function(){if(a){_(!0);var e=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(a,l);case 3:t=e.sent,p((function(e){return[].concat(Object(i.a)(e),Object(i.a)(t))})),1!==l&&x(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[l,a]);var x=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},y=f.length>0&&f.length>=12;return Object(b.jsxs)("div",{children:[Object(b.jsx)(M,{onSubmit:function(e){r(e),g(1),p([])}}),Object(b.jsx)(F,{images:f}),y&&Object(b.jsx)(h,{onClick:function(){_(!I),g((function(e){return e+1})),_(I)}}),I&&Object(b.jsx)(C,{})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root")),P()}},[[75,1,2]]]);
//# sourceMappingURL=main.27971706.chunk.js.map