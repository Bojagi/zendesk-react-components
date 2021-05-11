(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{0:function(module,exports){module.exports=react},1470:function(module,exports,__webpack_require__){__webpack_require__(1471),__webpack_require__(70),module.exports=__webpack_require__(71)},1471:function(module,exports,__webpack_require__){var componentModule=__webpack_require__(1472);registerComponent("3-Notification.stories",componentModule),module.exports=componentModule},1472:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(21),__webpack_require__(9),__webpack_require__(7),__webpack_require__(18),__webpack_require__(22),__webpack_require__(19),__webpack_require__(20),__webpack_require__(23),__webpack_require__(24);var react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),_src__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(569),_src__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(306),_src__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(461),_src__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(459),_grid_src__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(50),_grid_src__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(64),_grid_src__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(57);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_exports__.default={title:"Components/Notifications/Notification",component:_src__WEBPACK_IMPORTED_MODULE_10__.a,parameters:{layout:"padded"}};var Default=function Default(_ref){var type=_ref.type,isRegular=_ref.isRegular,isMultiLine=_ref.isMultiLine;return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_grid_src__WEBPACK_IMPORTED_MODULE_14__.a,null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_grid_src__WEBPACK_IMPORTED_MODULE_15__.a,null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_grid_src__WEBPACK_IMPORTED_MODULE_16__.a,null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_10__.a,{type:type},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_11__.a,{isRegular:isRegular},"Nori Grape Beet"),isMultiLine?react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_12__.a,null,"Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify black-eyed pea quandong."):"Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon\n           amaranth tatsoi tomatillo melon.",react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_13__.a,{"aria-label":"Close Notification"})))))};Default.args={type:void 0},Default.argTypes={isRegular:{control:"boolean"},type:{control:{type:"select",options:[void 0,"success","warning","error","info"]}},isMultiLine:{control:"boolean"}},Default.parameters=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({storySource:{source:'({ type, isRegular, isMultiLine }) => (\n  <Grid>\n    <Row>\n      <Col>\n        <Notification type={type}>\n          <Title isRegular={isRegular}>Nori Grape Beet</Title>\n          {isMultiLine ? (\n            <Paragraph>\n              Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.\n              Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea\n              lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea\n              sierra leone bologi leek soko chicory celtuce parsley jícama salsify black-eyed pea\n              quandong.\n            </Paragraph>\n          ) : (\n            `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon\n           amaranth tatsoi tomatillo melon.`\n          )}\n          <Close aria-label="Close Notification" />\n        </Notification>\n      </Col>\n    </Row>\n  </Grid>\n)'}},Default.parameters)},219:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledTitle}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_theming_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_theming_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),StyledTitle=styled_components__WEBPACK_IMPORTED_MODULE_0__.e.div.attrs({"data-garden-id":"notifications.title","data-garden-version":"storybook"}).withConfig({displayName:"StyledTitle",componentId:"xx4jsv-0"})(["margin:0;color:",";font-weight:",";",";"],(function(props){return props.theme.colors.foreground}),(function(props){return props.isRegular?props.theme.fontWeights.regular:props.theme.fontWeights.semibold}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)("notifications.title",props)}));StyledTitle.defaultProps={theme:_theming_src__WEBPACK_IMPORTED_MODULE_2__.a}},228:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ARRAY_VALIDATION_TYPE}));var ARRAY_VALIDATION_TYPE=["success","warning","error","info"]},231:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return validationIcons})),__webpack_require__.d(__webpack_exports__,"a",(function(){return validationHues}));var _zendeskgarden_svg_icons_src_16_alert_error_stroke_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(335),_zendeskgarden_svg_icons_src_16_check_circle_stroke_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(336),_zendeskgarden_svg_icons_src_16_alert_warning_stroke_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(337),_zendeskgarden_svg_icons_src_16_info_stroke_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(258),validationIcons={success:_zendeskgarden_svg_icons_src_16_check_circle_stroke_svg__WEBPACK_IMPORTED_MODULE_1__.a,error:_zendeskgarden_svg_icons_src_16_alert_error_stroke_svg__WEBPACK_IMPORTED_MODULE_0__.a,warning:_zendeskgarden_svg_icons_src_16_alert_warning_stroke_svg__WEBPACK_IMPORTED_MODULE_2__.a,info:_zendeskgarden_svg_icons_src_16_info_stroke_svg__WEBPACK_IMPORTED_MODULE_3__.a},validationHues={success:"successHue",error:"dangerHue",warning:"warningHue",info:"neutralHue"}},238:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledBase}));__webpack_require__(29);var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_theming_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_theming_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39),_theming_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),boxShadow=function boxShadow(props){var theme=props.theme,space=theme.space,shadows=theme.shadows,offsetY="".concat(5*space.base,"px"),blurRadius="".concat(7*space.base,"px"),color=Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)("chromeHue",600,theme,.15);return shadows.lg(offsetY,blurRadius,color)},StyledBase=styled_components__WEBPACK_IMPORTED_MODULE_1__.e.div.withConfig({displayName:"StyledBase",componentId:"sc-14syaqw-0"})(["position:relative;border:",";border-radius:",";box-shadow:",";padding:",";line-height:",";font-size:",";direction:",";",";"],(function(props){return props.theme.borders.sm}),(function(props){return props.theme.borderRadii.md}),(function(props){return props.isFloating&&boxShadow}),(function padding(props){var space=props.theme.space,paddingVertical="".concat(5*space.base,"px"),paddingHorizontal="".concat(10*space.base,"px");return"".concat(paddingVertical," ").concat(paddingHorizontal)}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_3__.a)(5*props.theme.space.base,props.theme.fontSizes.md)}),(function(props){return props.theme.fontSizes.md}),(function(props){return props.theme.rtl&&"rtl"}),(function colorStyles(props){var backgroundColor,borderColor,foregroundColor;return props.hue?(backgroundColor=Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)(props.hue,100,props.theme),borderColor=Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)(props.hue,300,props.theme),foregroundColor=Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)(props.hue,"info"===props.type?600:700,props.theme)):(backgroundColor=props.theme.colors.background,borderColor=Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)("neutralHue",300,props.theme),foregroundColor=Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)("neutralHue",800,props.theme)),Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(["border-color:",";background-color:",";color:",";"],borderColor,backgroundColor,foregroundColor)}));StyledBase.defaultProps={theme:_theming_src__WEBPACK_IMPORTED_MODULE_4__.a}},249:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return NotificationsContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useNotificationsContext}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),NotificationsContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useNotificationsContext=function useNotificationsContext(){return Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NotificationsContext)}},306:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Title}));__webpack_require__(11);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(219);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var Title=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(props,ref){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__.a,_extends({ref:ref},props))}));Title.displayName="Title";try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{isRegular:{defaultValue:null,description:"Applies regular (non-bold) font weight",name:"isRegular",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/notifications/src/elements/content/Title.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"packages/notifications/src/elements/content/Title.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}},374:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledIcon}));__webpack_require__(9),__webpack_require__(13),__webpack_require__(7);var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),_theming_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_theming_src__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var StyledIcon=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.e)((function(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,["children"]);return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3__.Children.only(children),props)})).withConfig({displayName:"StyledIcon",componentId:"msklws-0"})(["position:absolute;right:",";left:",";margin-top:","px;color:",";"],(function(props){return props.theme.rtl&&"".concat(4*props.theme.space.base,"px")}),(function(props){return!props.theme.rtl&&"".concat(4*props.theme.space.base,"px")}),(function(props){return props.theme.space.base/2}),(function(props){return props.hue&&Object(_theming_src__WEBPACK_IMPORTED_MODULE_5__.a)(props.hue,"warningHue"===props.hue?700:600,props.theme)}));StyledIcon.defaultProps={theme:_theming_src__WEBPACK_IMPORTED_MODULE_6__.a}},39:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getLineHeight}));__webpack_require__(31),__webpack_require__(97),__webpack_require__(94),__webpack_require__(41),__webpack_require__(7),__webpack_require__(36),__webpack_require__(37),__webpack_require__(33),__webpack_require__(32),__webpack_require__(34),__webpack_require__(35),__webpack_require__(42),__webpack_require__(43);var polished__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(28);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function getLineHeight(height,fontSize){var _getValueAndUnit2=_slicedToArray(Object(polished__WEBPACK_IMPORTED_MODULE_13__.b)(height.toString()),2),heightValue=_getValueAndUnit2[0],heightUnit=_getValueAndUnit2[1],_getValueAndUnit4=_slicedToArray(Object(polished__WEBPACK_IMPORTED_MODULE_13__.b)(fontSize.toString()),2),fontSizeValue=_getValueAndUnit4[0],fontSizeUnit=_getValueAndUnit4[1];if(heightUnit&&"px"!==heightUnit)throw new Error("Unexpected `height` with '".concat(heightUnit,"' units."));if(fontSizeUnit&&"px"!==fontSizeUnit)throw new Error("Unexpected `fontSize` with '".concat(fontSizeUnit,"' units."));return heightValue/fontSizeValue}},459:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Close}));__webpack_require__(11);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(460),_utils_useNotificationsContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(249),_zendeskgarden_svg_icons_src_12_x_stroke_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(407);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var Close=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(props,ref){var hue=Object(_utils_useNotificationsContext__WEBPACK_IMPORTED_MODULE_3__.b)();return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__.a,_extends({ref:ref,hue:hue},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_zendeskgarden_svg_icons_src_12_x_stroke_svg__WEBPACK_IMPORTED_MODULE_4__.a,null))}));Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/notifications/src/elements/content/Close.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"packages/notifications/src/elements/content/Close.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},460:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledClose}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_theming_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_theming_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_theming_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),StyledClose=styled_components__WEBPACK_IMPORTED_MODULE_0__.e.button.attrs({"data-garden-id":"notifications.close","data-garden-version":"storybook"}).withConfig({displayName:"StyledClose",componentId:"sc-1mr9nx1-0"})(["display:block;position:absolute;top:","px;",":",";transition:background-color 0.1s ease-in-out,color 0.25s ease-in-out;border:none;border-radius:50%;background-color:transparent;cursor:pointer;padding:0;width:","px;height:","px;overflow:hidden;color:",";font-size:0;user-select:none;&:hover{color:",";}&:focus{outline:none;}&[data-garden-focus-visible]{background-color:",";color:",";&::-moz-focus-inner{border:0;}}",";"],(function(props){return props.theme.space.base}),(function(props){return props.theme.rtl?"left":"right"}),(function(props){return"".concat(props.theme.space.base,"px")}),(function(props){return 7*props.theme.space.base}),(function(props){return 7*props.theme.space.base}),(function(props){return props.hue?Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)(props.hue,"warningHue"===props.hue?700:600,props.theme):Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)("neutralHue",600,props.theme)}),(function(props){return props.hue?Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)(props.hue,800,props.theme):Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)("neutralHue",800,props.theme)}),(function(props){return props.hue?Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)(props.hue,"warningHue"===props.hue?700:600,props.theme,.15):Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)("neutralHue",600,props.theme,.15)}),(function(props){return props.hue?Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)(props.hue,800,props.theme):Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)("neutralHue",800,props.theme)}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)("notifications.close",props)}));StyledClose.defaultProps={theme:_theming_src__WEBPACK_IMPORTED_MODULE_3__.a}},461:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Paragraph}));__webpack_require__(11);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(462);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var Paragraph=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(props,ref){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__.a,_extends({ref:ref},props))}));Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/notifications/src/elements/content/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"packages/notifications/src/elements/content/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},462:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledParagraph}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_theming_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_theming_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),StyledParagraph=styled_components__WEBPACK_IMPORTED_MODULE_0__.e.p.attrs({"data-garden-id":"notifications.paragraph","data-garden-version":"storybook"}).withConfig({displayName:"StyledParagraph",componentId:"sc-12tmd6p-0"})(["margin:","px 0 0;",";"],(function(props){return 2*props.theme.space.base}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)("notifications.paragraph",props)}));StyledParagraph.defaultProps={theme:_theming_src__WEBPACK_IMPORTED_MODULE_2__.a}},50:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Grid}));__webpack_require__(9),__webpack_require__(13),__webpack_require__(7),__webpack_require__(11);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_utils_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(46),_utils_useGridContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(52),_styled__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(53);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Grid=react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef((function(_ref,ref){var columns=_ref.columns,debug=_ref.debug,props=_objectWithoutProperties(_ref,["columns","debug"]),value=Object(react__WEBPACK_IMPORTED_MODULE_4__.useMemo)((function(){return{columns:columns,gutters:props.gutters,debug:debug}}),[columns,props.gutters,debug]);return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_utils_useGridContext__WEBPACK_IMPORTED_MODULE_7__.a.Provider,{value:value},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__.a,_extends({debug:debug,ref:ref},props)))}));Grid.displayName="Grid",Grid.propTypes={columns:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),gutters:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(_utils_types__WEBPACK_IMPORTED_MODULE_6__.d),debug:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool},Grid.defaultProps={columns:12,gutters:"md"};try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:{value:"12"},description:"Defines the number of individual columns that the grid contains",name:"columns",required:!1,type:{name:"string | number"}},gutters:{defaultValue:{value:"md"},description:"Specifies the grid column gutter width. The value `false` collapses the gutters",name:"gutters",required:!1,type:{name:'false | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxs"'}},debug:{defaultValue:null,description:"Highlights the columns for layout debugging",name:"debug",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/elements/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"packages/grid/src/elements/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}},53:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledGrid}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(44),_theming_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_theming_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),_theming_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),StyledGrid=styled_components__WEBPACK_IMPORTED_MODULE_0__.e.div.attrs({"data-garden-id":"grid.grid","data-garden-version":"storybook"}).withConfig({displayName:"StyledGrid",componentId:"oxgg5i-0"})(["direction:",";margin-right:auto;margin-left:auto;width:100%;box-sizing:border-box;",";",";",";"],(function(props){return props.theme.rtl&&"rtl"}),(function(props){return function sizeStyles(props){var padding=props.gutters?Object(polished__WEBPACK_IMPORTED_MODULE_1__.a)("".concat(props.theme.space[props.gutters]," / 2")):0;return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.d)(["padding-right:",";padding-left:",";"],padding,padding)}(props)}),(function(props){return props.debug&&function colorStyles(props){var borderColor=Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)(props.theme.palette.crimson,400,props.theme,.5),borderWidth=Object(polished__WEBPACK_IMPORTED_MODULE_1__.a)("".concat(props.theme.borderWidths.sm," * 2"));return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.d)(["box-shadow:-"," 0 0 0 ",","," 0 0 0 ",";"],borderWidth,borderColor,borderWidth,borderColor)}(props)}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_3__.a)("grid.grid",props)}));StyledGrid.defaultProps={gutters:"md",theme:_theming_src__WEBPACK_IMPORTED_MODULE_4__.a}},569:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Notification}));__webpack_require__(11);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(189),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_zendeskgarden_svg_icons_src_16_info_stroke_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(258),_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(705),_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(374),_utils_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(228),_utils_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(231);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var Notification=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(props,ref){var Icon=props.type?_utils_icons__WEBPACK_IMPORTED_MODULE_7__.b[props.type]:_zendeskgarden_svg_icons_src_16_info_stroke_svg__WEBPACK_IMPORTED_MODULE_3__.a,hue=props.type&&_utils_icons__WEBPACK_IMPORTED_MODULE_7__.a[props.type];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__.a,_extends({ref:ref,type:props.type,isFloating:!0},props),props.type&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__.a,{hue:hue},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,null)),props.children)}));Notification.displayName="Notification",Notification.propTypes={type:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(_utils_types__WEBPACK_IMPORTED_MODULE_6__.a)};try{Notification.displayName="Notification",Notification.__docgenInfo={description:"",displayName:"Notification",props:{type:{defaultValue:null,description:"Applies notification type styles",name:"type",required:!1,type:{name:'"success" | "warning" | "error" | "info"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/notifications/src/elements/Notification.tsx#Notification"]={docgenInfo:Notification.__docgenInfo,name:"Notification",path:"packages/notifications/src/elements/Notification.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}},705:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledNotification}));var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(189),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_theming_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_theming_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),_theming_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_utils_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(228),_content_StyledTitle__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(219),_StyledBase__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(238),StyledNotification=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.e)(_StyledBase__WEBPACK_IMPORTED_MODULE_7__.a).attrs((function(props){return{"data-garden-id":"notifications.notification","data-garden-version":"storybook",role:void 0===props.role?"status":props.role}})).withConfig({displayName:"StyledNotification",componentId:"uf6jh-0"})([""," ",";"],(function colorStyles(props){var color,type=props.type,theme=props.theme,colors=theme.colors,successHue=colors.successHue,dangerHue=colors.dangerHue,warningHue=colors.warningHue,foreground=colors.foreground;switch(type){case"success":color=Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)(successHue,600,theme);break;case"error":color=Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)(dangerHue,600,theme);break;case"warning":color=Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)(warningHue,700,theme);break;case"info":color=foreground;break;default:color="inherit"}return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(["","{color:",";}"],_content_StyledTitle__WEBPACK_IMPORTED_MODULE_6__.a,color)}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_3__.a)("notifications.notification",props)}));StyledNotification.propTypes={type:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_utils_types__WEBPACK_IMPORTED_MODULE_5__.a)},StyledNotification.defaultProps={theme:_theming_src__WEBPACK_IMPORTED_MODULE_4__.a}}},[[1470,108,0,1]]]);