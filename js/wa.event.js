+(function (scope) {
  'use strict';

  function Events() {
    this.eventListeners = {};
  };

  Events.prototype.on = function (eventType, handler) {
    var listeners = this.eventListeners;

    if (!listeners.hasOwnProperty(eventType)) {
      listeners[eventType] = [];
    }
    listeners[eventType].push(handler);
  };

  Events.prototype.off = function (eventType, handler) {
    var idx, listenersAry;
    
    if (eventType && handler) {
      listenersAry = this.eventListeners[eventType];
      idx = listenersAry.indexOf(handler);
      while(idx !== -1) {
        listenersAry.splice(idx, 1);
        idx = listenersAry.indexOf(handler);
      }
    } else if (eventType) {
      this.eventListeners[eventType] = [];
    } else {
      this.eventListeners = {};
    }
  };

  Events.prototype.emit = function (eventType, args, self) {
    var listeners = this.eventListeners;
    self = self || null;

    if (listeners.hasOwnProperty(eventType)) {
      for (var i = 0, len = listeners[eventType].length; i < len; ++i) {
        try {
          args instanceof Array || (args = [args]);
          listeners[eventType][i].apply(self, args);
        } catch (e) {
          if (console && console.error) {
            console.error(e);
          }
        }
      }
    }
  };

  scope.webduino && (scope.webduino.Events = Events);

})(this);
