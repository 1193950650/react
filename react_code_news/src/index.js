import React from 'react'
import ReactDom from 'react-dom'

// ReactDom.render(
//     <h1>hello Ract</h1>,
//     document.getElementById('root')
// )

//解密 rander 函数能渲染长得像html一样的JS
//首先 我们的h1 标签 是要被转译的，这是一个语法糖

let ele = <h1>hello</h1>
console.log(ele)
let ele2 = React.createElement('div',{className:'div',style:{color:'red',fontSize:'20px'}},['hello'])
console.log(ele2)
let ele3 = {
    type:'div',
    props:{
        children:[{
            type:'div',
            props:{
                children:['hello'],
                className: 'div',
                style:{
                    color:'red'
                }
            }
        },{
            type:'div',
            props:{
                children:['hello'],
                className: 'div',
                style:{
                    color:'red'
                }
            }
        }],
        className: 'div',
        style:{
            color:'red'
        }
    }
}
function render(ele3,container){
    let {type,props} = ele3
    let eledom = document.createElement(type)
    for(let maps in props){
        if(maps == 'children'){
            props[maps].forEach(function (items) {
                if(typeof items == 'string'){
                    let StringNode = document.createTextNode(items)
                    eledom.appendChild(StringNode)
                }else{
                    render(items,eledom)
                }
            })
        }else{
            if(maps == 'className'){
                eledom.setAttribute('class',props[maps])
            }else{
                eledom.setAttribute(maps,props[maps])
            }
        }
    }
    container.appendChild(eledom)
}
render(ele2,document.getElementById('root'))
