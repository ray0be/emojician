# 🧙‍♂️ Emojician

Not finding the web-emoji-picker that best meet my needs and trying to avoid image-based ones, I decided to design my own.

It's a **100% native emojis** picker working with Vue.js. There is no image / base64 from Twitter / Google, it just sets the *font-family* to best display the emojis in your web browser.

Looking for a demo? [See there](http://ray0.be/emojician/index.html).

## Getting Started

### Installation

Simply insert Emojician CSS styles and JS script (don't forget Vue.js) :

```html
<head>
    <meta charset="UTF-8">

    <!-- [...] -->

    <link rel="stylesheet" href="emojician.css">
</head>
<body>
    <!-- [...] -->

    <script src="vue.min.js"></script>
    <script src="emojician.js"></script>
</body>
```

### Insert the emojician

Add the emoji-picker component in your template (#root) :

```html
<div id="root">
    <emojician display="click" @picked="picked_emoji">
        <button>Open 🙂 Picker</button>
    </emojician>
</div>
```

As you can see, the \<emojician\> component takes props and events :

* props :
  * **display** : possible values are :
    * block : the emoji-picker is displayed as an always-visible block in the page ;
    * hover : the emoji-picker is displayed when the user's mouse is over the button element ;
    * click : the emoji-picker is displayed when the user clicks the button.
  * **direction** : when the *display* prop has the value "hover" or "click", you may use this second prop to set a position for the picker around the button. Possible values are "top" (default), "right", "bottom" and "left".
* events :
  * **picked** : the listener from where you get the emoji which is picked by the user. You get an object with information about the emoji (unicode number, character, description, keywords).

After the inclusion of the *emojician.js* script, load Emojician (global var component) as a component
dependency like this :

```js
var app = new Vue({
    el: '#root',
    components: {
        'emojician': Emojician
    },
    methods: {
        picked_emoji: function(emoji) {
            console.log(emoji);
        }
    }
});
```

## Summary

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">

    <!-- Emojician CSS styles -->
    <link rel="stylesheet" href="emojician.css">
</head>
<body>
    <div id="root">
        <emojician display="click" @picked="picked_emoji">
            <button>Open 🙂 Picker</button>
        </emojician>
    </div>

    <!-- Vue.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.12/vue.min.js" integrity="sha512-BKbSR+cfyxLdMAsE0naLReFSLg8/pjbgfxHh/k/kUC82Hy7r6HtR5hLhobaln2gcTvzkyyehrdREdjpsQwy2Jw==" crossorigin="anonymous"></script>

    <!-- Emojician JS script -->
    <script src="emojician.js"></script>
    <script>
    var app = new Vue({
        el: '#root',
        components: {
            'emojician': Emojician
        },
        methods: {
            picked_emoji: function(emoji) {
                console.log(emoji);
            }
        }
    });
    </script>
</body>
</html>
```

Have a look to the [demo](http://ray0.be/emojician/index.html) for more examples.

## Licence
MIT

## Credits

* [Vue.js](https://vuejs.org/) is a dependency (tested with Vue 2.6.12) [MIT]
* I use some CSS styles from [Spectre.css](https://picturepan2.github.io/spectre/index.html) v0.5.9 [MIT]
* The full list of emojis used by Emojician is based on this work : [unicode-emoji-list](https://github.com/amurani/unicode-emoji-list) [MIT]