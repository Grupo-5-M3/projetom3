import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
	
  --default-blue: rgba(10, 178, 230,1);
	--default-blue-clear: rgba(10, 178, 230,0.8);
	--default-purple:rgba(165, 0, 226, 1);
	--default-purple-clear:rgba(165, 0, 226, 0.2);
	--default-orange:rgba(240, 145, 22, 1);
	--default-green:rgba(75, 209, 142,1);

	--negative:rgba(230,0,0,1);
	--warning:rgba(255,205,7,1);
	--sucess:rgba(22,136,33,1);
	--information:rgba(21,91,203);

	--gray-100:rgba(51,51,51,1);
	--gray-50:rgba(130,130,130,1);
	--gray-20:rgba(224,224,224,1);
	--gray-0:rgba(245,245,245,1);

	--heading1:bold 2rem 'Inter',sans-serif;
	--heading2:bold 1.7rem 'Inter',sans-serif;
	--headline: normal 1.5rem 'Inter',sans-serif;
	--body: normal 1.4 rem 'Inter',sans-serif;

}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  font-family: 'Inter', sans-serif;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;

}
body::-webkit-scrollbar {
  width: 12px;
}
body::-webkit-scrollbar-track {
  background: #f4f4f4;
}
body::-webkit-scrollbar-thumb {
  background-color: #86929B;
  border-radius: 3px;
  border: 3px solid #86929B;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
  cursor: pointer;
}
` 
