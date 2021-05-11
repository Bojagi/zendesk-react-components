(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{0:function(module,exports){module.exports=react},110:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledFont}));__webpack_require__(13);var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),polished__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(87),_theming_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(69),_theming_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_theming_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),_theming_src__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),StyledFont=styled_components__WEBPACK_IMPORTED_MODULE_1__.e.div.attrs({"data-garden-id":"typography.font","data-garden-version":"storybook"}).withConfig({displayName:"StyledFont",componentId:"sc-1iildbo-0"})(["",";",";"],(function(props){return function fontStyles(props){var fontSize,fontWeight,lineHeight,color,monospace=props.isMonospace&&-1!==["sm","md","lg","inherit"].indexOf(props.size),fontFamily=monospace&&props.theme.fonts.mono,direction=Object(_theming_src__WEBPACK_IMPORTED_MODULE_3__.a)(props)?"rtl":"ltr";if(monospace?"inherit"===props.size?(fontSize="calc(1em - 1px)",lineHeight="normal"):(fontSize=Object(polished__WEBPACK_IMPORTED_MODULE_2__.a)("".concat(props.theme.fontSizes[props.size]," - 1px")),lineHeight=Object(polished__WEBPACK_IMPORTED_MODULE_2__.a)("".concat(props.theme.lineHeights[props.size]," - 1px"))):"inherit"!==props.size&&(fontSize=props.theme.fontSizes[props.size],lineHeight=props.theme.lineHeights[props.size]),!0===props.isBold?fontWeight=props.theme.fontWeights.semibold:!1!==props.isBold&&"inherit"===props.size||(fontWeight=props.theme.fontWeights.regular),props.hue){var shade="yellow"===props.hue?700:600;color=Object(_theming_src__WEBPACK_IMPORTED_MODULE_4__.a)(props.hue,shade,props.theme)}return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(["line-height:",";color:",";font-family:",";font-size:",";font-weight:",";direction:",";"],lineHeight,color,fontFamily,fontSize,fontWeight,direction)}(props)}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_5__.a)("typography.font",props)}));StyledFont.defaultProps={theme:_theming_src__WEBPACK_IMPORTED_MODULE_6__.a,size:"inherit"};try{StyledFont.displayName="StyledFont",StyledFont.__docgenInfo={description:"",displayName:"StyledFont",props:{size:{defaultValue:{value:"inherit"},description:"",name:"size",required:!1,type:{name:'"inherit" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},"data-garden-id":{defaultValue:null,description:"",name:"data-garden-id",required:!1,type:{name:"string"}},"data-garden-version":{defaultValue:null,description:"",name:"data-garden-version",required:!1,type:{name:"any"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},isMonospace:{defaultValue:null,description:"",name:"isMonospace",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/styled/StyledFont.tsx#StyledFont"]={docgenInfo:StyledFont.__docgenInfo,name:"StyledFont",path:"packages/typography/src/styled/StyledFont.tsx#StyledFont"})}catch(__react_docgen_typescript_loader_error){}},1199:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CodeBlock}));__webpack_require__(41),__webpack_require__(613),__webpack_require__(119),__webpack_require__(213),__webpack_require__(214),__webpack_require__(9),__webpack_require__(13),__webpack_require__(7),__webpack_require__(11);var react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),prism_react_renderer__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1158),prism_react_renderer__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(447),_zendeskgarden_container_scrollregion__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1156),_styled__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1643),_styled__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(713),_styled__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(1644),_styled__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(1645);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var CodeBlock=react__WEBPACK_IMPORTED_MODULE_9___default.a.forwardRef((function(_ref,ref){var _size,children=_ref.children,containerProps=_ref.containerProps,highlightLines=_ref.highlightLines,isLight=_ref.isLight,isNumbered=_ref.isNumbered,language=_ref.language,size=_ref.size,other=_objectWithoutProperties(_ref,["children","containerProps","highlightLines","isLight","isNumbered","language","size"]),containerRef=Object(react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null),code=Array.isArray(children)?children[0]:children;_size="small"===size?"sm":"medium"===size?"md":"lg";var dependency=Object(react__WEBPACK_IMPORTED_MODULE_9__.useMemo)((function(){return[size,children]}),[size,children]),containerTabIndex=Object(_zendeskgarden_container_scrollregion__WEBPACK_IMPORTED_MODULE_12__.a)({containerRef:containerRef,dependency:dependency});return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_13__.a,_extends({},containerProps,{ref:containerRef,tabIndex:containerTabIndex}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_10__.a,{Prism:prism_react_renderer__WEBPACK_IMPORTED_MODULE_11__.a,code:code?code.trim():"",language:language||"tsx"},(function(_ref2){var className=_ref2.className,tokens=_ref2.tokens,getLineProps=_ref2.getLineProps,getTokenProps=_ref2.getTokenProps;return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_14__.a,_extends({className:className,ref:ref,isLight:isLight},other),tokens.map((function(line,index){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_15__.a,_extends({},getLineProps({line:line}),{key:index,isHighlighted:highlightLines&&highlightLines.includes(index+1),isLight:isLight,isNumbered:isNumbered,size:_size}),line.map((function(token,tokenKey){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_16__.a,_extends({},getTokenProps({token:token}),{key:tokenKey,isLight:isLight}),token.empty?"\n":token.content)})))})))})))}));CodeBlock.displayName="CodeBlock",CodeBlock.defaultProps={language:"tsx",size:"medium"};try{CodeBlock.displayName="CodeBlock",CodeBlock.__docgenInfo={description:"",displayName:"CodeBlock",props:{language:{defaultValue:{value:"tsx"},description:"Selects the language used by the Prism tokenizer",name:"language",required:!1,type:{name:'"css" | "go" | "markup" | "bash" | "clike" | "c" | "cpp" | "javascript" | "jsx" | "coffeescript" | "actionscript" | "css-extr" | "diff" | "git" | "graphql" | "handlebars" | "json" | ... 15 more ...'}},size:{defaultValue:{value:"medium"},description:"Specifies the font size",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLight:{defaultValue:null,description:"Applies light mode styling",name:"isLight",required:!1,type:{name:"boolean"}},isNumbered:{defaultValue:null,description:"Displays line numbers",name:"isNumbered",required:!1,type:{name:"boolean"}},highlightLines:{defaultValue:null,description:"Determines the lines to highlight",name:"highlightLines",required:!1,type:{name:"number[]"}},containerProps:{defaultValue:null,description:"Passes props to the code block container",name:"containerProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/typography/src/elements/CodeBlock.tsx#CodeBlock"]={docgenInfo:CodeBlock.__docgenInfo,name:"CodeBlock",path:"packages/typography/src/elements/CodeBlock.tsx#CodeBlock"})}catch(__react_docgen_typescript_loader_error){}},1513:function(module,exports,__webpack_require__){__webpack_require__(1514),__webpack_require__(70),module.exports=__webpack_require__(71)},1514:function(module,exports,__webpack_require__){var componentModule=__webpack_require__(1515);registerComponent("3-CodeBlock.stories",componentModule),module.exports=componentModule},1515:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(119),__webpack_require__(31),__webpack_require__(32),__webpack_require__(34),__webpack_require__(41),__webpack_require__(7),__webpack_require__(36),__webpack_require__(37),__webpack_require__(33),__webpack_require__(43),__webpack_require__(35),__webpack_require__(42),__webpack_require__(21),__webpack_require__(9),__webpack_require__(18),__webpack_require__(22),__webpack_require__(19),__webpack_require__(20),__webpack_require__(23),__webpack_require__(24);var react__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__),_src__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(1199),_grid_src__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(50),_grid_src__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(64),_grid_src__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(57);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var CODE={bash:'\n#!/bin/sh\n\n# Exports.\n\nexport ZSH="$HOME/.oh-my-zsh"\n\n# Aliases.\n\nalias ..="cd .."\n\n# Tools.\n\nif [ -f $(brew --prefix nvm)/nvm.sh ]; then\n    mkdir -p $HOME/.nvm\n    export NVM_DIR="$HOME/.nvm"\n    source $(brew --prefix nvm)/nvm.sh\nfi',css:"\nbutton,\n.button,\n#button,\n[role='button'] {\n  display: inline-block;\n  transition:\n    border-color .25s ease-in-out,\n    box-shadow .1s ease-in-out,\n    background-color .25s ease-in-out,\n    color .25s ease-in-out;\n  margin: 0;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  overflow: hidden !important;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none; /* Anchor tag reset */\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: inherit; /* Override for <input> & <button> elements */\n  font-weight: var(--zd-font-weight-regular);\n  -webkit-font-smoothing: subpixel-antialiased;\n  box-sizing: border-box;\n  user-select: none;\n  -webkit-touch-callout: none;\n\n  @media print {\n    display: none;\n  }\n}",javascript:"\nPrism.languages.markup = {\n  comment: /\x3c!--[\\s\\S]*?--\x3e/,\n  prolog: /<\\?[\\s\\S]+?\\?>/,\n  doctype: {\n    greedy: true\n  },\n  cdata: /<!\\[CDATA\\[[\\s\\S]*?]]>/i,\n  tag: {\n    greedy: true,\n    inside: {\n      tag: {\n        pattern: /^<\\/?[^\\s>\\/]+/i,\n        inside: {\n          punctuation: /^<\\/?/,\n          namespace: /^[^\\s>\\/:]+:/\n        }\n      },\n      'attr-value': {\n        pattern: /=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+)/i,\n        inside: {\n          punctuation: [\n            /^=/,\n            {\n              pattern: /^(\\s*)[\"']|[\"']$/,\n              lookbehind: true\n            }\n          ]\n        }\n      },\n      punctuation: /\\/?>/u,\n      'attr-name': {\n        pattern: /[^\\s>\\/]+/,\n        inside: {\n          namespace: /^[^\\s>\\/:]+:/\n        }\n      }\n    }\n  },\n  entity: /&#?[\\da-z]{1,8};/i\n};",json:'\n{\n  "data": [\n    {\n      "key": "product",\n      "version": 1,\n      "schema": {\n        "properties": {\n          "id": {\n            "type": "string",\n            "description": "product id"\n          },\n          "name": {\n            "type": "string",\n            "description": "product name"\n          }\n        },\n        "required": ["id", "name"]\n      },\n      "created_at": "2018-01-01T10:20:30Z",\n      "updated_at": "2018-01-01T10:20:30Z"\n    },\n    {\n      "key": "user",\n      "version": 2,\n      "schema": {\n        "properties": {\n          "id": {\n            "type": "string",\n            "description": "user id"\n          },\n          "name": {\n            "type": "string",\n            "description": "user name"\n          }\n        },\n        "required": ["id", "name"]\n      },\n      "created_at": "2018-01-01T10:20:30Z",\n      "updated_at": "2018-01-01T10:20:30Z"\n    }\n  ]\n}',markdown:'\n# Title 1\n## Title 2\n### Title 3\n#### Title 4\n##### Title 5\n###### Title 6\n\nOur product is an extension of our brand and we want it to feel like Zendesk. We use visual design\nto shape what Zendesk looks like, and voice and tone to shape what Zendesk sounds like.\n\n| Voice      | Tone       |\n| ---------- | ---------- |\n| About us   | About them |\n| Consistent | Variable   |\n\n*Italic*\n**Bold**\n**Bold on\nmultiple lines**\n*Italic on\nmultiple lines too*\n\n* This is\n* an unordered list\n\n1. This is an\n2. ordered list\n\n* *List item in italic*\n* **List item in bold**\n* [List item as a link](http://example.com "This is an example")\n\n> This is a quotation\n>> With another quotation inside\n> _italic here_, __bold there__\n> And a [link](http://example.com)',markup:'\n<!doctype html>\n<html class="no-js" lang="">\n\n<head>\n  <meta charset="utf-8">\n  <title></title>\n  <meta name="description" content="">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n\n  <meta property="og:title" content="">\n  <meta property="og:type" content="">\n  <meta property="og:url" content="">\n  <meta property="og:image" content="">\n\n  <link rel="manifest" href="site.webmanifest">\n  <link rel="apple-touch-icon" href="icon.png">\n  \x3c!-- Place favicon.ico in the root directory --\x3e\n\n  <link rel="stylesheet" href="css/normalize.css">\n  <link rel="stylesheet" href="css/main.css">\n\n  <meta name="theme-color" content="#fafafa">\n</head>\n\n<body>\n\n  \x3c!-- Add your site or application content here --\x3e\n  <p>Hello world! This is HTML5 Boilerplate.</p>\n  <script src="js/vendor/modernizr-{{MODERNIZR_VERSION}}.min.js"><\/script>\n  <script src="js/plugins.js"><\/script>\n  <script src="js/main.js"><\/script>\n\n  \x3c!-- Google Analytics: change UA-XXXXX-Y to be your site\'s ID. --\x3e\n  <script>\n    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;\n    ga(\'create\', \'UA-XXXXX-Y\', \'auto\');\n    ga(\'set\', \'anonymizeIp\', true);\n    ga(\'set\', \'transport\', \'beacon\');\n    ga(\'send\', \'pageview\')\n  <\/script>\n  <script src="https://www.google-analytics.com/analytics.js" async><\/script>\n</body>\n\n</html>',python:"\ndef median(pool):\n    '''Statistical median to demonstrate doctest.\n    >>> median([2, 9, 9, 7, 9, 2, 4, 5, 8])\n    7\n    '''\n    copy = sorted(pool)\n    size = len(copy)\n\n    if size % 2 == 1:\n        return copy[(size - 1) / 2]\n    else:\n        return (copy[size/2 - 1] + copy[size/2]) / 2\n\nif __name__ == '__main__':\n    import doctest\n    doctest.testmod()",tsx:"\n/**\n * Copyright Zendesk, Inc.\n *\n * Use of this source code is governed under the Apache License, Version 2.0\n * found at http://www.apache.org/licenses/LICENSE-2.0.\n */\n\nimport React, { useState, useEffect, useRef } from 'react';\nimport styled from 'styled-components';\nimport { Dropdown, Multiselect, Field, Menu, Item, Label } from '@zendeskgarden/react-dropdowns';\nimport { mediaQuery } from '@zendeskgarden/react-theming';\nimport { Row, Col } from '@zendeskgarden/react-grid';\nimport { Tag } from '@zendeskgarden/react-tags';\nimport debounce from 'lodash.debounce';\n\nconst options = [\n  'Asparagus',\n  'Brussel sprouts',\n  'Cauliflower',\n  'Garlic',\n  'Jerusalem artichoke',\n  'Kale',\n  'Lettuce',\n  'Onion',\n  'Mushroom',\n  'Potato',\n  'Radish',\n  'Spinach',\n  'Tomato',\n  'Yam',\n  'Zucchini'\n];\n\nconst StyledCol = styled(Col)`\n  ${p => mediaQuery('down', 'xs', p.theme)} {\n    margin-top: ${p => p.theme.space.sm};\n  }\n`;\n\nconst initialSelectedItems = [options[0], options[1], options[2], options[3]];\n\nconst Example = () => {\n  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);\n  const [compactSelectedItems, setCompactSelectedItems] = useState(initialSelectedItems);\n  const [inputValue, setInputValue] = useState('');\n  const [compactInputValue, setCompactInputValue] = useState('');\n  const [isLoading, setIsLoading] = useState(false);\n  const [matchingOptions, setMatchingOptions] = useState(options);\n\n  const filterMatchingOptionsRef = useRef(\n    debounce((value: string) => {\n      const matchedOptions = options.filter(option => {\n        return option.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1;\n      });\n\n      setMatchingOptions(matchedOptions);\n      setIsLoading(false);\n    }, 300)\n  );\n\n  useEffect(() => {\n    setIsLoading(true);\n    filterMatchingOptionsRef.current(inputValue);\n  }, [inputValue]);\n\n  useEffect(() => {\n    setIsLoading(true);\n    filterMatchingOptionsRef.current(compactInputValue);\n  }, [compactInputValue]);\n\n  const renderOptions = () => {\n    if (isLoading) {\n      return <Item disabled>Loading</Item>;\n    }\n\n    if (matchingOptions.length === 0) {\n      return <Item disabled>No matches found</Item>;\n    }\n\n    return matchingOptions.map(option => (\n      <Item key={option} value={option}>\n        <span>{option}</span>\n      </Item>\n    ));\n  };\n\n  return (\n    <Row>\n      <Col>\n        <Dropdown\n          inputValue={inputValue}\n          selectedItems={selectedItems}\n          onSelect={items => setSelectedItems(items)}\n          downshiftProps={{ defaultHighlightedIndex: 0 }}\n          onStateChange={changes => {\n            if (Object.prototype.hasOwnProperty.call(changes, 'inputValue')) {\n              setInputValue((changes as any).inputValue);\n            }\n          }}\n        >\n          <Field>\n            <Label>Vegetables</Label>\n            <Multiselect\n              renderItem={({ value, removeValue }: any) => (\n                <Tag>\n                  <span>{value}</span>\n                  <Tag.Close onClick={() => removeValue()} />\n                </Tag>\n              )}\n            />\n          </Field>\n          <Menu>{renderOptions()}</Menu>\n        </Dropdown>\n      </Col>\n      <StyledCol>\n        <Dropdown\n          inputValue={compactInputValue}\n          selectedItems={compactSelectedItems}\n          onSelect={items => setCompactSelectedItems(items)}\n          downshiftProps={{ defaultHighlightedIndex: 0 }}\n          onStateChange={changes => {\n            if (Object.prototype.hasOwnProperty.call(changes, 'inputValue')) {\n              setCompactInputValue((changes as any).inputValue);\n            }\n          }}\n        >\n          <Field>\n            <Label>Vegetables</Label>\n            <Multiselect\n              isCompact\n              renderItem={({ value, removeValue }: any) => (\n                <Tag>\n                  <span>{value}</span>\n                  <Tag.Close onClick={() => removeValue()} />\n                </Tag>\n              )}\n            />\n          </Field>\n          <Menu isCompact>{renderOptions()}</Menu>\n        </Dropdown>\n      </StyledCol>\n    </Row>\n  );\n};\n\nexport default Example;\n",typescript:"\nimport { clean, publish } from 'gh-pages';\nimport commander, { Command } from 'commander';\nimport { repository as getRepository, token as getToken } from '..';\nimport { handleErrorMessage, handleSuccessMessage } from '../../utils';\nimport { Ora } from 'ora';\nimport execa from 'execa';\n\ninterface IGitHubPagesArgs {\n  dir: string;\n  path?: string;\n  message?: string;\n  token?: string;\n  spinner?: Ora;\n}\n\n/**\n * Execute the `github-pages` command.\n *\n * @param {string} args.dir Folder to publish.\n * @param {string} [args.path] Path to a git directory.\n * @param {string} [args.message] Commit message.\n * @param {string} [args.token] GitHub personal access token.\n * @param {Ora} [args.spinner] Terminal spinner.\n *\n * @returns {Promise<string>} The GitHub pages URL.\n */\nexport const execute = async (args: IGitHubPagesArgs): Promise<string | undefined> => {\n  let retVal: string | undefined;\n\n  try {\n    const token = args.token || (await getToken(args.spinner));\n    const repository = await getRepository(args.path || args.dir, args.spinner);\n    const message = args.message || 'Updates [skip ci]';\n\n    if (token && repository) {\n      const { owner, repo } = repository;\n      let name: string;\n      let email: string;\n\n      try {\n        name = (await execa('git', ['config', 'user.name'])).stdout.toString();\n        email = (await execa('git', ['config', 'user.email'])).stdout.toString();\n      } catch {\n        name = 'Zendesk Garden';\n        email = 'garden@zendesk.com';\n      }\n\n      clean();\n      await publish(\n        args.dir,\n        {\n          repo: `https://${token}@github.com/${owner}/${repo}.git`,\n          user: {\n            name,\n            email\n          },\n          message,\n          silent: true\n        },\n        error => {\n          if (error) {\n            handleErrorMessage(error, 'github-pages', args.spinner);\n          } else {\n            retVal = `https://${owner}.github.io/${repo}/`;\n          }\n        }\n      );\n    } else {\n      throw new Error('Invalid git repository');\n    }\n  } catch (error) {\n    handleErrorMessage(error, 'github-pages', args.spinner);\n\n    throw error;\n  }\n\n  return retVal;\n};"};__webpack_exports__.default={title:"Components/Typography/CodeBlock",component:_src__WEBPACK_IMPORTED_MODULE_21__.a,parameters:{layout:"padded"}};var Default=function Default(_ref){var language=_ref.language,size=_ref.size,isLight=_ref.isLight,isNumbered=_ref.isNumbered,highlightLines=_ref.highlightLines;return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_grid_src__WEBPACK_IMPORTED_MODULE_22__.a,null,react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_grid_src__WEBPACK_IMPORTED_MODULE_23__.a,null,react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_grid_src__WEBPACK_IMPORTED_MODULE_24__.a,{textAlign:"center"},react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_21__.a,{style:{textAlign:"left"},language:language,size:size,isLight:isLight,isNumbered:isNumbered,highlightLines:highlightLines},CODE[language]))))};Default.args={highlightLines:function range(size){var start=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return _toConsumableArray(Array(size).keys()).map((function(x){return x+start}))}(15,17)},Default.argTypes={language:{control:{type:"select",options:["tsx","bash","css","javascript","json","markdown","markup","python","typescript"]}}},Default.parameters=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({storySource:{source:"({\n  language,\n  size,\n  isLight,\n  isNumbered,\n  highlightLines\n}) => (\n  <Grid>\n    <Row>\n      <Col textAlign=\"center\">\n        <CodeBlock\n          style={{ textAlign: 'left' }}\n          language={language}\n          size={size}\n          isLight={isLight}\n          isNumbered={isNumbered}\n          highlightLines={highlightLines}\n        >\n          {CODE[language]}\n        </CodeBlock>\n      </Col>\n    </Row>\n  </Grid>\n)"}},Default.parameters)},1643:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledCodeBlockContainer}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_theming_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_theming_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_theming_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),StyledCodeBlockContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.e.div.attrs({"data-garden-id":"typography.codeblock_container","data-garden-version":"storybook"}).withConfig({displayName:"StyledCodeBlockContainer",componentId:"sc-14zgbfw-0"})(["overflow:auto;&:focus{outline:none;}&[data-garden-focus-visible]{box-shadow:",";}",";"],(function(props){return props.theme.shadows.md(Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)("primaryHue",600,props.theme,.35))}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)("typography.codeblock_container",props)}));StyledCodeBlockContainer.defaultProps={theme:_theming_src__WEBPACK_IMPORTED_MODULE_3__.a}},1644:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledCodeBlockLine}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_theming_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_theming_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_theming_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_StyledFont__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(110),StyledCodeBlockLine=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.e)(_StyledFont__WEBPACK_IMPORTED_MODULE_4__.a).attrs({"data-garden-id":"typography.codeblock_code","data-garden-version":"storybook",as:"code",isMonospace:!0}).withConfig({displayName:"StyledCodeBlockLine",componentId:"sc-1goay17-0"})(["display:table-row;height:",";direction:ltr;",";",";&::after{display:inline-block;width:","px;content:'';}",";"],(function(props){return props.theme.lineHeights[props.size]}),(function(props){return props.isHighlighted&&function highlightStyles(props){var hue=props.isLight?props.theme.palette.black:props.theme.palette.white,backgroundColor=Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)(hue,600,props.theme,.1);return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.d)(["background-color:",";"],backgroundColor)}(props)}),(function(props){return props.isNumbered&&function lineNumberStyles(props){var padding="".concat(6*props.theme.space.base,"px"),color=Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)("neutralHue",props.isLight?600:500,props.theme);return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.d)(["&::before{display:table-cell;padding-right:",";width:1px;text-align:right;color:",";content:counter(linenumber);counter-increment:linenumber;}"],padding,color)}(props)}),(function(props){return 3*props.theme.space.base}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)("typography.codeblock_code",props)}));StyledCodeBlockLine.defaultProps={size:"md",theme:_theming_src__WEBPACK_IMPORTED_MODULE_3__.a}},1645:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledCodeBlockToken}));__webpack_require__(42);var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_theming_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_theming_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_StyledCodeBlock__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(713),StyledCodeBlockToken=styled_components__WEBPACK_IMPORTED_MODULE_1__.e.span.attrs({"data-garden-id":"typography.codeblock_token","data-garden-version":"storybook"}).withConfig({displayName:"StyledCodeBlockToken",componentId:"sc-1hkshdq-0"})(["display:inline-block;&.bold{font-weight:",";}&.italic{font-style:italic;}",";",";"],(function(props){return props.theme.fontWeights.semibold}),(function(props){return function colorStyles(props){var palette=props.theme.palette,colors={boolean:props.isLight?palette.royal[600]:palette.azure[400],builtin:palette.teal[400],comment:props.isLight?palette.lime[600]:palette.mint[400],constant:props.isLight?palette.azure[400]:palette.blue[500],function:props.isLight?palette.orange.M600:palette.yellow[300],keyword:palette.fuschia.M400,name:props.isLight?palette.crimson[400]:palette.blue[300],number:props.isLight?palette.green[600]:palette.green[300],punctuation:props.isLight?palette.red[800]:palette.grey[600],regex:palette.red[400],value:props.isLight?palette.red[700]:palette.crimson.M400};return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(["&.builtin,&.class-name,&.tag:not(.punctuation):not(.attr-name):not(.attr-value):not(.script){color:",";}&.doctype,&.prolog,&.tag.punctuation:not(.attr-value):not(.script):not(.spread){color:",";}&.attribute.value,&.attr-value,&.atrule,&.cdata,&.string,&.url.content{color:",";}&.constant,&.interpolation-punctuation{color:",";}&.attr-name,&.attr-value.spread,&.environment,&.interpolation,&.parameter,&.property,&.property-access,&.variable{color:",";}&.parameter.punctuation,&.attr-name + .attr-value.punctuation{color:inherit;}&.regex{color:",";}&.boolean,&.bold,&.entity,&.important,&.tag:not(.punctuation):not(.attr-name):not(.attr-value):not(.script):not(.class-name){color:",";}&.number,&.unit{color:",";}&.assign-left,&.function,&.selector:not(.attribute){color:",";}&.atrule.rule,&.keyword{color:",";}&.blockquote,&.comment,&.shebang{color:",";}",".language-css &.plain{color:",";}"],colors.builtin,colors.punctuation,colors.value,colors.constant,colors.name,colors.regex,colors.boolean,colors.number,colors.function,colors.keyword,colors.comment,_StyledCodeBlock__WEBPACK_IMPORTED_MODULE_4__.a,colors.value)}(props)}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)("typography.codeblock_token",props)}));StyledCodeBlockToken.defaultProps={theme:_theming_src__WEBPACK_IMPORTED_MODULE_3__.a}},50:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Grid}));__webpack_require__(9),__webpack_require__(13),__webpack_require__(7),__webpack_require__(11);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_utils_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(46),_utils_useGridContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(52),_styled__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(53);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Grid=react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef((function(_ref,ref){var columns=_ref.columns,debug=_ref.debug,props=_objectWithoutProperties(_ref,["columns","debug"]),value=Object(react__WEBPACK_IMPORTED_MODULE_4__.useMemo)((function(){return{columns:columns,gutters:props.gutters,debug:debug}}),[columns,props.gutters,debug]);return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_utils_useGridContext__WEBPACK_IMPORTED_MODULE_7__.a.Provider,{value:value},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__.a,_extends({debug:debug,ref:ref},props)))}));Grid.displayName="Grid",Grid.propTypes={columns:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),gutters:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(_utils_types__WEBPACK_IMPORTED_MODULE_6__.d),debug:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool},Grid.defaultProps={columns:12,gutters:"md"};try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:{value:"12"},description:"Defines the number of individual columns that the grid contains",name:"columns",required:!1,type:{name:"string | number"}},gutters:{defaultValue:{value:"md"},description:"Specifies the grid column gutter width. The value `false` collapses the gutters",name:"gutters",required:!1,type:{name:'false | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxs"'}},debug:{defaultValue:null,description:"Highlights the columns for layout debugging",name:"debug",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/elements/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"packages/grid/src/elements/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}},53:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledGrid}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(44),_theming_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_theming_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),_theming_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),StyledGrid=styled_components__WEBPACK_IMPORTED_MODULE_0__.e.div.attrs({"data-garden-id":"grid.grid","data-garden-version":"storybook"}).withConfig({displayName:"StyledGrid",componentId:"oxgg5i-0"})(["direction:",";margin-right:auto;margin-left:auto;width:100%;box-sizing:border-box;",";",";",";"],(function(props){return props.theme.rtl&&"rtl"}),(function(props){return function sizeStyles(props){var padding=props.gutters?Object(polished__WEBPACK_IMPORTED_MODULE_1__.a)("".concat(props.theme.space[props.gutters]," / 2")):0;return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.d)(["padding-right:",";padding-left:",";"],padding,padding)}(props)}),(function(props){return props.debug&&function colorStyles(props){var borderColor=Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)(props.theme.palette.crimson,400,props.theme,.5),borderWidth=Object(polished__WEBPACK_IMPORTED_MODULE_1__.a)("".concat(props.theme.borderWidths.sm," * 2"));return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.d)(["box-shadow:-"," 0 0 0 ",","," 0 0 0 ",";"],borderWidth,borderColor,borderWidth,borderColor)}(props)}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_3__.a)("grid.grid",props)}));StyledGrid.defaultProps={gutters:"md",theme:_theming_src__WEBPACK_IMPORTED_MODULE_4__.a}},69:function(module,__webpack_exports__,__webpack_require__){"use strict";function isRtl(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},theme=_ref.theme;return Boolean(theme&&theme.rtl)}__webpack_require__.d(__webpack_exports__,"a",(function(){return isRtl}))},713:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledCodeBlock}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_theming_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_theming_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_theming_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),StyledCodeBlock=styled_components__WEBPACK_IMPORTED_MODULE_0__.e.pre.attrs({"data-garden-id":"typography.codeblock","data-garden-version":"storybook"}).withConfig({displayName:"StyledCodeBlock",componentId:"sc-5wky57-0"})(["display:table;margin:0;padding:","px;box-sizing:border-box;width:100%;direction:ltr;white-space:pre;counter-reset:linenumber;",";",";"],(function(props){return 3*props.theme.space.base}),(function(props){return function colorStyles(props){var backgroundColor=Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)("neutralHue",props.isLight?100:1e3,props.theme),foregroundColor=props.isLight?props.theme.colors.foreground:Object(_theming_src__WEBPACK_IMPORTED_MODULE_1__.a)("neutralHue",300,props.theme);return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.d)(["background-color:",";color:",";"],backgroundColor,foregroundColor)}(props)}),(function(props){return Object(_theming_src__WEBPACK_IMPORTED_MODULE_2__.a)("typography.codeblock",props)}));StyledCodeBlock.defaultProps={theme:_theming_src__WEBPACK_IMPORTED_MODULE_3__.a}}},[[1513,102,0,1]]]);