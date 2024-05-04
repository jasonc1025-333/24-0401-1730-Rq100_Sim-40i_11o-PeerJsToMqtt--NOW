gdjs.game_95Over_95SceneCode = {};
gdjs.game_95Over_95SceneCode.GDgameoverObjects1= [];
gdjs.game_95Over_95SceneCode.GDgameoverObjects2= [];
gdjs.game_95Over_95SceneCode.GDrestartObjects1= [];
gdjs.game_95Over_95SceneCode.GDrestartObjects2= [];


gdjs.game_95Over_95SceneCode.mapOfGDgdjs_9546game_959595Over_959595SceneCode_9546GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.game_95Over_95SceneCode.GDrestartObjects1});
gdjs.game_95Over_95SceneCode.mapOfGDgdjs_9546game_959595Over_959595SceneCode_9546GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.game_95Over_95SceneCode.GDrestartObjects1});
gdjs.game_95Over_95SceneCode.mapOfGDgdjs_9546game_959595Over_959595SceneCode_9546GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.game_95Over_95SceneCode.GDrestartObjects1});
gdjs.game_95Over_95SceneCode.eventsList0 = function(runtimeScene) {

{



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



}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.game_95Over_95SceneCode.GDrestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_95Over_95SceneCode.mapOfGDgdjs_9546game_959595Over_959595SceneCode_9546GDrestartObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "asteroids", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.game_95Over_95SceneCode.GDrestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_95Over_95SceneCode.mapOfGDgdjs_9546game_959595Over_959595SceneCode_9546GDrestartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18171028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.game_95Over_95SceneCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.game_95Over_95SceneCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.game_95Over_95SceneCode.GDrestartObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.game_95Over_95SceneCode.GDrestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_95Over_95SceneCode.mapOfGDgdjs_9546game_959595Over_959595SceneCode_9546GDrestartObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18172052);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.game_95Over_95SceneCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.game_95Over_95SceneCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.game_95Over_95SceneCode.GDrestartObjects1[i].setColor("255;255;255");
}
}}

}


};

gdjs.game_95Over_95SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_95Over_95SceneCode.GDgameoverObjects1.length = 0;
gdjs.game_95Over_95SceneCode.GDgameoverObjects2.length = 0;
gdjs.game_95Over_95SceneCode.GDrestartObjects1.length = 0;
gdjs.game_95Over_95SceneCode.GDrestartObjects2.length = 0;

gdjs.game_95Over_95SceneCode.eventsList0(runtimeScene);

return;

}

gdjs['game_95Over_95SceneCode'] = gdjs.game_95Over_95SceneCode;
