var target = document.getElementById("welcome-video"); // 目标节点iframe
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
// 创建一个观察器实例
var observer = new MutationObserver(items => {
    items.forEach(item => {
        console.log(item)
        iframeChange(item.oldValue, item.target.src, item.target)
    })
})
// 观察器的配置
var options = {
    childList: false,// 子节点的变动（指新增，删除或者更改） Boolean
    attributes: true, // 属性的变动      Boolean
    subtree: false, //表示是否将该观察器应用于该节点的所有后代节点      Boolean
    attributeOldValue: true, // 表示观察attributes变动时，是否需要记录变动前的属性 Boolean  
    characterData: false, // 节点内容或节点文本的变动 Boolean
    attributeFilter: ["src"] // 表示需要观察的特定属性 Array，如['class','src', 'style']
}
// 开始观察目标节点
observer.observe(target, options);
function iframeChange(oldValue, newValue, iframeData) {
    //console.log("旧地址："+oldValue)
    //console.log("新地址："+newValue)
    if (newValue != oldValue) {
        target.src = oldValue;
        // or othorCode ....
    }
}