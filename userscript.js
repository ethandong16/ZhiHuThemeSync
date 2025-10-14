// ==UserScript==
// @name         ZhihuThemeSync
// @namespace    http://tampermonkey.net/
// @version      2025-10-13
// @description  Keeps Zhihu’s theme in sync with your OS theme.
// @author       Ethan Dong
// @match        https://*.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=256&domain=https://www.zhihu.com/
// @grant        none
// @run-at       document-start
// @license MIT
// @downloadURL https://update.greasyfork.org/scripts/552535/ZhihuThemeSync.user.js
// @updateURL https://update.greasyfork.org/scripts/552535/ZhihuThemeSync.meta.js
// ==/UserScript==

(function() {

    const themeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    function updateThemeStatus(e){
        console.log("Triggered")
        let url = new URL(window.location.href);
        let params = url.searchParams;
        let sysTheme = "";
        let CurrentPageTheme = "";

        if (params.has("theme")){
            CurrentPageTheme = params.get("theme")
        }else{
            sysTheme = null
        }

        if (e.matches){
            sysTheme = "dark"
            params.set("theme","dark")

        }else{
            sysTheme = "light"
            params.set("theme","light")

        }

        if (CurrentPageTheme = null || sysTheme != CurrentPageTheme){
            window.location.href = url.toString();
            console.log("reloaded")
        }

    }
    updateThemeStatus(themeMedia);
    themeMedia.addEventListener('change', updateThemeStatus);


}
)();