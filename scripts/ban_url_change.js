var elemIframList = document.getElementsByTagName('iframe');
for (var i = 0; i < elemIframList.length; i++) {
    initIframeChange(elemIframList[i]);
}
function initIframeChange(elemIfram) {
    if (window.MutationObserver || window.webkitMutationObserver) {
        // chrome
        var callback = function (mutations) {
            mutations.forEach(function (mutation) {
                iframeSrcChanged(mutation.oldValue, mutation.target.src, mutation.target);
            });
        };
        if (window.MutationObserver) {
            var observer = new MutationObserver(callback);
        } else {
            var observer = new webkitMutationObserver(callback);
        }
        observer.observe(elemIfram, {
            attributes: true,
            attributeOldValue: true
        });
    } else if (elemIfram.addEventListener) {
        // Firefox, Opera and Safari
        elemIfram.addEventListener("DOMAttrModified", function (event) { iframeSrcChanged(event.prevValue, event.newValue, event.target); }, false);
    } else if (elemIfram.attachEvent) {
        // Internet Explorer
        elemIfram.attachEvent("onpropertychange", function (event) { iframeSrcChanged(event.prevValue, event.newValue, event.target); });
    }
}

function iframeSrcChanged(oldValue, newValue, iframeObj) {
    // console.log('旧地址：' + oldValue);
    // console.log('新地址：' + newValue);
    // if (newValue.indexOf('aaaa') > -1) {
    //     console.log('有危险，请马上离开……')
    //     iframeObj.src = oldValue;//钓鱼地址，恢复原url
    // } else {
    //     console.log('安全地址，允许跳转……');
    // }
    if(oldValue!=newValue)
    iframeObj.src = oldValue;
}