const div = dom.find('#test>.red')[0] // 获取对应的元素
console.log(div)
dom.style(div, 'color', 'red') // 设置 div.style.color
console.log(dom.style(div,'color'))//读取node样式
dom.style(div,{background:'blue'})//两个arguments方式设置背景色

const divList = dom.find('.red')
console.log(divList) // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素