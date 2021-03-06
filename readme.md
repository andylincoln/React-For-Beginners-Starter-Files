![](http://wes.io/dgAQ/content)

# React For Beginners — [ReactForBeginners.com](https://ReactForBeginners.com)

Starter files for the React For Beginners course. Come <a href="https://ReactForBeginners.com/">Learn React</a> with me!

The code in this repo meant to be a reference point for anyone following along with the video course.

## To Start

1. cd into `catch-of-the-day` and follow along with the videos

The `stepped-solutions` Each folder contains the files for the beginning of each video should you need them. So, if you need any code, pull the appropriate file into your `catch-of-the-day` folder.

You are welcome to submit Pull Requests but I'd like to keep the code as similar as possible to the course content.

### Code Use

You are welcome to use this code in your own applications. If you would like to use it for training purposes, please shoot me a message first to make sure it's okay.


# Frequently Asked Questions

#### :question: Where are folders `2`, `3`, and `5`?
Not all the videos have significant enough code changes to warrant an entire folder. Although you should be coding them all yourself, the code is available in the next video's folder.

#### :question: Firebase updated — does it still work with this tutorial?

Yep! 100%. The only change is that Firebase DBs aren't open by default anymore. To change this, click on the **rules** tab and set your security settings to the set below. We go over securing it in the last video. 

```js
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

#### :question: I tried installing the Babel syntax highlighter but it didn't work!

There are a few possible options:

* If you are on Sublime Text 2, you should Upgrade to Sublime Text 3.
* Some users have reported restarting works
* You can try the [JavaScript Next](https://packagecontrol.io/packages/JavaScriptNext%20-%20ES6%20Syntax) syntax highlighter instead

#### :question: I can't set Babel as the default syntax highlighter!

Make sure you are in a file with the extension of `.js` before you do this step - you can't set the default for a file without having a file open!

#### :question: I can't see the React tab in my dev tools

Restart your dev tools or your chrome browser entirely. They will only show up when you are viewing a React app - so make sure you test it on Facebook or another website that is running React. It won't work on your empty `main.js` file until you `import React from 'react'`.

#### :question: What Sublime Text Packages are you using? What Terminal Theme?

* I've written indepth over at [WesBos.com/uses](http://wesbos.com/uses)
* Theme + Colour Scheme → [Cobalt 2](https://packagecontrol.io/packages/Theme%20-%20Cobalt2)
* JS Syntax Highlighting → [Babel](https://packagecontrol.io/packages/Babel)
* HTML + CSS Shortcuts → [Emmet](https://packagecontrol.io/packages/Emmet) — You can [get emmet working with JSX here](http://wesbos.com/emmet-react-jsx-sublime/)
