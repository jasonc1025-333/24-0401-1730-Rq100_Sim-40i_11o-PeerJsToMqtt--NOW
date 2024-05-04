gdjs.obsolete_95SceneCode = {};


gdjs.obsolete_95SceneCode.eventsList0 = function(runtimeScene) {

};gdjs.obsolete_95SceneCode.eventsList1 = function(runtimeScene) {

};gdjs.obsolete_95SceneCode.eventsList2 = function(runtimeScene) {

};gdjs.obsolete_95SceneCode.eventsList3 = function(runtimeScene) {

{


const repeatCount3 = 8;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}
}

}


{


const repeatCount3 = 8;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "engine");
}}

}


};gdjs.obsolete_95SceneCode.eventsList4 = function(runtimeScene) {

{


const repeatCount2 = 8;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{runtimeScene.getScene().getVariables().get("engine_particle_angle").add(gdjs.random(20) + 40);
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("engine_particle_angle").add(gdjs.random(20) + 40);
}{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}{runtimeScene.getScene().getVariables().get("engine_particle_angle").add(gdjs.random(20) + 40);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "engine");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("engine_particle_angle").setNumber(0);
}
{ //Subevents
gdjs.obsolete_95SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("player_firerate").setNumber(0.25);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "player_shoot_timer");
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.01, "engine");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "engine");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("player_firerate")), "player_shoot_timer");
if (isConditionTrue_0) {
}

}


};

gdjs.obsolete_95SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.obsolete_95SceneCode.eventsList4(runtimeScene);

return;

}

gdjs['obsolete_95SceneCode'] = gdjs.obsolete_95SceneCode;
