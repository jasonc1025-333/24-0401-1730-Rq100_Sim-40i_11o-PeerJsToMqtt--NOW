gdjs.read_95Me_95ImportantCode = {};


gdjs.read_95Me_95ImportantCode.eventsList0 = function(runtimeScene) {

};gdjs.read_95Me_95ImportantCode.eventsList1 = function(runtimeScene) {

};gdjs.read_95Me_95ImportantCode.eventsList2 = function(runtimeScene) {

{



}


{



}


{



}


{



}


{


gdjs.read_95Me_95ImportantCode.eventsList0(runtimeScene);
}


{


gdjs.read_95Me_95ImportantCode.eventsList1(runtimeScene);
}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.p2p.sendVariableToAll("serverAdmin_To_ClientPlayer_CommandData_Event", runtimeScene.getScene().getVariables().get("serverAdmin_To_ClientPlayer_CommandData_Structure_InScene"));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.debuggerTools.pause(runtimeScene);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("temp_String").setString(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(42)));
}{gdjs.evtTools.p2p.sendVariableToAll("serverAdmin_To_ClientPlayer_CommandData_Event", runtimeScene.getScene().getVariables().get("temp_String"));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("serverAdmin_To_ClientPlayer_CommandData_Event", false);
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.getEventVariable("serverAdmin_To_ClientPlayer_CommandData_Event", runtimeScene.getScene().getVariables().get("networkMessage_GlobalStructure_To_SceneJsonStr_Str"));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("networkMessage_GlobalStructure_To_SceneJsonStr_Str")), runtimeScene.getGame().getVariables().getFromIndex(42));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.read_95Me_95ImportantCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.read_95Me_95ImportantCode.eventsList2(runtimeScene);

return;

}

gdjs['read_95Me_95ImportantCode'] = gdjs.read_95Me_95ImportantCode;
