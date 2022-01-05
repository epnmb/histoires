gdjs.Nouvelle_32sc_232neCode = {};
gdjs.Nouvelle_32sc_232neCode.GDfondObjects1= [];
gdjs.Nouvelle_32sc_232neCode.GDfondObjects2= [];
gdjs.Nouvelle_32sc_232neCode.GDfondObjects3= [];
gdjs.Nouvelle_32sc_232neCode.GDfondObjects4= [];
gdjs.Nouvelle_32sc_232neCode.GDrocher1Objects1= [];
gdjs.Nouvelle_32sc_232neCode.GDrocher1Objects2= [];
gdjs.Nouvelle_32sc_232neCode.GDrocher1Objects3= [];
gdjs.Nouvelle_32sc_232neCode.GDrocher1Objects4= [];
gdjs.Nouvelle_32sc_232neCode.GDrocher2Objects1= [];
gdjs.Nouvelle_32sc_232neCode.GDrocher2Objects2= [];
gdjs.Nouvelle_32sc_232neCode.GDrocher2Objects3= [];
gdjs.Nouvelle_32sc_232neCode.GDrocher2Objects4= [];
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects1= [];
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2= [];
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects3= [];
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects4= [];
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects1= [];
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2= [];
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects3= [];
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects4= [];
gdjs.Nouvelle_32sc_232neCode.GDcursorObjects1= [];
gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2= [];
gdjs.Nouvelle_32sc_232neCode.GDcursorObjects3= [];
gdjs.Nouvelle_32sc_232neCode.GDcursorObjects4= [];
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects1= [];
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects2= [];
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects3= [];
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects4= [];

gdjs.Nouvelle_32sc_232neCode.conditionTrue_0 = {val:false};
gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0 = {val:false};
gdjs.Nouvelle_32sc_232neCode.condition1IsTrue_0 = {val:false};
gdjs.Nouvelle_32sc_232neCode.condition2IsTrue_0 = {val:false};


