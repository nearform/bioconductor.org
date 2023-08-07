# Styling

The styling for bioconductor.org is built to be reused in other places. It comprises of several different aspects

* [Base styling](#base-styling)
    * [Fonts](#fonts)
    * [Colors](#colors)
    * [Typography](#typography)
    * [Layout](#layout)

* [Component styling](#component-styling)
    * [Block Quotes](#block-quotes)
    * [Breadcrumbs](#breadcrumbs)
    * [Buttons](#buttons)
    * [Code Blocks](#code-blocks)
      * [Default Usage](#default-usage)
      * [Light Theme](#light-theme-variation)
      * [Code Highlighting](#code-highlighting)
    * [Gallery](#gallery)
* [Lists](#lists)

* [Section styling](#section-styling)
    * [Announcement](#announcement)
    * [Footer](#footer)
    * [Header](#header)
    * [Hero](#hero)
    * [Sidebar](#sidebar)

* [Page styling](#page-styling)
    * [About](#about)
    * [Get Started](#get-started)
    * [Home](#home)
    * [Learn and Developers](#learn-and-developers)


## Base styling

The base styles comprise of [fonts](#fonts), [colors](#colors) and [typography](#typography) and can be easily reused across different websites. In addition there is the [layout](#layout) styling which helps to set the structure of the page. All other styling options rely on these being in place.

All of the base styling can be found in [assets/style/base/](/assets/style/base/)

### Fonts

These set the default font for the entire site. The default font is [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible). The font file is hosted locally on the website due to some [GDPR concerns relating to Google Fonts](https://www.cookieyes.com/documentation/features/google-fonts-and-gdpr/#How_do_Goo_0).

In order to use the fonts simply include the font CSS sheet in your web page.

```html
<link rel="stylesheet" href="/style/fonts.css" />
```

You will also need to include the font files. These can be found in [assets/style/fonts/](/assets/style/fonts/). 


### Colors

The colors used across the site are defined in the colors CSS file. These are as defined in the style guide. Other components used throughout the css will rely on these colors being in place and won't work without them.

In order to use the colours include the colour CSS sheet in your web page.

```html
<link rel="stylesheet" href="/style/base/colors.css" />
```


### Typography

There are multiple differences throughout the styles for Bioconductor from the default typography in browsers. These affect elements such as headings (H1, H2, H3, H4, H5, H6), paragraphs, links, and provide some utility classes.

In order to use these include the typography CSS sheet in your web page.

```html
<link rel="stylesheet" href="/styles/base/typography.css" />
```

### Layout

The layout of the site is set to be a fixed width on screens wider than 1400px, and scale down on screens that are smaller. This is set in the [layout.css](/assets/style/base/layout.css) file.

In order to apply this layout you will need to firstly include the layout CSS.

```html
<link rel="stylesheet" href="/styles/base/layout.css />
```

To apply the layout constraints there is a utility class called `container`. Applying this class is done as in the following example.

```html
<div class="container">
    ...content
</div>
```

## Component styling

Components are styled up in their own stylesheets, and examples of them can be seen on the [examples](/content/examples) pages. In order to use the components you will need to apply the Fonts, Colors and Typography stylesheets. The following components have been set up:

* [Block quotes](#block-quotes)
* [Breadcrumbs](#breadcrumbs)
* [Buttons](#buttons)
* [Code blocks](#code-blocks)
  * [Default Usage](#default-usage)
  * [Light Theme](#light-theme-variation)
  * [Code Highlighting](#code-highlighting)
* [Gallery](#gallery)
* [Lists](#lists)

All of the base styling can be found in [assets/style/components/](/assets/style/components/)

### Block quotes

Block quotes are a way of highlighting different pieces of text.

Prerequisites:

* [colors.css](#colors)
* [fonts.css](#fonts)
* [typography.css](#typography)

Usage:

```html
<blockquote>Some text to highlight</blockquote>
```

Example output:

![Blockquote Example](images/blockquote.png)

### Breadcrumbs

### Buttons

### Code blocks

In order to display example code you should use the `pre` and `code` blocks. Styling for code blocks are available in [code.css](/assets/style/components/code.css)

Prerequisites:

* [colors.css](#colors)

##### Default Usage

Usage:

```html
<link rel="stylesheet" href="/styles/code.css" />

<pre><code>Display some code here</code></pre>
```

Example output:

![Default Codeblock](images/code-block-default.png)

##### Light Theme Variation

Usage:

```html
<link rel="stylesheet" href="/style/code.css" />

<pre><code class="light">Display some code here</code></pre>
```

Example output:

![Light Codeblock](images/code-block-light.png)

##### Code Highlighting

In order to add the highlighting effect for the code you will need to add [highlight.js](https://highlight.js), an additional javascript file, and set the language in the class. The full list of languages supported can be found [here](https://highlightjs.readthedocs.io/en/latest/supported-languages.html).

Usage:

```html
<link rel="stylesheet" href="/style/code.css" />
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>

<pre><code class="language-r">Some code here</code></pre>
```

Exmaple output:

![Highlighted Code Block](images/code-block-highlighted.png)

### Gallery

### Lists

## Section styling

Different sections of the page may also have specific styling. These are less likely to be reused in other places. The following sections have specific styling associated with them:

* [Announcement](#announcement)
* [Footer](#footer)
* [Header](#header)
* [Hero](#hero)
* [Sidebar](#sidebar)

All of the section styling can be found in [assets/style/sections/](/assets/style/sections/)

### Announcement

### Footer

### Header

### Hero

### Sidebar

## Page styling

As part of the new styling for bioconductor.org some pages also require specific styling applied. These are not likely to be reused. The following pages have specific styles attached:

* [About](#about)
* [Get Started](#get-started)
* [Home](#home)
* [Learn and Developers](#learn-and-developers)

All the stylings for specific pages can be found in [assets/style/pages/](/assets/style/pages/)

### About

The styling for the about page is available in [assets/style/pages/about.css](/assets/style/pages/about.css)

### Get Started

The styling for the Get Started page is available in [assets/style/pages/get-started.css](/assets/style/pages/get-started.css)

### Home

The styling for the home page is available in [assets/style/pages/home.css](/assets/style/pages/home.css)

### Learn and Developers

The learn and developers pages use the same styling. This is available in [assets/style/pages/learn-and-dev.css](/assets/style/pages/learn-and-dev.css)
