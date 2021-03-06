/*
 * GDevelop JS Platform
 * Copyright 2013-2016 Florian Rival (Florian.Rival@gmail.com). All rights reserved.
 * This project is released under the MIT License.
 */

/**
 * Tools related to input ( Keyboard, mouse ), for events generated code.
 *
 * @namespace gdjs.evtTools
 * @class input
 * @static
 * @private
 */
gdjs.evtTools.input = gdjs.evtTools.input || {};

/**
 * Return true if the specified key is pressed
 *
 * @method isKeyPressed
 * @private
 */
gdjs.evtTools.input.isKeyPressed = function(runtimeScene, key) {
    if (gdjs.evtTools.input.keysNameToCode.hasOwnProperty(key)) {
        return runtimeScene.getGame().getInputManager().isKeyPressed(gdjs.evtTools.input.keysNameToCode[key]);
    }

    return false;
};

/**
 * Return true if the specified key was just released
 *
 * @method isKeyPressed
 * @private
 */
gdjs.evtTools.input.wasKeyReleased = function(runtimeScene, key) {
    if (gdjs.evtTools.input.keysNameToCode.hasOwnProperty(key)) {
        return runtimeScene.getGame().getInputManager().wasKeyReleased(gdjs.evtTools.input.keysNameToCode[key]);
    }

    return false;
};

/**
 * Return the name of the last key pressed in the game
 * @method lastPressedKey
 * @private
 */
gdjs.evtTools.input.lastPressedKey = function(runtimeScene) {
    //Ensure _keysCodeToName is constructed
    if (gdjs.evtTools.input._keysCodeToName === undefined) {
        gdjs.evtTools.input._keysCodeToName = {};
        var keysNameToCode = gdjs.evtTools.input.keysNameToCode;
        for(var p in keysNameToCode) {
            if (keysNameToCode.hasOwnProperty(p)) {
                gdjs.evtTools.input._keysCodeToName[keysNameToCode[p]] = p;
            }
        }
    }

    var keyCode = runtimeScene.getGame().getInputManager().getLastPressedKey();
    if (gdjs.evtTools.input._keysCodeToName.hasOwnProperty(keyCode)) {
        return gdjs.evtTools.input._keysCodeToName[keyCode];
    }

    return "";
};

/**
 * Hashmap associated each name of a key to its keyCode.
 * @namespace gdjs.evtTools
 * @property keysNameToCode
 * @static
 */
gdjs.evtTools.input.keysNameToCode = {
    "a": 65,
    "b": 66,
    "c": 67,
    "d": 68,
    "e": 69,
    "f": 70,
    "g": 71,
    "h": 72,
    "i": 73,
    "j": 74,
    "k": 75,
    "l": 76,
    "m": 77,
    "n": 78,
    "o": 79,
    "p": 80,
    "q": 81,
    "r": 82,
    "s": 83,
    "t": 84,
    "u": 85,
    "v": 86,
    "w": 87,
    "x": 88,
    "y": 89,
    "z": 90,
    
    "Num0": 48,
    "Num1": 49,
    "Num2": 50,
    "Num3": 51,
    "Num4": 52,
    "Num5": 53,
    "Num6": 54,
    "Num7": 55,
    "Num8": 56,
    "Num9": 57,

    "Numpad0": 96,
    "Numpad1": 97,
    "Numpad2": 98,
    "Numpad3": 99,
    "Numpad4": 100,
    "Numpad5": 101,
    "Numpad6": 102,
    "Numpad7": 103,
    "Numpad8": 104,
    "Numpad9": 105,

    "RControl": 17,
    "RShift": 16,
    "RAlt": 18,
    "LControl": 17,
    "LShift": 1,
    "LAlt": 18,
    "LSystem": 91,
    "RSystem": 91,
    /*"Menu": sf::Keyboard::Menu ,
    "LBracket": sf::Keyboard::LBracket ,
    "RBracket": sf::Keyboard::RBracket ,
    "SemiColon": sf::Keyboard::SemiColon ,
    "Comma": sf::Keyboard::Comma ,
    "Period": sf::Keyboard::Period ,
    "Quote": sf::Keyboard::Quote ,
    "Slash": sf::Keyboard::Slash ,
    "BackSlash": sf::Keyboard::BackSlash ,
    "Tilde": sf::Keyboard::Tilde ,
    "Equal": sf::Keyboard::Equal ,
    "Dash": sf::Keyboard::Dash,*/
    "Space": 32,
    "Return": 13,
    "Back": 8,
    "Tab": 9,
    "PageUp": 33,
    "PageDown": 34,
    "End": 35,
    "Home": 36,
    "Delete": 46,
    "Insert": 45,

    "Add": 107,
    "Subtract": 109,
    "Multiply": 106,
    "Divide": 111,

    "Left": 37,
    "Up": 38,
    "Right": 39,
    "Down": 40,

    "F1": 112,
    "F2": 113,
    "F3": 114,
    "F4": 115,
    "F5": 116,
    "F6": 117,
    "F7": 118,
    "F8": 119,
    "F9": 120,
    "F10": 121,
    "F11": 122,
    "F12": 123,

    "Pause": 19
};

