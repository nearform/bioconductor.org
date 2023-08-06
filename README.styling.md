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
  * [Gallery](#gallery)
  * [Lists](#lists)

* Section styling
* Page styling

## Base styling

The base styles comprise of [fonts](#fonts), [colors](colors) and [typography](typography) and can be easily reused across different websites. In addition there is the [layout](layout) styling which helps to set the structure of the page. All other styling options rely on these being in place.

All of the base styling can be found in [assets/style/base](/assets/style/base)

### Fonts

These set the default font for the entire site. The default font is [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible). The font file is hosted locally on the website due to some [GDPR concerns relating to Google Fonts](https://www.cookieyes.com/documentation/features/google-fonts-and-gdpr/#How_do_Goo_0).

In order to use the fonts simply include the font CSS sheet in your web page.

```html
<link rel="stylesheet" href="/style/font.css" />
```

You will also need to include the font files. These can be found in [assets/style/fonts](/assets/style/fonts). 


### Colors

The colors used across the site are defined in the colors CSS file. These are as defined in the style guide. Other components used throughout the css will rely on these colors being in place and won't work without them.

In order to use the colours include the colour CSS sheet in your web page.

```html
<link rel="stylesheet" href="/style/colors.css" />
```


### Typography

There are multiple differences throughout the styles for Bioconductor from the default typography in browsers. These affect elements such as headings (H1, H2, H3, H4, H5, H6), paragraphs, links, and provide some utility classes.

In order to use these include the typography CSS sheet in your web page.

```html
<link rel="stylesheet" href="/styles/typography.css" />
```

### Layout

The layout of the site is set to be a fixed width on screens wider than 1400px, and scale down on screens that are smaller. This is set in the [bioconductor.css](/assets/style/bioconductor.css) file.

In order to apply this layout you will need to firstly include the layout CSS.

```html
<link rel="stylesheet" href="/styles/bioconductor.css" />
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
* [Gallery](#gallery)
* [Lists](#lists)

All of the base styling can be found in [assets/style/components](/assets/style/components)

### Block quotes

### Breadcrumbs

### Buttons

### Code blocks

### Gallery

### Lists


