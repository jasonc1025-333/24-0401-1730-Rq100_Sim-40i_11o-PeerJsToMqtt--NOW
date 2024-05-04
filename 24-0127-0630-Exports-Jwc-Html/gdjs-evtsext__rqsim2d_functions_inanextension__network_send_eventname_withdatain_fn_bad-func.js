
if (typeof gdjs.evtsExt__RqSim2D_Functions_InAnExtension__network_Send_EventName_WithDataIn_Fn_BAD !== "undefined") {
  gdjs.evtsExt__RqSim2D_Functions_InAnExtension__network_Send_EventName_WithDataIn_Fn_BAD.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RqSim2D_Functions_InAnExtension__network_Send_EventName_WithDataIn_Fn_BAD = {};


gdjs.evtsExt__RqSim2D_Functions_InAnExtension__network_Send_EventName_WithDataIn_Fn_BAD.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.p2p.sendVariableToAll((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("eventName_Str_In") : ""), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__RqSim2D_Functions_InAnExtension__network_Send_EventName_WithDataIn_Fn_BAD.func = function(runtimeScene, eventName_Str_In, globalStructure_ToJson_Str_In, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "eventName_Str_In") return eventName_Str_In;
if (argName === "globalStructure_ToJson_Str_In") return globalStructure_ToJson_Str_In;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__RqSim2D_Functions_InAnExtension__network_Send_EventName_WithDataIn_Fn_BAD.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__RqSim2D_Functions_InAnExtension__network_Send_EventName_WithDataIn_Fn_BAD.registeredGdjsCallbacks = [];