gdjs.evtTools.input.anyKeyPressed = function(runtimeScene) {
    return runtimeScene.getGame().getInputManager().anyKeyPressed();
};

gdjs.evtTools.input.isMouseButtonPressed = function(runtimeScene, button) {
    if ( button === "Left" ) return runtimeScene.getGame().getInputManager().isMouseButtonPressed(0);
    if ( button === "Right" ) return runtimeScene.getGame().getInputManager().isMouseButtonPressed(1);
    return false;
};

gdjs.evtTools.input.isMouseButtonReleased = function(runtimeScene, button) {
    if ( button === "Left" ) return runtimeScene.getGame().getInputManager().isMouseButtonReleased(0);
    if ( button === "Right" ) return runtimeScene.getGame().getInputManager().isMouseButtonReleased(1);
    return false;
};

gdjs.evtTools.input.hideCursor = function(runtimeScene) {
    runtimeScene.getRenderer().hideCursor();
};

gdjs.evtTools.input.showCursor = function(runtimeScene) {
    runtimeScene.getRenderer().showCursor();
};

gdjs.evtTools.input.getMouseWheelDelta = function(runtimeScene) {
    return runtimeScene.getGame().getInputManager().getMouseWheelDelta();
};

gdjs.evtTools.input.getMouseX = function(runtimeScene, layer, camera) {
    return runtimeScene.getLayer(layer).convertCoords(
        runtimeScene.getGame().getInputManager().getMouseX(),
        runtimeScene.getGame().getInputManager().getMouseY())[0];
};

gdjs.evtTools.input.getMouseY = function(runtimeScene, layer, camera) {
    return runtimeScene.getLayer(layer).convertCoords(
        runtimeScene.getGame().getInputManager().getMouseX(),
        runtimeScene.getGame().getInputManager().getMouseY())[1];
};

gdjs.evtTools.input._cursorIsOnObject = function(obj, runtimeScene) {
    return obj.cursorOnObject(runtimeScene);
};

gdjs.evtTools.input.cursorOnObject = function(objectsLists, runtimeScene, accurate, inverted) {
    return gdjs.evtTools.object.pickObjectsIf(gdjs.evtTools.input._cursorIsOnObject,
        objectsLists, inverted, runtimeScene);
};

gdjs.evtTools.input.getTouchX = function(runtimeScene, identifier, layer, camera) {
    return runtimeScene.getLayer(layer).convertCoords(
        runtimeScene.getGame().getInputManager().getTouchX(identifier),
        runtimeScene.getGame().getInputManager().getTouchY(identifier))[0];
};

gdjs.evtTools.input.getTouchY = function(runtimeScene, identifier, layer, camera) {
    return runtimeScene.getLayer(layer).convertCoords(
        runtimeScene.getGame().getInputManager().getTouchX(identifier),
        runtimeScene.getGame().getInputManager().getTouchY(identifier))[1];
};

gdjs.evtTools.input.getLastTouchId = function() {
    return gdjs.evtTools.input.lastTouchId || 0;
};

gdjs.evtTools.input.getLastEndedTouchId = function() {
    return gdjs.evtTools.input.lastEndedTouchId || 0;
};

gdjs.evtTools.input.popStartedTouch = function(runtimeScene) {
    var startedTouchId = runtimeScene.getGame().getInputManager().popStartedTouch();

    if (startedTouchId !== undefined) {
        gdjs.evtTools.input.lastTouchId = startedTouchId;
        return true;
    }

    return false;
};

gdjs.evtTools.input.popEndedTouch = function(runtimeScene) {
    var endedTouchId = runtimeScene.getGame().getInputManager().popEndedTouch();

    if (endedTouchId !== undefined) {
        gdjs.evtTools.input.lastEndedTouchId = endedTouchId;
        return true;
    }

    return false;
};

gdjs.evtTools.input.touchSimulateMouse = function(runtimeScene, enable) {
    runtimeScene.getGame().getInputManager().touchSimulateMouse(enable);
};
