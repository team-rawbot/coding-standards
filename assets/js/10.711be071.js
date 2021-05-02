(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(t,e,s){"use strict";s.r(e);var a=s(45),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),s("ul",[s("li",[t._v("We prefer "),s("a",{attrs:{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tailwind"),s("OutboundLink")],1),t._v(" over other frameworks.")]),t._v(" "),s("li",[t._v("We postprocess our stylesheets with "),s("a",{attrs:{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostCSS"),s("OutboundLink")],1),t._v(", for example to ensure "),s("a",{attrs:{href:"/browsers-support"}},[t._v("browsers support")]),t._v(" or "),s("a",{attrs:{href:"https://cssnano.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("optimize the output"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("If really necessary, we preprocess our stylesheets with "),s("a",{attrs:{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sass"),s("OutboundLink")],1),t._v(" using the SCSS syntax.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTICE")]),t._v(" "),s("p",[t._v("The following applies only when you create your own declarations, not if you stick to Tailwind’s utility classes.")])]),t._v(" "),s("h2",{attrs:{id:"code-styling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-styling"}},[t._v("#")]),t._v(" Code Styling")]),t._v(" "),s("h3",{attrs:{id:"rules-of-thumb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules-of-thumb"}},[t._v("#")]),t._v(" Rules of thumb")]),t._v(" "),s("ul",[s("li",[t._v("Apply the principles of "),s("a",{attrs:{href:"https://github.com/stubbornella/oocss/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object-oriented CSS"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("Name classes according to the "),s("a",{attrs:{href:"https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BEM syntax"),s("OutboundLink")],1),t._v(" or in "),s("code",[t._v("kebab-case")]),t._v(" when not applicable.")]),t._v(" "),s("li",[t._v("Keep the precedence as low as possible:\n"),s("ul",[s("li",[t._v("Prefer classes over element/attribute for selectors, never use IDs.")]),t._v(" "),s("li",[t._v("Don’t nest rule sets without explicit reason and never more than 3 levels; prefer more specific names.")])])]),t._v(" "),s("li",[t._v("Take advantage of the cascade to avoid repeating declarations.")]),t._v(" "),s("li",[t._v("Avoid using Sass’ "),s("code",[t._v("@extend")]),t._v(" and only extend "),s("a",{attrs:{href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_foo",target:"_blank",rel:"noopener noreferrer"}},[t._v("placeholder selectors"),s("OutboundLink")],1),t._v(" if you really want to.")]),t._v(" "),s("li",[t._v("Use helper classes as long as the pattern doesn’t repeat.")]),t._v(" "),s("li",[t._v("Split each component into a dedicated file (see "),s("a",{attrs:{href:"#files-organization"}},[t._v("Files Organization")]),t._v(" below).")])]),t._v(" "),s("h3",{attrs:{id:"declarations-groups-order"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#declarations-groups-order"}},[t._v("#")]),t._v(" Declarations groups & order")]),t._v(" "),s("p",[t._v("We separate declarations of the same type in groups, here’s an example:")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".class ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The box")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Positioning")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Typeface")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helvetica'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sans-serif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.2rem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Styling")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("cursor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// All other properties")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointer-events")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[t._v("#")]),t._v(" Tools")]),t._v(" "),s("p",[t._v("You can install "),s("a",{attrs:{href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stylelint"),s("OutboundLink")],1),t._v(" to validate stylesheets code style. We have our own "),s("a",{attrs:{href:"https://github.com/team-rawbot/stylelint-config-rawbot",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stylelint configuration"),s("OutboundLink")],1),t._v(" package with predefined rules to validate code styling compliance.")]),t._v(" "),s("p",[t._v("Check the list of "),s("a",{attrs:{href:"https://stylelint.io/user-guide/complementary-tools/#editor-plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("editor plugins"),s("OutboundLink")],1),t._v(" for instant validation right in your favorite editor.")]),t._v(" "),s("h2",{attrs:{id:"files-organization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#files-organization"}},[t._v("#")]),t._v(" Files organization")]),t._v(" "),s("p",[t._v("We organize our partials into separates folders:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Folder")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Children")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("settings")]),t._v(" "),s("td",[t._v("Variables & common settings")]),t._v(" "),s("td",[t._v("Usually one "),s("code",[t._v("_settings")]),t._v(" file")])]),t._v(" "),s("tr",[s("td",[t._v("tools")]),t._v(" "),s("td",[t._v("Sass functions and mixins")]),t._v(" "),s("td",[t._v("Usually one "),s("code",[t._v("_mixins")]),t._v(" and one "),s("code",[t._v("_functions")]),t._v(" file")])]),t._v(" "),s("tr",[s("td",[t._v("vendor")]),t._v(" "),s("td",[t._v("Third-parties code, prefer Node modules when available")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("defaults")]),t._v(" "),s("td",[t._v("All the defaults & global elements (html, body, h1, p, blockquote, …)")]),t._v(" "),s("td",[t._v("We often see "),s("code",[t._v("_layout")]),t._v(", "),s("code",[t._v("_typography")]),t._v(", "),s("code",[t._v("_forms")]),t._v(", or "),s("code",[t._v("_fonts")]),t._v(" here")])]),t._v(" "),s("tr",[s("td",[t._v("components")]),t._v(" "),s("td",[t._v("Standalone group of classes forming a single reusable component ("),s("code",[t._v(".user-card")]),t._v(", "),s("code",[t._v(".dashboard-panel")]),t._v(", "),s("code",[t._v(".site-header")]),t._v(", …)")]),t._v(" "),s("td",[t._v("One file per component, named as the component main class")])]),t._v(" "),s("tr",[s("td",[t._v("pages")]),t._v(" "),s("td",[t._v("Very specific code dedicated to one page")]),t._v(" "),s("td",[t._v("One file per page")])]),t._v(" "),s("tr",[s("td",[t._v("helpers")]),t._v(" "),s("td",[t._v("Various specific classes reusable anywhere ("),s("code",[t._v(".text-brand")]),t._v(", "),s("code",[t._v(".img-circle")]),t._v(", …)")]),t._v(" "),s("td",[t._v("Group similar classes per files ("),s("code",[t._v("_text")]),t._v(", "),s("code",[t._v("_images")]),t._v(", …)")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);