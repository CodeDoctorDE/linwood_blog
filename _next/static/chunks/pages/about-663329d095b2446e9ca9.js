_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{TaPz:function(e,o,t){"use strict";t.r(o),t.d(o,"default",(function(){return b}));var a=t("rePB"),r=t("nKUr"),n=(t("q1tI"),t("Ji2X")),i=t("ofer"),c=t("hlFM"),d=t("Z3vd"),l=t("iXEO");function p(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?p(Object(t),!0).forEach((function(o){Object(a.a)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function b(){return Object(r.jsx)(n.a,{maxWidth:"sm",children:Object(r.jsxs)(c.a,{my:4,children:[Object(r.jsx)(i.a,{variant:"h4",component:"h1",gutterBottom:!0,children:"Next.js example"}),Object(r.jsx)(d.a,s(s({},{component:l.a,href:"/about",naked:!0}),{},{color:"default",variant:"contained",children:"About"})),Object(r.jsx)(l.a,{href:"/",color:"secondary",children:"Go to the main page"})]})})}},Z3vd:function(e,o,t){"use strict";var a=t("Ff2n"),r=t("wx14"),n=t("q1tI"),i=(t("17x9"),t("iuhU")),c=t("H2TA"),d=t("ye/S"),l=t("VD++"),p=t("NqtD"),s=n.forwardRef((function(e,o){var t=e.children,c=e.classes,d=e.className,s=e.color,b=void 0===s?"default":s,u=e.component,h=void 0===u?"button":u,m=e.disabled,g=void 0!==m&&m,y=e.disableElevation,x=void 0!==y&&y,f=e.disableFocusRipple,v=void 0!==f&&f,O=e.endIcon,S=e.focusVisibleClassName,j=e.fullWidth,w=void 0!==j&&j,k=e.size,z=void 0===k?"medium":k,C=e.startIcon,E=e.type,N=void 0===E?"button":E,P=e.variant,I=void 0===P?"text":P,R=Object(a.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),T=C&&n.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(p.a)(z))])},C),_=O&&n.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(p.a)(z))])},O);return n.createElement(l.a,Object(r.a)({className:Object(i.a)(c.root,c[I],d,"inherit"===b?c.colorInherit:"default"!==b&&c["".concat(I).concat(Object(p.a)(b))],"medium"!==z&&[c["".concat(I,"Size").concat(Object(p.a)(z))],c["size".concat(Object(p.a)(z))]],x&&c.disableElevation,g&&c.disabled,w&&c.fullWidth),component:h,disabled:g,focusRipple:!v,focusVisibleClassName:Object(i.a)(c.focusVisible,S),ref:o,type:N},R),n.createElement("span",{className:c.label},T,t,_))}));o.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(d.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(d.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(d.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(s)},hIud:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("TaPz")}])}},[["hIud",0,1,2,3,4,5]]]);