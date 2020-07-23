pubSub.subscribe("事件名",function(name,context){})
pubSub.publish("事件名",function (data) {
   pubSub.subscribe("事件名",function(name,context){})
}))