gdjs.Nouvelle_32sc_232neCode.eventsList0x912e860 = function(runtimeScene, context) {

{


{
gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2.createFrom(runtimeScene.getObjects("cursor"));
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects2.createFrom(runtimeScene.getObjects("debug"));
gdjs.Nouvelle_32sc_232neCode.GDfondObjects2.createFrom(runtimeScene.getObjects("fond"));
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2.createFrom(runtimeScene.getObjects("oiseaux"));
gdjs.Nouvelle_32sc_232neCode.GDrocher1Objects2.createFrom(runtimeScene.getObjects("rocher1"));
gdjs.Nouvelle_32sc_232neCode.GDrocher2Objects2.createFrom(runtimeScene.getObjects("rocher2"));
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2.createFrom(runtimeScene.getObjects("tigre"));
{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDfondObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDfondObjects2[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDrocher1Objects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDrocher1Objects2[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDrocher2Objects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDrocher2Objects2[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2[i].setZOrder(9999);
}
}{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2[i].setAnimation(0);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setString("none");
}{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDdebugObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDdebugObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


{


gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = false;
{
gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "none";
}if (gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jungle.ogg", true, 25, 1);
}}

}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x912e860
gdjs.Nouvelle_32sc_232neCode.eventsList0x9087208 = function(runtimeScene, context) {

{


gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = false;
{
gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Nouvelle_32sc_232neCode.eventsList0x912e860(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x9087208
gdjs.Nouvelle_32sc_232neCode.eventsList0x912e380 = function(runtimeScene, context) {

{


gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = false;
{
gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "tigre";
}if (gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val) {
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2.createFrom(runtimeScene.getObjects("tigre"));
{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2[i].setPosition((gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2[i].getPointX(""))-10,(gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2[i].getPointY(""))+50);
}
}}

}


{


gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = false;
{
gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "oiseaux";
}if (gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val) {
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2.createFrom(runtimeScene.getObjects("oiseaux"));
{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2[i].setPosition((gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2[i].getPointX(""))-50,(gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2[i].getPointY("")));
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(2).setString("none");
}}

}


{


{
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects2.createFrom(runtimeScene.getObjects("debug"));
{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDdebugObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDdebugObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


{


{
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "timer");
}}

}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x912e380
gdjs.Nouvelle_32sc_232neCode.eventsList0x912ec80 = function(runtimeScene, context) {

{


gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = false;
{
gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "timer");
}if (gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Nouvelle_32sc_232neCode.eventsList0x912e380(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x912ec80
gdjs.Nouvelle_32sc_232neCode.eventsList0x90874e0 = function(runtimeScene, context) {

{


gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = false;
{
gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) != "none";
}if (gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Nouvelle_32sc_232neCode.eventsList0x912ec80(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x90874e0
gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.Nouvelle_32sc_232neCode.GDcursorObjects1});gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDtigreObjects1ObjectsGDgdjs_46Nouvelle_9532sc_95232neCode_46GDoiseauxObjects1Objects = Hashtable.newFrom({"tigre": gdjs.Nouvelle_32sc_232neCode.GDtigreObjects1, "oiseaux": gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects1});gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDcursorObjects2Objects = Hashtable.newFrom({"cursor": gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2});gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDtigreObjects2Objects = Hashtable.newFrom({"tigre": gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2});gdjs.Nouvelle_32sc_232neCode.eventsList0x912e3e0 = function(runtimeScene, context) {

{


{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{


{
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "tigre.ogg", 0, false, 100, 1);
}}

}


{


{
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects3.createFrom(gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2);

{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDtigreObjects3.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDtigreObjects3[i].setPosition((gdjs.Nouvelle_32sc_232neCode.GDtigreObjects3[i].getPointX(""))+10,(gdjs.Nouvelle_32sc_232neCode.GDtigreObjects3[i].getPointY(""))-50);
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(2).setString("tigre");
}}

}


{


{
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects2.createFrom(runtimeScene.getObjects("debug"));
{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDdebugObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDdebugObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x912e3e0
gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.Nouvelle_32sc_232neCode.GDcursorObjects1});gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDoiseauxObjects1Objects = Hashtable.newFrom({"oiseaux": gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects1});gdjs.Nouvelle_32sc_232neCode.eventsList0x912e4a0 = function(runtimeScene, context) {

{


{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{


{
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "oiseaux.ogg", 0, false, 100, 1);
}}

}


{


{
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2.createFrom(gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects1);

{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2[i].setPosition((gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2[i].getPointX(""))+50,(gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2[i].getPointY("")));
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(2).setString("oiseaux");
}}

}


{


{
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects1.createFrom(runtimeScene.getObjects("debug"));
{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDdebugObjects1.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDdebugObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x912e4a0
gdjs.Nouvelle_32sc_232neCode.eventsList0x90a65b8 = function(runtimeScene, context) {

{

gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2.createFrom(gdjs.Nouvelle_32sc_232neCode.GDcursorObjects1);

gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2.createFrom(gdjs.Nouvelle_32sc_232neCode.GDtigreObjects1);


gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = false;
{
gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDcursorObjects2Objects, gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDtigreObjects2Objects, false, runtimeScene);
}if (gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Nouvelle_32sc_232neCode.eventsList0x912e3e0(runtimeScene, context);} //End of subevents
}

}


{

/* Reuse gdjs.Nouvelle_32sc_232neCode.GDcursorObjects1 */
/* Reuse gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects1 */

gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = false;
{
gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDcursorObjects1Objects, gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDoiseauxObjects1Objects, false, runtimeScene);
}if (gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Nouvelle_32sc_232neCode.eventsList0x912e4a0(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x90a65b8
gdjs.Nouvelle_32sc_232neCode.eventsList0x912e800 = function(runtimeScene, context) {

{


gdjs.Nouvelle_32sc_232neCode.eventsList0x90a65b8(runtimeScene, context);
}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x912e800
gdjs.Nouvelle_32sc_232neCode.eventsList0x90a6b00 = function(runtimeScene, context) {

{


gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = false;
gdjs.Nouvelle_32sc_232neCode.condition1IsTrue_0.val = false;
{
gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val ) {
{
gdjs.Nouvelle_32sc_232neCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "none";
}}
if (gdjs.Nouvelle_32sc_232neCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Nouvelle_32sc_232neCode.eventsList0x912e800(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x90a6b00
gdjs.Nouvelle_32sc_232neCode.eventsList0x912eb00 = function(runtimeScene, context) {

{


{
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.Nouvelle_32sc_232neCode.eventsList0x90a6b00(runtimeScene, context);
}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x912eb00
gdjs.Nouvelle_32sc_232neCode.eventsList0x90a6960 = function(runtimeScene, context) {

{


{
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.Nouvelle_32sc_232neCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects1.createFrom(runtimeScene.getObjects("oiseaux"));
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects1.createFrom(runtimeScene.getObjects("tigre"));

gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = false;
{
gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDcursorObjects1Objects, gdjs.Nouvelle_32sc_232neCode.mapOfGDgdjs_46Nouvelle_9532sc_95232neCode_46GDtigreObjects1ObjectsGDgdjs_46Nouvelle_9532sc_95232neCode_46GDoiseauxObjects1Objects, false, runtimeScene);
}if (gdjs.Nouvelle_32sc_232neCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Nouvelle_32sc_232neCode.eventsList0x912eb00(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x90a6960
gdjs.Nouvelle_32sc_232neCode.eventsList0x90a66f0 = function(runtimeScene, context) {

{


{
gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2.createFrom(runtimeScene.getObjects("cursor"));
{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{


{
gdjs.Nouvelle_32sc_232neCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));
{for(var i = 0, len = gdjs.Nouvelle_32sc_232neCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Nouvelle_32sc_232neCode.GDcursorObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x90a66f0
gdjs.Nouvelle_32sc_232neCode.eventsList0x70e0f0 = function(runtimeScene, context) {

{


gdjs.Nouvelle_32sc_232neCode.eventsList0x9087208(runtimeScene, context);
}


{


gdjs.Nouvelle_32sc_232neCode.eventsList0x90874e0(runtimeScene, context);
}


{


gdjs.Nouvelle_32sc_232neCode.eventsList0x90a6960(runtimeScene, context);
}


{


gdjs.Nouvelle_32sc_232neCode.eventsList0x90a66f0(runtimeScene, context);
}


}; //End of gdjs.Nouvelle_32sc_232neCode.eventsList0x70e0f0


gdjs.Nouvelle_32sc_232neCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Nouvelle_32sc_232neCode.GDfondObjects1.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDfondObjects2.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDfondObjects3.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDfondObjects4.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDrocher1Objects1.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDrocher1Objects2.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDrocher1Objects3.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDrocher1Objects4.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDrocher2Objects1.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDrocher2Objects2.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDrocher2Objects3.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDrocher2Objects4.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects1.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects2.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects3.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDtigreObjects4.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects1.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects2.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects3.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDoiseauxObjects4.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDcursorObjects1.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDcursorObjects2.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDcursorObjects3.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDcursorObjects4.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects1.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects2.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects3.length = 0;
gdjs.Nouvelle_32sc_232neCode.GDdebugObjects4.length = 0;

gdjs.Nouvelle_32sc_232neCode.eventsList0x70e0f0(runtimeScene, context);return;
}
gdjs['Nouvelle_32sc_232neCode']= gdjs.Nouvelle_32sc_232neCode;
