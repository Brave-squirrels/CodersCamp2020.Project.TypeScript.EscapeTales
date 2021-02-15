// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/boardField.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoardField = void 0;

var BoardField = function () {
  function BoardField(_status, _fieldID, _paragraphID, _content) {
    this._status = _status;
    this._fieldID = _fieldID;
    this._paragraphID = _paragraphID;
    this._content = _content;
  }

  Object.defineProperty(BoardField.prototype, "status", {
    get: function get() {
      return this._status;
    },
    set: function set(status) {
      this._status = status;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BoardField.prototype, "fieldID", {
    get: function get() {
      return this._fieldID;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BoardField.prototype, "paragraphID", {
    get: function get() {
      return this._paragraphID;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BoardField.prototype, "content", {
    get: function get() {
      return this._content;
    },
    enumerable: false,
    configurable: true
  });
  return BoardField;
}();

exports.BoardField = BoardField;
},{}],"src/paragraph.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Paragraph = function () {
  function Paragraph(id, location, storyLine, _text, _content) {
    this.id = id;
    this.location = location;
    this.storyLine = storyLine;
    this._text = _text;
    this._content = _content;
  }

  Object.defineProperty(Paragraph.prototype, "text", {
    get: function get() {
      return this._text;
    },
    set: function set(value) {
      this._text = value;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Paragraph.prototype, "content", {
    get: function get() {
      return this._content;
    },
    enumerable: false,
    configurable: true
  });
  return Paragraph;
}();

exports.default = Paragraph;
},{}],"src/ENUM.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoardContent = exports.ActionPointsEnum = exports.PuzzleReward = exports.BoardState = exports.LOCATION = void 0;
var ActionPointsEnum;

(function (ActionPointsEnum) {
  ActionPointsEnum[ActionPointsEnum["MOVE"] = -1] = "MOVE";
  ActionPointsEnum[ActionPointsEnum["STRESSCARD"] = 4] = "STRESSCARD";
  ActionPointsEnum[ActionPointsEnum["CLUE"] = 3] = "CLUE";
})(ActionPointsEnum || (ActionPointsEnum = {}));

exports.ActionPointsEnum = ActionPointsEnum;
var PuzzleReward;

(function (PuzzleReward) {
  PuzzleReward[PuzzleReward["EVIDENCE"] = 0] = "EVIDENCE";
  PuzzleReward[PuzzleReward["PROGRESSPOINT"] = 1] = "PROGRESSPOINT";
})(PuzzleReward || (PuzzleReward = {}));

exports.PuzzleReward = PuzzleReward;
var BoardContent;

(function (BoardContent) {
  BoardContent[BoardContent["PUZZLE"] = 0] = "PUZZLE";
  BoardContent[BoardContent["CLUE"] = 1] = "CLUE";
  BoardContent[BoardContent["NOTHING"] = 2] = "NOTHING";
})(BoardContent || (BoardContent = {}));

exports.BoardContent = BoardContent;
var BoardState;

(function (BoardState) {
  BoardState[BoardState["PENDING"] = 0] = "PENDING";
  BoardState[BoardState["EXPLORED"] = 1] = "EXPLORED";
})(BoardState || (BoardState = {}));

exports.BoardState = BoardState;
var LOCATION;

(function (LOCATION) {
  LOCATION[LOCATION["FIRST"] = 1] = "FIRST";
  LOCATION[LOCATION["SECOND"] = 2] = "SECOND";
  LOCATION[LOCATION["THIRD"] = 3] = "THIRD";
})(LOCATION || (LOCATION = {}));

exports.LOCATION = LOCATION;
},{}],"src/puzzle.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Puzzle = void 0;

var Puzzle = function () {
  function Puzzle(id, _paragraph, _puzzleCards, _visitedCards, reward, solution, content) {
    this.id = id;
    this._paragraph = _paragraph;
    this._puzzleCards = _puzzleCards;
    this._visitedCards = _visitedCards;
    this.reward = reward;
    this.solution = solution;
    this.content = content;
  }

  Object.defineProperty(Puzzle.prototype, "paragraph", {
    get: function get() {
      return this._paragraph;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Puzzle.prototype, "puzzleCards", {
    get: function get() {
      return this._puzzleCards;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Puzzle.prototype, "visitedCards", {
    get: function get() {
      return this._visitedCards;
    },
    enumerable: false,
    configurable: true
  });

  Puzzle.prototype.addVisitedCard = function (elem) {
    this._visitedCards.push(elem);
  };

  return Puzzle;
}();

exports.Puzzle = Puzzle;
},{}],"src/puzzleCard.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PuzzleCard = function () {
  function PuzzleCard(id, puzzleId, content) {
    this.id = id;
    this.puzzleId = puzzleId;
    this.content = content;
  }

  return PuzzleCard;
}();

exports.default = PuzzleCard;
},{}],"src/evidence.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Evidence = void 0;

var Evidence = function () {
  function Evidence(_ID, _content) {
    this._ID = _ID;
    this._content = _content;
  }

  Object.defineProperty(Evidence.prototype, "content", {
    get: function get() {
      return this._content;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Evidence.prototype, "evidenceID", {
    get: function get() {
      return this._ID;
    },
    enumerable: false,
    configurable: true
  });
  return Evidence;
}();

exports.Evidence = Evidence;
},{}],"src/data.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evidencesArray = exports.stressParagraphs = exports.puzzleArrayMain = exports.puzzleCardArray = exports.paragraphsArray = exports.boardAreas = void 0;

var boardField_1 = require("./boardField");

var paragraph_1 = __importDefault(require("./paragraph"));

var ENUM_1 = require("./ENUM");

var puzzle_1 = require("./puzzle");

var puzzleCard_1 = __importDefault(require("./puzzleCard"));

var evidence_1 = require("./evidence");

exports.boardAreas = [new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b11', 'l1b11', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b12', 'l1b12', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b13', 'l1b13', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b14', 'l1b14', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b15', 'l1b15', ENUM_1.BoardContent.CLUE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b21', 'l1b21', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b22', 'l1b22', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b23', 'l1b23', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b24', 'l1b24', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b25', 'l1b25', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b31', 'l1b31', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b32', 'l1b32', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b33', 'l1b33', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b34', 'l1b34', ENUM_1.BoardContent.CLUE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b35', 'l1b35', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b41', 'l1b41', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b42', 'l1b42', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b43', 'l1b43', ENUM_1.BoardContent.CLUE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b44', 'l1b44', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l1b45', 'l1b45', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b11', 'l2b11', ENUM_1.BoardContent.CLUE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b12', 'l2b12', ENUM_1.BoardContent.CLUE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b13', 'l2b13', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b14', 'l2b14', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b15', 'l2b15', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b21', 'l2b21', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b22', 'l2b22', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b23', 'l2b23', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b24', 'l2b24', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b25', 'l2b25', ENUM_1.BoardContent.CLUE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b31', 'l2b31', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b32', 'l2b32', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b33', 'l2b33', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b34', 'l2b34', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b35', 'l2b35', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b41', 'l2b41', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b42', 'l2b42', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b43', 'l2b43', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b44', 'l2b44', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l2b45', 'l2b45', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b11', 'l3b11', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b12', 'l3b12', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b13', 'l3b13', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b14', 'l3b14', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b15', 'l3b15', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b21', 'l3b21', ENUM_1.BoardContent.CLUE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b22', 'l3b22', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b23', 'l3b23', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b24', 'l3b24', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b25', 'l3b25', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b31', 'l3b31', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b32', 'l3b32', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b33', 'l3b33', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b34', 'l3b34', ENUM_1.BoardContent.CLUE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b35', 'l3b35', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b41', 'l3b41', ENUM_1.BoardContent.PUZZLE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b42', 'l3b42', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b43', 'l3b43', ENUM_1.BoardContent.NOTHING), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b44', 'l3b44', ENUM_1.BoardContent.CLUE), new boardField_1.BoardField(ENUM_1.BoardState.PENDING, 'l3b45', 'l3b45', ENUM_1.BoardContent.PUZZLE)];
exports.paragraphsArray = [new paragraph_1.default('l1b11', ENUM_1.LOCATION.FIRST, 1, 'While entering the shed you noticed strange combination of numbers on one of the notes...', 'New puzzle card'), new paragraph_1.default('l1b12', ENUM_1.LOCATION.FIRST, 1, 'You were slowly approaching the workbench, while you spotted a strange note, if you just can decode it', 'New puzzle card'), new paragraph_1.default('l1b13', ENUM_1.LOCATION.FIRST, 1, "Near the house you noticed a strange hatch, you are trying to open it, but it's locked", 'New puzzle card'), new paragraph_1.default('l1b14', ENUM_1.LOCATION.FIRST, 1, 'You notices that there is smoke coming out of the chimney, but the rooftop is too high', 'Nothing'), new paragraph_1.default('l1b15', ENUM_1.LOCATION.FIRST, 1, 'You came to look through the window and you spotted the murderer, now you know that he is in house. You have to be careful', 'Clue'), new paragraph_1.default('l1b21', ENUM_1.LOCATION.FIRST, 1, "Just an old tree, but you see an old shed, maybe it's worth to approach?", 'Nothing'), new paragraph_1.default('l1b22', ENUM_1.LOCATION.FIRST, 1, "There's nothing in here, but this old workbench seems interesting", 'Nothing'), new paragraph_1.default('l1b23', ENUM_1.LOCATION.FIRST, 1, 'Doors are locked with some sort of code, if you just know the letter order...', 'New puzzle card'), new paragraph_1.default('l1b24', ENUM_1.LOCATION.FIRST, 1, 'This house is really old and damaged, looks like abandoned', 'Nothing'), new paragraph_1.default('l1b25', ENUM_1.LOCATION.FIRST, 1, 'You found a strange mound near the tree', 'New puzzle card'), new paragraph_1.default('l1b31', ENUM_1.LOCATION.FIRST, 1, "Old forest, seems interesting but you haven't found there anything that may help you", 'Nothing'), new paragraph_1.default('l1b32', ENUM_1.LOCATION.FIRST, 1, "Nothing in here, but this old fountain is still working, strange, maybe you should check it", 'Nothing'), new paragraph_1.default('l1b33', ENUM_1.LOCATION.FIRST, 1, 'Nothing in here, just a pile of grass and an old tree', 'Nothing'), new paragraph_1.default('l1b34', ENUM_1.LOCATION.FIRST, 1, "You stopped for a while and looked at the house, it looks very messy, like no one has ever took care of that", 'Clue'), new paragraph_1.default('l1b35', ENUM_1.LOCATION.FIRST, 1, 'Nothing there, but this near by tree looks interesting', 'Nothing'), new paragraph_1.default('l1b41', ENUM_1.LOCATION.FIRST, 1, "Old forest, seems interesting but you haven't found there anything that may help you", 'Nothing'), new paragraph_1.default('l1b42', ENUM_1.LOCATION.FIRST, 1, "It's strange that there is fountain, but you can't see where the pipes are, there has to be something underground", 'New puzzle card'), new paragraph_1.default('l1b43', ENUM_1.LOCATION.FIRST, 1, "Road looks like no one has visited this house since many years, it's middle of nowhere, it has to be there", 'Clue'), new paragraph_1.default('l1b44', ENUM_1.LOCATION.FIRST, 1, 'You came from there', 'Nothing'), new paragraph_1.default('l1b45', ENUM_1.LOCATION.FIRST, 1, 'You came from there', 'Nothing'), new paragraph_1.default('l2b11', ENUM_1.LOCATION.SECOND, 1, 'The flowers look well-groomed, someone has to take care of it', 'Clue'), new paragraph_1.default('l2b12', ENUM_1.LOCATION.SECOND, 1, 'Family photos, this person is not that lonely after all', 'Clue'), new paragraph_1.default('l2b13', ENUM_1.LOCATION.SECOND, 1, "There's nothing in here", 'Nothing'), new paragraph_1.default('l2b14', ENUM_1.LOCATION.SECOND, 1, 'In the bathroom you notice traces of some sort of animal, I wonder what animal it is...', 'New puzzle card'), new paragraph_1.default('l2b15', ENUM_1.LOCATION.SECOND, 1, 'Among the pots you notice some shiny thing, looks like some sort of key', 'New puzzle card'), new paragraph_1.default('l2b21', ENUM_1.LOCATION.SECOND, 1, 'Nothing in here, but this carpet looks strange in some places', 'Nothing'), new paragraph_1.default('l2b22', ENUM_1.LOCATION.SECOND, 1, "Under the carpet you discovered a passage to the murderers' lair, if only you had the key to open it...", 'New puzzle card'), new paragraph_1.default('l2b23', ENUM_1.LOCATION.SECOND, 1, 'Nothing in here, but this carpet looks strange in some places', 'Nothing'), new paragraph_1.default('l2b24', ENUM_1.LOCATION.SECOND, 1, 'It smells weird in this bathroom, like an animal or something', 'Nothing'), new paragraph_1.default('l2b25', ENUM_1.LOCATION.SECOND, 1, "Strange, there's not running water in the tub...", 'Clue'), new paragraph_1.default('l2b31', ENUM_1.LOCATION.SECOND, 1, 'From there you can see how messy this mansion is', 'Nothing'), new paragraph_1.default('l2b32', ENUM_1.LOCATION.SECOND, 1, "It looks like under the couch carpet looks different, maybe it's worth to approach", 'Nothing'), new paragraph_1.default('l2b33', ENUM_1.LOCATION.SECOND, 1, 'Nothing in here, but this carpet looks strange in some places', 'Nothing'), new paragraph_1.default('l2b34', ENUM_1.LOCATION.SECOND, 1, 'Flowers looks healthy, but this kitchen looks kinda strange', 'Nothing'), new paragraph_1.default('l2b35', ENUM_1.LOCATION.SECOND, 1, 'Among of all the papers on the table you found an electricity bill', 'New puzzle card'), new paragraph_1.default('l2b41', ENUM_1.LOCATION.SECOND, 1, 'On the shelf you found a lot of photos, but what does they mean', 'New puzzle card'), new paragraph_1.default('l2b42', ENUM_1.LOCATION.SECOND, 1, "It's strange, in some places the lights are not working, maybe you should check it", 'Nothing'), new paragraph_1.default('l2b43', ENUM_1.LOCATION.SECOND, 1, 'There is nothing in here, maybe you should go somewhere else', 'Nothing'), new paragraph_1.default('l2b44', ENUM_1.LOCATION.SECOND, 1, 'The lights in here are perfectly fine, but what about the kitchen', 'Nothing'), new paragraph_1.default('l2b45', ENUM_1.LOCATION.SECOND, 1, 'Strange, it look like, nothing that require electricity is working in this kitchen', 'New puzzle card'), new paragraph_1.default('l3b11', ENUM_1.LOCATION.THIRD, 1, 'Strange bookshelf, some of the books clearly are missing', 'New puzzle card'), new paragraph_1.default('l3b12', ENUM_1.LOCATION.THIRD, 1, 'There is nothing in here, you should go somewhere else', 'Nothing'), new paragraph_1.default('l3b13', ENUM_1.LOCATION.THIRD, 1, 'Fireplace is fresh, someone has to be here', 'New puzzle card'), new paragraph_1.default('l3b14', ENUM_1.LOCATION.THIRD, 1, "It's really warm in here, maybe you should check the fireplace", 'Nothing'), new paragraph_1.default('l3b15', ENUM_1.LOCATION.THIRD, 1, "Everything candles instead of bulbs, strange...", 'Nothing'), new paragraph_1.default('l3b21', ENUM_1.LOCATION.THIRD, 1, 'This place looks really comfy, this must be the place', 'Clue'), new paragraph_1.default('l3b22', ENUM_1.LOCATION.THIRD, 1, 'This place is really big, you should look around', 'Nothing'), new paragraph_1.default('l3b23', ENUM_1.LOCATION.THIRD, 1, 'Nothing in here, but this couch looks really strange', 'Nothing'), new paragraph_1.default('l3b24', ENUM_1.LOCATION.THIRD, 1, 'You are approaching the couch, there is strange note, looks like some sort of puzzle...', 'New puzzle card'), new paragraph_1.default('l3b25', ENUM_1.LOCATION.THIRD, 1, 'Nothing in here, but this couch looks really strange', 'Nothing'), new paragraph_1.default('l3b31', ENUM_1.LOCATION.THIRD, 1, 'Nothing in here, you should check somewhere else', 'Nothing'), new paragraph_1.default('l3b32', ENUM_1.LOCATION.THIRD, 1, 'You came from there', 'Nothing'), new paragraph_1.default('l3b33', ENUM_1.LOCATION.THIRD, 1, 'Candles are fresh, someone has to light them recently', 'Nothing'), new paragraph_1.default('l3b34', ENUM_1.LOCATION.THIRD, 1, "It's strange that someone build another room in the basement...", 'Clue'), new paragraph_1.default('l3b35', ENUM_1.LOCATION.THIRD, 1, 'Strange couch, after moving it a bit you discovered a lock, when you have to type a certain combination', 'New puzzle card'), new paragraph_1.default('l3b41', ENUM_1.LOCATION.THIRD, 1, 'Lying book, maybe it has something in common with bookshelf...', 'New puzzle card'), new paragraph_1.default('l3b42', ENUM_1.LOCATION.THIRD, 1, 'You came from there', 'Nothing'), new paragraph_1.default('l3b43', ENUM_1.LOCATION.THIRD, 1, 'Nothing in here, maybe you should the the room next to you', 'Nothing'), new paragraph_1.default('l3b44', ENUM_1.LOCATION.THIRD, 1, 'Wheelchair, you are getting closer', 'Clue'), new paragraph_1.default('l3b45', ENUM_1.LOCATION.THIRD, 1, 'This wheelchair looks very disturbing', 'Nothing'), new paragraph_1.default('l1b11solve', ENUM_1.LOCATION.FIRST, 1, 'Finally you were able to crack this code', 'Progress Token'), new paragraph_1.default('l1b13solve', ENUM_1.LOCATION.FIRST, 1, 'You were manage to put pieces together, and you discovered that the house has a secret basement, maybe this is the place where you should go', 'Progress Token'), new paragraph_1.default('l1b12solve', ENUM_1.LOCATION.FIRST, 1, 'You noticed that the strange note was actually a map, that has marked where the bodies are buried', 'A map'), new paragraph_1.default('l2b15solve', ENUM_1.LOCATION.SECOND, 1, 'Finally you were manage to open the secret passage to the basement', 'Progress Token'), new paragraph_1.default('l2b35solve', ENUM_1.LOCATION.SECOND, 1, 'It seems like, something in this house requires a lot of power, maybe some hideout', 'Progress Token'), new paragraph_1.default('l2b14solve', ENUM_1.LOCATION.SECOND, 1, 'It seems like the person that lives in this house own a cat, only high functional sociopath can own one of these creatures', 'A cat photography'), new paragraph_1.default('l3b11solve', ENUM_1.LOCATION.THIRD, 1, 'You discovered that the shelf has missing book, you were manage to put in here missing book, and heard that something clicked...', 'Progress Token'), new paragraph_1.default('l3b24solve', ENUM_1.LOCATION.THIRD, 1, 'Finally you were manage to solve this strange puzzle, after typing the correct password, you heard that something clicked...', 'Progress Token'), new paragraph_1.default('l3b13solve', ENUM_1.LOCATION.THIRD, 1, 'You noticed that next to the fireplace some documents were manage to survive so you picked up them', 'Documents')];
exports.puzzleCardArray = [new puzzleCard_1.default('l1b11', 'l1b11', '3 5 2 1 4'), new puzzleCard_1.default('l1b23', 'l1b11', 'A E D M R'), new puzzleCard_1.default('l1b13', 'l1b13', 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?'), new puzzleCard_1.default('l1b42', 'l1b13', 'Rabbit Raccoon Ram Rat Rattlesnake Raven...'), new puzzleCard_1.default('l1b12', 'l1b12', 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?'), new puzzleCard_1.default('l1b25', 'l1b12', 'You can see the whole world on it and then put it in your pocket'), new puzzleCard_1.default('l2b15', 'l2b15', "\n        Where child fear grows,\n        And adult brave becomes\n    "), new puzzleCard_1.default('l2b22', 'l2b15', "\n        Perhaps a wine is there,\n        and some jam may too\n    "), new puzzleCard_1.default('l2b35', 'l2b35', "\n    Capitol\n    "), new puzzleCard_1.default('l2b45', 'l2b35', "\n    Take your time,\n    In the darkness just sit,\n    Make your mind think,\n    End is near\n    "), new puzzleCard_1.default('l2b14', 'l2b14', "\n    No soult it has, nor cute it is,\n    Humans friend? Suppose... it is?\n    "), new puzzleCard_1.default('l2b41', 'l2b14', "\n    Four legs - for sure,\n    lives...\n    "), new puzzleCard_1.default('l3b11', 'l3b11', "\n        There was a green house. Inside the green house there was w white house.\n        Inside the white house there was a red house.\n        Inside the red house there were lots of babies.\n        What is it?\n    "), new puzzleCard_1.default('l3b41', 'l3b11', "\n        ...lots of black black babies\n    "), new puzzleCard_1.default('l3b24', 'l3b24', "\n        What is greater than God,\n        more evil than devil,\n        the poor have it,\n        the rich need it,\n        and if you eat it, you'll die?\n    "), new puzzleCard_1.default('l3b35', 'l3b24', "\n        Something\n    "), new puzzleCard_1.default('l3b13', 'l3b13', "\n        You can drop me from the tallest building and I'll be fine,\n        but if you drop me in water I die.\n        What am I?\n    "), new puzzleCard_1.default('l3b13', 'l3b33', "\n        You can find me in an office\n    ")];
exports.puzzleArrayMain = [new puzzle_1.Puzzle('l1b11', 'l1b11solve', ['l1b11', 'l1b23'], [], ENUM_1.PuzzleReward.PROGRESSPOINT, 'dream', 'The code'), new puzzle_1.Puzzle('l1b12', 'l1b12solve', ['l1b12', 'l1b25'], [], ENUM_1.PuzzleReward.EVIDENCE, 'map', 'The way in'), new puzzle_1.Puzzle('l1b13', 'l1b13solve', ['l1b13', 'l1b42'], [], ENUM_1.PuzzleReward.PROGRESSPOINT, 'r', 'Secret place'), new puzzle_1.Puzzle('l2b15', 'l2b15solve', ['l2b15', 'l2b22'], [], ENUM_1.PuzzleReward.PROGRESSPOINT, 'basement', 'Locke & key'), new puzzle_1.Puzzle('l2b35', 'l2b35solve', ['l2b35', 'l2b45'], [], ENUM_1.PuzzleReward.PROGRESSPOINT, 'time', 'Lack of power'), new puzzle_1.Puzzle('l2b14', 'l2b14solve', ['l2b14', 'l2b41'], [], ENUM_1.PuzzleReward.EVIDENCE, 'cat', 'An animal'), new puzzle_1.Puzzle('l3b11', 'l3b11solve', ['l3b11', 'l3b41'], [], ENUM_1.PuzzleReward.PROGRESSPOINT, 'watermelon', 'Missing page'), new puzzle_1.Puzzle('l3b24', 'l3b24solve', ['l3b24', 'l3b35'], [], ENUM_1.PuzzleReward.PROGRESSPOINT, 'nothing', 'Combination'), new puzzle_1.Puzzle('l3b13', 'l3b13solve', ['l3b13', 'l3b33'], [], ENUM_1.PuzzleReward.EVIDENCE, 'paper', 'Find me')];
exports.stressParagraphs = ['This house is really creepy, your mental health is put to the test', "You can't get rid of the thoughts that the murderer can be next to you", 'You are afraid the you will not get out of here in one piece', 'Suddenly you start to feel dizzy, you are running out of time, pull yourself together', 'Loud screaming distracts you, you should hurry up', "You can't get the feeling out of your head, that someone is always behind you, you see shadows, but there's no one there", 'You realised that you are getting tired, you start to question your ability to stay focused', 'Your heart starts to race, your vision becomes blurry, you wonder if you are capable of doing this on your own'];
exports.evidencesArray = [new evidence_1.Evidence('l1b12', 'Map'), new evidence_1.Evidence('l2b14', 'Cat photography'), new evidence_1.Evidence('l3b13', 'Documents')];
},{"./boardField":"src/boardField.ts","./paragraph":"src/paragraph.ts","./ENUM":"src/ENUM.ts","./puzzle":"src/puzzle.ts","./puzzleCard":"src/puzzleCard.ts","./evidence":"src/evidence.ts"}],"node_modules/typeit/dist/typeit.es.min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/**
  * TypeIt - The most versatile animated typing utility on the planet.
  * Author: Alex MacArthur <alex@macarthur.me> (https://macarthur.me)
  * Version: v7.0.4
  * License: GPL-2.0
  * URL: https://typeitjs.com
  */
var e = {
  strings: [],
  speed: 100,
  cursor: !0,
  cursorChar: "|",
  cursorSpeed: 1e3,
  deleteSpeed: null,
  lifeLike: !0,
  breakLines: !0,
  startDelay: 250,
  startDelete: !1,
  nextStringDelay: 750,
  loop: !1,
  loopDelay: 750,
  html: !0,
  waitUntilVisible: !1,
  beforeString: () => {},
  afterString: () => {},
  beforeStep: () => {},
  afterStep: () => {},
  afterComplete: () => {}
},
    t = e => e.map(e => (void 0 === e[1] && e.push(null), void 0 === e[2] && e.push({}), e)),
    n = (e, t) => Object.assign({}, e, t),
    r = e => Array.isArray(e),
    i = (e, t) => (e[2] = n(e[2], t) || t, e),
    o = (e, t) => r(e[0]) ? e.map(e => i(e, t)) : i(e, t),
    a = (e, t, n, i) => {
  i = i || !1, n = n || {};
  var a = !r(e),
      u = e.length;
  return (e = a ? new Array(e).fill(0) : e).map((e, r) => {
    if (a) return t;
    var c = [t, e, n];
    return i && (0 === r && (c = o(c, {
      isFirst: !0
    })), r + 1 === u && (c = o(c, {
      isLast: !0
    }))), c;
  });
};

function u(e) {
  this.insert = function (e, t) {
    i.splice(e, 0, t);
  }, this.add = function (e, u, c) {
    return e = r(e) ? e : [e, null], c = c || !1, u = u || 1, r(e[0]) || (e = a(u, e)), e = t(e).map(e => (e[2] = n(e[2], {
      id: o
    }), o++, e)), i = c ? e.concat(i) : i.concat(e), this;
  }, this.set = function (e, t) {
    i[e] = t;
  }, this.reset = function () {
    i = i.map(e => (e[2].executed = !1, e));
  }, this.getItems = function () {
    return (i = t(i)).filter(e => !e[2].executed);
  }, this.setMeta = function (e, t) {
    var r = i.findIndex(t => t[2].id === e);
    i[r][2] = n(i[r][2], t);
  };
  var i = [],
      o = 0;
  this.add(e);
}

var c = e => Array.from(e),
    s = e => {
  var t = [];
  return t.concat.apply(t, e);
},
    l = e => {
  var t = document.implementation.createHTMLDocument("");
  return t.body.innerHTML = e, t.body;
},
    f = (e, t, n) => {
  t = t || null, n = void 0 !== n && n;
  var r = c(e.childNodes).map(e => {
    return 3 === (t = e).nodeType || "BR" === t.tagName ? e : f(e);
    var t;
  });
  return r = s(r), t && (r = r.filter(e => !t.contains(e))), n ? r.reverse() : r;
},
    d = e => "BODY" === e.tagName,
    h = (e, t) => {
  t = t || null;
  var n = e instanceof HTMLElement;
  return {
    node: t,
    isTopLevelText: (!t || d(t.parentNode)) && !n,
    isHTMLElement: n,
    content: e
  };
};

function v(e) {
  var t,
      n = l(e);
  return t = f(n).map(e => e.nodeValue ? c(e.nodeValue).map(t => h(t, e)) : h(e)), s(t);
}

function p(e, t) {
  return (t = void 0 === t || t) ? v(e) : c(e).map(e => h(e));
}

var m = e => document.createElement(e),
    y = (e, t) => {
  var n = m("style");
  n.id = t || "", n.appendChild(document.createTextNode(e)), document.head.appendChild(n);
},
    g = e => (r(e) || (e = [e / 2, e / 2]), {
  before: e[0],
  after: e[1],
  total: e[0] + e[1]
}),
    b = (e, t) => Math.abs(Math.random() * (e + t - (e - t)) + (e - t));

var N = e => ["textarea", "input"].indexOf(e.tagName.toLowerCase()) > -1,
    S = (e, t) => {
  var n = t.querySelectorAll("*");
  return [t].concat(c(n).reverse()).find(t => t.cloneNode().outerHTML === e.outerHTML);
},
    T = (e, t, n, r) => {
  n = n || null;
  var i = t.isHTMLElement,
      o = i ? t.content : document.createTextNode(t.content);
  if (N(e)) e.value = "".concat(e.value).concat(t.content);else {
    if (!t.isTopLevelText && !i) {
      var a = t.node.parentNode,
          u = S(a.cloneNode(), e);
      if (((e, t) => {
        if (!e) return !1;
        var n = e.nextSibling;
        return !n || n.isEqualNode(t);
      })(u, n)) e = u;else if ((o = a.cloneNode()).innerText = t.content, !d(a.parentNode)) {
        for (var c = a.parentNode, s = c.cloneNode(), l = S(s, e); !l && !d(c);) s.innerHTML = o.outerHTML, o = s, s = c.parentNode.cloneNode(), c = c.parentNode, l = S(s, e);

        e = l || e;
      }
    }

    var h = f(e, n, !0)[r - 1],
        v = h ? h.parentNode : e;
    v.insertBefore(o, v.contains(n) ? n : null);
  }
},
    L = e => {
  var t;
  return null == e || null === (t = e.parentNode) || void 0 === t ? void 0 : t.removeChild(e);
};

var M = (e, t, n) => {
  var r,
      i = "string" == typeof e,
      o = !1,
      a = -1 * e;
  return i && (a = (r = "END" === e.toUpperCase()) ? -1 : 1, o = r ? t + a > 0 : t + a < n.length), {
    isString: i,
    numberOfSteps: a,
    canKeepMoving: o
  };
},
    x = e => {
  var t,
      n = ["font", "lineHeight", "color"],
      r = m("SPAN"),
      i = (t = e, window.getComputedStyle(t, null));

  for (var o in i) n.indexOf(o) > -1 && i[o] && (r.style[o] = i[o]);

  return r.style.cssText;
};

function w(e, t, n) {
  return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
}

function D(e) {
  return function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];

    try {
      return Promise.resolve(e.apply(this, t));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

function H() {}

function E(e, t) {
  if (!t) return e && e.then ? e.then(H) : Promise.resolve();
}

function C(e, t) {
  var n = e();
  return n && n.then ? n.then(t) : t(n);
}

function A(e, t, n) {
  if (!e.s) {
    if (n instanceof k) {
      if (!n.s) return void (n.o = A.bind(null, e, t));
      1 & t && (t = n.s), n = n.v;
    }

    if (n && n.then) return void n.then(A.bind(null, e, t), A.bind(null, e, 2));
    e.s = t, e.v = n;
    var r = e.o;
    r && r(e);
  }
}

var k = function () {
  function e() {}

  return e.prototype.then = function (t, n) {
    var r = new e(),
        i = this.s;

    if (i) {
      var o = 1 & i ? t : n;

      if (o) {
        try {
          A(r, 1, o(this.v));
        } catch (e) {
          A(r, 2, e);
        }

        return r;
      }

      return this;
    }

    return this.o = function (e) {
      try {
        var i = e.v;
        1 & e.s ? A(r, 1, t ? t(i) : i) : n ? A(r, 1, n(i)) : A(r, 2, i);
      } catch (e) {
        A(r, 2, e);
      }
    }, r;
  }, e;
}();

function O(e, t) {
  return e && e.then ? e.then(t) : t(e);
}

function _default(t, i) {
  var o = this;
  i = i || {};

  var s = (e, t, n) => (e = r(e[0]) ? e : [e], oe.add(e, t), (e => {
    var t = (e = e || {}).delay;
    t && oe.add([V, t]);
  })(n), this),
      d = e => [[F, e = "object" == typeof e ? e : {}, {
    force: !0
  }], [F, ee, {
    force: !0
  }]],
      S = () => J ? c(G.value) : f(G, ae, !0),
      P = (e, t) => {
    t = t || 1;
    var n = ee.nextStringDelay;
    oe.insert(e, [V, n.before]), oe.insert(e + t + 1, [V, n.after]);
  },
      z = D(function () {
    if (ae) {
      var e = "[data-typeit-id='".concat(ie, "'] .ti-cursor");
      y("@keyframes blink-".concat(ie, " { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } ").concat(e, " { animation: blink-").concat(ie, " ").concat(ee.cursorSpeed / 1e3, "s infinite; } ").concat(e, ".with-delay { animation-delay: 500ms; } ").concat(e, ".disabled { animation: none; }"), ie), G.appendChild(ae);
      var t = "loaded" === document.fonts.status;
      return w(t || document.fonts.ready, function (e) {
        var t = ae.getBoundingClientRect().width / 2;
        ae.style.margin = "0 -".concat(t + 2, "px 0 -").concat(t - 2, "px");
      }, t);
    }
  }),
      B = e => {
    ae && (ae.classList.toggle("disabled", e), ae.classList.toggle("with-delay", !e));
  },
      I = D(function (e, t) {
    return X.push(setTimeout(e, t)), w();
  }),
      R = D(function (e) {
    var t = Z;
    return w(t && j(Z), function (t) {
      return oe.reset(), oe.set(0, [V, e.before]), E(Q(!0));
    }, !t);
  }),
      q = D(function () {
    _.started = !0;
    var e,
        t = oe.getItems();
    return O(function (e, t) {
      try {
        var n = e();
      } catch (e) {
        return t(e);
      }

      return n && n.then ? n.then(void 0, t) : n;
    }(function () {
      return O(function (e, t, n) {
        var r,
            i,
            o = -1;
        return function a(u) {
          try {
            for (; ++o < e.length && (!n || !n());) if ((u = t(o)) && u.then) {
              if (!((c = u) instanceof k && 1 & c.s)) return void u.then(a, i || (i = A.bind(null, r = new k(), 2)));
              u = u.v;
            }

            r ? A(r, 1, u) : r = u;
          } catch (e) {
            A(r || (r = new k()), 2, e);
          }

          var c;
        }(), r;
      }(t, function (n) {
        if (_.frozen || _.destroyed) throw "";
        var r,
            i,
            a,
            u,
            c = t[n],
            s = c[2];
        return e = [c, o], s.freezeCursor && B(!0), r = ee.speed, i = ee.deleteSpeed, a = ee.lifeLike, u = (i = null !== i ? i : r / 3) / 2, W = a ? [b(r, r / 2), b(i, u)] : [r, i], C(function () {
          var t;
          if (null == s ? void 0 : s.isFirst) return E((t = ee).beforeString.apply(t, e));
        }, function () {
          var t;
          return w((t = ee).beforeStep.apply(t, e), function () {
            return w(c[0].call(o, c[1], s), function () {
              return C(function () {
                var t, n;
                if (null === (t = c[2]) || void 0 === t ? void 0 : t.isLast) return E((n = ee).afterString.apply(n, e));
              }, function () {
                var t;
                return w((t = ee).afterStep.apply(t, e), function () {
                  oe.setMeta(s.id, {
                    executed: !0
                  }), B(!1);
                });
              });
            });
          });
        });
      }, function () {
        return !1;
      }), function (t) {
        var n;
        return _.completed = !0, w((n = ee).afterComplete.apply(n, e), function () {
          if (!ee.loop) throw "";
          var e = ee.loopDelay;
          I(function () {
            return w(R(e), function () {
              q();
            });
          }, e.after);
        });
      });
    }, H), function (e) {
      return o;
    });
  }),
      V = e => new Promise(t => {
    I(() => t(), e || 0);
  }),
      j = e => {
    var t = S(),
        n = M(e, Z, t);
    return Z += n.numberOfSteps, new Promise(e => {
      I(D(function () {
        return ((e, t, n, r) => {
          if (n) {
            var i = r,
                o = t[(i = i > t.length ? t.length : i) - 1];
            (e = o ? o.parentNode : e).insertBefore(n, o || null);
          }
        })(G, S(), ae, Z), C(function () {
          if (n.isString && n.canKeepMoving) return E(j(n.numberOfSteps > 0 ? "START" : "END"));
        }, function () {
          return e();
        });
      }), W[0]);
    });
  },
      U = e => new Promise(t => {
    I(() => (T(G, e, ae, Z), t()), W[0]);
  }),
      F = D(function (e) {
    ee = n(ee, e);
  }),
      K = D(function () {
    J ? G.value = "" : S().forEach(e => {
      L(e);
    });
  }),
      Q = e => (e = !0 === e, new Promise(t => {
    I(D(function () {
      var n = !1,
          r = S();
      return r.length && (J ? G.value = G.value.slice(0, -1) : L(r[Z])), c(G.querySelectorAll("*")).forEach(e => {
        if (!e.innerHTML && "BR" !== e.tagName) {
          for (var t = e; 1 === t.parentNode.childNodes.length && t.parentNode.childNodes[0].isEqualNode(t);) t = t.parentNode;

          L(t);
        }
      }), C(function () {
        if (e && r.length - 1 > 0) return w(Q(!0), function () {
          return n = !0, t();
        });
      }, function (e) {
        return n ? e : t();
      });
    }), W[1]);
  }));

  this.break = function (e) {
    return s([U, h(m("BR"))], 1, e);
  }, this.delete = function (e, t) {
    var n = d(t);
    return s([n[0]].concat([].concat(Array(Math.abs(e) || 1)).fill().map(() => [Q, !e, $]), [n[1]]), 1, t);
  }, this.empty = function () {
    return s(K, 1, arguments);
  }, this.exec = function (e, t) {
    var n = d(t);
    return s([n[0], [e, null], n[1]], 1, t);
  }, this.move = function (e, t) {
    var n = M(e, Z, S()),
        r = d(t),
        i = n.isString ? e : Math.sign(e);
    return s([r[0]].concat([].concat(Array(Math.abs(e) || 1)).fill().map(() => [j, i, $]), [r[1]]), 1, t);
  }, this.options = function (e) {
    return s([F, e], 1, e);
  }, this.pause = function (e, t) {
    return s([V, e], 1, t);
  }, this.type = function (e, t) {
    var n = d(t),
        r = p(e, ee.html),
        i = [n[0]].concat(a(r, U, $, !0), [n[1]]);
    return s(i, 1, t);
  }, this.is = function (e) {
    return _[e];
  }, this.destroy = function (e) {
    e = void 0 === e || e, X.forEach(e => {
      clearTimeout(e);
    }), X = [], e && L(ae), _.destroyed = !0;
  }, this.freeze = function () {
    _.frozen = !0;
  }, this.unfreeze = function () {
    _.frozen = !1, q();
  }, this.reset = function () {
    for (var e in !this.is("destroyed") && this.destroy(), oe.reset(), Z = 0, _) _[e] = !1;

    return J ? G.value = "" : G.innerHTML = "", this;
  }, this.go = function () {
    return _.started ? this : (z(), ee.waitUntilVisible ? (((e, t) => {
      new IntersectionObserver((n, r) => {
        n.forEach(n => {
          n.isIntersecting && (t(), r.unobserve(e));
        });
      }, {
        threshold: 1
      }).observe(e);
    })(G, q.bind(this)), this) : (q(), this));
  }, this.getQueue = function () {
    return oe;
  }, this.getOptions = function () {
    return ee;
  }, this.getElement = function () {
    return G;
  };
  var Y,
      G = "string" == typeof (Y = t) ? document.querySelector(Y) : Y,
      J = N(G),
      W = [],
      X = [],
      Z = 0,
      $ = {
    freezeCursor: !0
  },
      _ = {
    started: !1,
    completed: !1,
    frozen: !1,
    destroyed: !1
  },
      ee = n(e, i);
  ee = n(ee, {
    html: !J && ee.html,
    nextStringDelay: g(ee.nextStringDelay),
    loopDelay: g(ee.loopDelay)
  });
  var te,
      ne,
      re,
      ie = Math.random().toString().substring(2, 9),
      oe = new u([V, ee.startDelay]);
  G.setAttribute("data-typeit-id", ie), y("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}[data-typeit-id]"), ee.strings = (re = ee.strings, te = r(re) ? re : [re], (ne = (e => e.innerHTML.replace(/<\!--.*?-->/g, "").trim())(G)) ? (G.innerHTML = "", ee.startDelete ? (v(ne).forEach(e => {
    T(G, e, ae, Z);
  }), oe.add([Q, !0]), P(1), te) : [ne.trim()].concat(te)) : te);

  var ae = (() => {
    if (J || !ee.cursor) return null;
    var e = m("span");
    return e.innerHTML = l(ee.cursorChar).innerHTML, e.className = "ti-cursor", e.style.cssText = "display:inline;".concat(x(G)), e;
  })();

  ee.strings.length && (() => {
    var e = ee.strings.filter(e => !!e);
    e.forEach((t, n) => {
      var r = p(t, ee.html);
      oe.add(a(r, U, $, !0));
      var i = oe.getItems().length;

      if (n + 1 !== e.length) {
        if (ee.breakLines) {
          var o = h(m("BR"));
          return oe.add([U, o, $]), void P(i);
        }

        oe.add(a(r, Q, $)), P(i, t.length);
      }
    });
  })();
}
},{}],"src/HTMLtemplate.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageTemplate = exports.evidenceTemplate = exports.puzzleTemplate = exports.puzzleSolveTemplate = exports.storyLineTemplate = void 0;

var pageTemplate = function pageTemplate(text, currentPage, storyBookLength) {
  if (currentPage === 0) {
    return "\n        <h1 style=\"text-align: center;\">" + text + "</h1>\n        <div class=\"board__storybook__arrows\"style=\"display: flex;\n        justify-content: flex-end;\">\n        <div class=\"board__storybook__arrowLeft\" style=\"display:none;\">\n            <i class=\"fas fa-reply\"></i>\n        </div>\n        <div class=\"board__storybook__arrowRight\">\n            <i class=\"fas fa-share\"></i>\n        </div>\n        ";
  } else if (currentPage === storyBookLength) {
    return "\n        <h3>" + text + "</h3>\n        <div class=\"board__storybook__arrows\">\n        <div class=\"board__storybook__arrowLeft\">\n            <i class=\"fas fa-reply\"></i>\n        </div>\n        <div class=\"board__storybook__arrowRight\" style=\"display:none;\">\n            <i class=\"fas fa-share\"></i>\n        </div>\n        ";
  }

  return "\n    <h3>" + text + "</h3>\n    <div class=\"board__storybook__arrows\">\n    <div class=\"board__storybook__arrowLeft\">\n        <i class=\"fas fa-reply\"></i>\n    </div>\n    <div class=\"board__storybook__arrowRight\">\n        <i class=\"fas fa-share\"></i>\n    </div>\n    ";
};

exports.pageTemplate = pageTemplate;

var puzzleTemplate = function puzzleTemplate(puzzle) {
  return "\n        <div class='interface__puzzle__container' id=" + puzzle.id + ">\n            " + puzzle.content + "\n        </div>\n    ";
};

exports.puzzleTemplate = puzzleTemplate;

var evidenceTemplate = function evidenceTemplate(evidence) {
  return "\n        <div class='interface__evidence__container'>\n            " + evidence.content + "\n        </div>\n    ";
};

exports.evidenceTemplate = evidenceTemplate;

var puzzleSolveTemplate = function puzzleSolveTemplate(puzzle, visitedCards) {
  var str = "\n    <span class=\"puzzle__close\" id=\"puzzle__close\">&#10006;</span>\n    <div class='puzzle__text'>\n        <div>" + puzzle.content + "</div>\n        <div>Hints(" + visitedCards.length + "/2): <br>";
  visitedCards.forEach(function (el) {
    str += el.content + " <br>";
  });
  str += "\n        </div>\n        <div>\n            <input type='text' id='" + puzzle.id + "input' class='puzzle__solve__input'>\n        </div>\n        <button id='" + puzzle.id + "' class='Confirm" + puzzle.id + " puzzle__solve__submit'>Confirm</button>\n        </div>\n        ";
  return str;
};

exports.puzzleSolveTemplate = puzzleSolveTemplate;

var storyLineTemplate = function storyLineTemplate(text) {
  return "\n        <div class='interface__storyLine__container'>\n            " + text + "\n        </div>\n    ";
};

exports.storyLineTemplate = storyLineTemplate;
},{}],"src/state.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameState = void 0;

var ENUM = __importStar(require("./ENUM"));

var updateDOM_1 = require("./updateDOM");

var GameState = function () {
  function GameState(_actionNumbers, _userParagraphsId, _userPuzzlesId, _puzzlesSolved, _userLocationId, _storyline, _storylineID, _userEvidencesId, _progressPoints, _visitedAreas, _storyBook, _currentPage) {
    if (_actionNumbers === void 0) {
      _actionNumbers = 6;
    }

    if (_userParagraphsId === void 0) {
      _userParagraphsId = [];
    }

    if (_userPuzzlesId === void 0) {
      _userPuzzlesId = [];
    }

    if (_puzzlesSolved === void 0) {
      _puzzlesSolved = [];
    }

    if (_userLocationId === void 0) {
      _userLocationId = ENUM.LOCATION.FIRST;
    }

    if (_storyline === void 0) {
      _storyline = [];
    }

    if (_storylineID === void 0) {
      _storylineID = 0;
    }

    if (_userEvidencesId === void 0) {
      _userEvidencesId = [];
    }

    if (_progressPoints === void 0) {
      _progressPoints = 0;
    }

    if (_visitedAreas === void 0) {
      _visitedAreas = [];
    }

    if (_storyBook === void 0) {
      _storyBook = ["Story Book"];
    }

    if (_currentPage === void 0) {
      _currentPage = 0;
    }

    this._actionNumbers = _actionNumbers;
    this._userParagraphsId = _userParagraphsId;
    this._userPuzzlesId = _userPuzzlesId;
    this._puzzlesSolved = _puzzlesSolved;
    this._userLocationId = _userLocationId;
    this._storyline = _storyline;
    this._storylineID = _storylineID;
    this._userEvidencesId = _userEvidencesId;
    this._progressPoints = _progressPoints;
    this._visitedAreas = _visitedAreas;
    this._storyBook = _storyBook;
    this._currentPage = _currentPage;
  }

  Object.defineProperty(GameState.prototype, "actionNumbers", {
    get: function get() {
      return this._actionNumbers;
    },
    set: function set(newActionNumber) {
      this._actionNumbers = newActionNumber;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "userLocationId", {
    get: function get() {
      return this._userLocationId;
    },
    set: function set(newLocationId) {
      this._userLocationId = newLocationId;
    },
    enumerable: false,
    configurable: true
  });

  GameState.prototype.addPuzzleSolved = function (id) {
    this._puzzlesSolved.push(id);
  };

  GameState.prototype.addParagraphsId = function (newParagraphsId) {
    this._userParagraphsId.push(newParagraphsId);
  };

  GameState.prototype.addPuzzlesId = function (newPuzzleId) {
    this._userPuzzlesId.push(newPuzzleId);
  };

  GameState.prototype.addEvidencesId = function (newEvidencesId) {
    this._userEvidencesId.push(newEvidencesId);
  };

  GameState.prototype.removeEvidence = function () {
    this._userEvidencesId.pop();
  };

  GameState.prototype.progressPointInc = function () {
    this._progressPoints++;
  };

  GameState.prototype.removePuzzle = function (ID) {
    var index = this._userPuzzlesId.indexOf(ID);

    this._userPuzzlesId.splice(index, 1);
  };

  GameState.prototype.updateVisitedAreas = function (ID) {
    this._visitedAreas.push(ID);
  };

  GameState.prototype.addPage = function (date, text) {
    var complete = date + "<br>" + text;

    this._storyBook.push(complete);

    this._currentPage = this._storyBook.length - 1;
  };

  GameState.prototype.addStoryBook = function (story) {
    this._storyBook = story;
  };

  GameState.prototype.nextStoryBookPage = function () {
    this._currentPage++;
    updateDOM_1.changePageStoryBook(this._currentPage);
  };

  GameState.prototype.previousStoryBookPage = function () {
    this._currentPage--;
    updateDOM_1.changePageStoryBook(this._currentPage);
  };

  GameState.prototype.currentPageChange = function (num) {
    this._currentPage = num;
  };

  GameState.prototype.addStoryLine = function (text) {
    this._storyline.push(text);
  };

  GameState.prototype.addStoryLineID = function (num) {
    this._storylineID += num;
  };

  Object.defineProperty(GameState.prototype, "userParagraphsId", {
    get: function get() {
      return this._userParagraphsId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "userPuzzlesId", {
    get: function get() {
      return this._userPuzzlesId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "visitedAreasId", {
    get: function get() {
      return this._visitedAreas;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "storyline", {
    get: function get() {
      return this._storyline;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "storylineID", {
    get: function get() {
      return this._storylineID;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "userEvidencesId", {
    get: function get() {
      return this._userEvidencesId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "visitedAreas", {
    get: function get() {
      return this._visitedAreas;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "storyBook", {
    get: function get() {
      return this._storyBook;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "currentPage", {
    get: function get() {
      return this._currentPage;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "progressPoints", {
    get: function get() {
      return this._progressPoints;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "story", {
    get: function get() {
      return this._storyBook;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GameState.prototype, "puzzlesSolved", {
    get: function get() {
      return this._puzzlesSolved;
    },
    enumerable: false,
    configurable: true
  });
  return GameState;
}();

exports.GameState = GameState;
},{"./ENUM":"src/ENUM.ts","./updateDOM":"src/updateDOM.ts"}],"src/getLS.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStateLS = exports.getPuzzleLS = void 0;

var state_1 = require("./state");

var puzzle_1 = require("./puzzle");

var getStateLS = function getStateLS() {
  var stateData = JSON.parse(localStorage.getItem('state'));
  return new state_1.GameState(stateData._actionNumbers, stateData._userParagraphsId, stateData._userPuzzlesId, stateData._puzzlesSolved, stateData._userLocationId, stateData._storyline, stateData._storylineID, stateData._userEvidencesId, stateData._progressPoints, stateData._visitedAreas, stateData._storyBook, stateData._currentPage);
};

exports.getStateLS = getStateLS;

var getPuzzleLS = function getPuzzleLS() {
  var puzzleData = JSON.parse(localStorage.getItem('puzzle'));
  var puzzleArray = [];
  puzzleData.puzzleArrayMain.forEach(function (e) {
    puzzleArray.push(new puzzle_1.Puzzle(e.id, e._paragraph, e._puzzleCards, e._visitedCards, e.reward, e.solution, e.content));
  });
  return puzzleArray;
};

exports.getPuzzleLS = getPuzzleLS;
},{"./state":"src/state.ts","./puzzle":"src/puzzle.ts"}],"src/updateDOM.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStoryLine = exports.initStoryBook = exports.changePageStoryBook = exports.solvePuzzleModal = exports.updateStoryBook = exports.updateEvidencesDOM = exports.updateAreaDOM = exports.updatePuzzleDOM = exports.updateProgressDOM = exports.updateActionDOM = void 0;

var data_1 = require("./data");

var DOMTemplate = __importStar(require("./HTMLtemplate"));

var getLS_1 = require("./getLS");

var updateActionDOM = function updateActionDOM(number) {
  var actionPoints = document.querySelector("#actionPoints");
  actionPoints.innerHTML = number.toString();
};

exports.updateActionDOM = updateActionDOM;

var updateStoryBook = function updateStoryBook() {
  var state = getLS_1.getStateLS();
  var storyBook = document.querySelector(".board__storybook");
  var text = state.storyBook[state.currentPage];
  var content = DOMTemplate.pageTemplate(text, state.currentPage, state.storyBook.length - 1);
  storyBook.innerHTML = content;
};

exports.updateStoryBook = updateStoryBook;

var changePageStoryBook = function changePageStoryBook(index) {
  var state = getLS_1.getStateLS();
  var storyBook = document.querySelector(".board__storybook");
  var previousText = state.storyBook[index];
  var previousContent = DOMTemplate.pageTemplate(previousText, state.currentPage, state.storyBook.length - 1);
  storyBook.innerHTML = previousContent;
};

exports.changePageStoryBook = changePageStoryBook;

function initStoryBook() {
  var storyBook = document.querySelector(".board__storybook");
  storyBook.innerHTML = '<h1 style="text-align: center;">Story Book</h1>';
}

exports.initStoryBook = initStoryBook;

var updateEvidencesDOM = function updateEvidencesDOM() {
  var state = getLS_1.getStateLS();
  var cnt = document.querySelector("#interface__evidences");
  cnt.innerHTML = "<h2 class=\"interface__element--title\">Evidence</h2>";
  var DOMEvidences = [];
  state.userEvidencesId.forEach(function (IdUser) {
    data_1.evidencesArray.forEach(function (evidence) {
      if (IdUser === evidence.evidenceID) {
        DOMEvidences.push(evidence);
        cnt.innerHTML += DOMTemplate.evidenceTemplate(evidence);
      }
    });
  });
};

exports.updateEvidencesDOM = updateEvidencesDOM;

var updatePuzzleDOM = function updatePuzzleDOM(state, puzzleArray) {
  var cnt = document.querySelector("#interface__puzzle");
  cnt.innerHTML = '<h2 class="interface__element--title">Puzzles</h2>';
  state.userPuzzlesId.forEach(function (statePuzzleID) {
    puzzleArray.forEach(function (puzzleObj) {
      if (statePuzzleID === puzzleObj.id) {
        cnt.innerHTML += DOMTemplate.puzzleTemplate(puzzleObj);
      }
    });
  });
};

exports.updatePuzzleDOM = updatePuzzleDOM;

var solvePuzzleModal = function solvePuzzleModal(puzzleID, puzzleArray, puzzleCardArray) {
  var currentPuzzle = puzzleArray.find(function (el) {
    return el.id === puzzleID;
  });
  var visitedCards = [];
  currentPuzzle.visitedCards.forEach(function (visitedID) {
    puzzleCardArray.forEach(function (puzzleCardObj) {
      if (visitedID === puzzleCardObj.id) {
        visitedCards.push(puzzleCardObj);
      }
    });
  });
  document.querySelector(".puzzle").innerHTML = "\n        <div class='puzzle__text'>\n            " + DOMTemplate.puzzleSolveTemplate(currentPuzzle, visitedCards) + "\n        </div>\n    ";
};

exports.solvePuzzleModal = solvePuzzleModal;

var updateProgressDOM = function updateProgressDOM() {
  var state = getLS_1.getStateLS();

  switch (state.progressPoints) {
    case 1:
      document.querySelector('#token1').style.opacity = '1';
      break;

    case 2:
      document.querySelector('#token2').style.opacity = '1';
      document.querySelector('#token1').style.opacity = '1';
      break;

    default:
      document.querySelector('#token2').style.opacity = '0.4';
      document.querySelector('#token1').style.opacity = '0.4';
  }
};

exports.updateProgressDOM = updateProgressDOM;

var updateAreaDOM = function updateAreaDOM(state) {
  state.visitedAreas.forEach(function (n) {
    document.querySelector("#" + n).classList.add("map__squareVisited");
  });
};

exports.updateAreaDOM = updateAreaDOM;

var updateStoryLine = function updateStoryLine() {
  var cnt = document.querySelector("#interface__storyLine");
  cnt.innerHTML = '<h2 class="interface__element--title">Story Line Progress</h2>';
  var state = getLS_1.getStateLS();
  state.storyline.forEach(function (text) {
    cnt.innerHTML += DOMTemplate.storyLineTemplate(text);
  });
};

exports.updateStoryLine = updateStoryLine;
},{"./data":"src/data.ts","./HTMLtemplate":"src/HTMLtemplate.ts","./getLS":"src/getLS.ts"}],"src/date.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDate = void 0;

var getDate = function getDate() {
  var date = new Date();
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
};

exports.getDate = getDate;
},{}],"src/updateLS.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePuzzleLS = exports.updateStateLS = void 0;

var updateStateLS = function updateStateLS(state) {
  localStorage.setItem('state', JSON.stringify(state));
};

exports.updateStateLS = updateStateLS;

var updatePuzzleLS = function updatePuzzleLS(puzzleArrayMain) {
  localStorage.setItem('puzzle', JSON.stringify({
    puzzleArrayMain: puzzleArrayMain
  }));
};

exports.updatePuzzleLS = updatePuzzleLS;
},{}],"src/readContent.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.puzzleAlreadySolved = exports.endingStory = exports.read = exports.readStressParagraph = exports.readNotEnughPR = exports.incorrectPuzzle = exports.notEnoughPoints = exports.areaExplored = void 0;

var typeit_1 = __importDefault(require("typeit"));

var updateDOM_1 = require("./updateDOM");

var date_1 = require("./date");

var getLS_1 = require("./getLS");

var updateLS_1 = require("./updateLS");

var read = function read(paragraph) {
  var state = getLS_1.getStateLS();
  document.querySelector(".paragraph").style.display = "block";
  document.querySelector('.paragraph__text').innerHTML = '';
  new typeit_1.default(".paragraph__text", {
    strings: paragraph.text + " <br> You gain: <br>  " + paragraph.content,
    speed: 80,
    loop: false,
    startDelete: false,
    afterStep: function afterStep(step, instance) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (document.querySelector(".paragraph").style.display === 'none') {
            instance.destroy();
          }

          return [2];
        });
      });
    }
  }).go();
  var date = date_1.getDate().toString();
  state.addPage(date, paragraph.text);
  updateLS_1.updateStateLS(state);
  updateDOM_1.updateStoryBook();
};

exports.read = read;

var puzzleAlreadySolved = function puzzleAlreadySolved() {
  setTimeout(function () {
    var _this = this;

    document.querySelector(".paragraph").style.display = "block";
    document.querySelector('.paragraph__text').innerHTML = '';
    new typeit_1.default(".paragraph__text", {
      strings: "You already solved this puzzle",
      speed: 80,
      loop: false,
      startDelete: false,
      afterStep: function afterStep(step, instance) {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            if (document.querySelector(".paragraph").style.display === 'none') {
              instance.destroy();
            }

            return [2];
          });
        });
      }
    }).go();
  }, 10000);
};

exports.puzzleAlreadySolved = puzzleAlreadySolved;

var readStressParagraph = function readStressParagraph(stressParagraphs) {
  var index = Math.floor(Math.random() * stressParagraphs.length);
  document.querySelector(".paragraph").style.display = "block";
  document.querySelector('.paragraph__text').innerHTML = '';
  new typeit_1.default(".paragraph__text", {
    strings: stressParagraphs[index] + " <br> You lost 1 evidence <br> You gain 4 action points",
    speed: 80,
    loop: false,
    afterStep: function afterStep(step, instance) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (document.querySelector(".paragraph").style.display === 'none') {
            instance.destroy();
          }

          return [2];
        });
      });
    }
  }).go();
};

exports.readStressParagraph = readStressParagraph;

var readNotEnughPR = function readNotEnughPR() {
  document.querySelector('.noPoints__modal').style.display = 'block';
  document.querySelector('.noPoints__text').innerHTML = '';
  new typeit_1.default(".noPoints__text", {
    strings: "You have not enough progress points",
    speed: 80,
    loop: false,
    afterStep: function afterStep(step, instance) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (document.querySelector('.noPoints__modal').style.display === 'none') {
            instance.destroy();
          }

          return [2];
        });
      });
    }
  }).go();
};

exports.readNotEnughPR = readNotEnughPR;

var incorrectPuzzle = function incorrectPuzzle() {
  var validInput = document.querySelector('.puzzle__solve__input');
  validInput.classList.add('incorrect__solution');
  setTimeout(function () {
    validInput.classList.remove('incorrect__solution');
  }, 500);
};

exports.incorrectPuzzle = incorrectPuzzle;

var notEnoughPoints = function notEnoughPoints() {
  document.querySelector('.noPoints__modal').style.display = 'block';
  document.querySelector('.noPoints__text').innerHTML = '';
  new typeit_1.default(".noPoints__text", {
    strings: "You have not enough action points",
    speed: 80,
    loop: false,
    afterStep: function afterStep(step, instance) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (document.querySelector('.noPoints__modal').style.display === 'none') {
            instance.destroy();
          }

          return [2];
        });
      });
    }
  }).go();
};

exports.notEnoughPoints = notEnoughPoints;

var areaExplored = function areaExplored() {
  document.querySelector('.areaExplored__modal').style.display = 'block';
  document.querySelector('.areaExplored__text').innerHTML = '';
  new typeit_1.default(".areaExplored__text", {
    strings: "Area has been already explored",
    speed: 80,
    loop: false,
    afterStep: function afterStep(step, instance) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (document.querySelector('.areaExplored__modal').style.display === 'none') {
            instance.destroy();
          }

          return [2];
        });
      });
    }
  }).go();
};

exports.areaExplored = areaExplored;

var endingStory = function endingStory(text) {
  document.querySelector('.ending__modal').style.display = 'block';
  document.querySelector('.ending__text').innerHTML = "";
  new typeit_1.default(".ending__text", {
    strings: "" + text,
    speed: 100,
    loop: false,
    afterStep: function afterStep(step, instance) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (document.querySelector(".ending__modal").style.display === 'none') {
            instance.destroy();
          }

          return [2];
        });
      });
    }
  }).go();
  document.querySelector('.ending__text').innerHTML = "\n  <button class=\"ending__close\" id=\"ending__close\">\n    End\n  </button>\n  ";
};

exports.endingStory = endingStory;
},{"typeit":"node_modules/typeit/dist/typeit.es.min.js","./updateDOM":"src/updateDOM.ts","./date":"src/date.ts","./getLS":"src/getLS.ts","./updateLS":"src/updateLS.ts"}],"src/puzzleAction.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPuzzleCard = exports.getPuzzle = exports.solvePuzzle = exports.newPuzzleCard = exports.newPuzzle = void 0;

var ENUM_1 = require("./ENUM");

var readContent_1 = require("./readContent");

var updateDOM = __importStar(require("./updateDOM"));

var getLS_1 = require("./getLS");

var updateLS = __importStar(require("./updateLS"));

var getPuzzle = function getPuzzle(ID, puzzleArray) {
  return puzzleArray.find(function (c) {
    return c.id === ID;
  });
};

exports.getPuzzle = getPuzzle;

var getPuzzleCard = function getPuzzleCard(ID, puzzleCardArray) {
  return puzzleCardArray.find(function (c) {
    return c.id === ID;
  });
};

exports.getPuzzleCard = getPuzzleCard;

var solvePuzzle = function solvePuzzle(puzzleDOM, puzzleArray, paragraphs) {
  var passwordValue = document.querySelector("#" + puzzleDOM + "input").value;
  var currentPuzzle = getPuzzle(puzzleDOM, puzzleArray);

  if (passwordValue.toLowerCase() === currentPuzzle.solution) {
    rewardPuzzle(puzzleDOM, puzzleArray);
    var puzzleParagraph_1;
    paragraphs.forEach(function (c) {
      if (c.id === puzzleDOM + "solve") {
        puzzleParagraph_1 = c;
      }
    });
    var state = getLS_1.getStateLS();
    state.addParagraphsId(puzzleParagraph_1.id);
    updateLS.updateStateLS(state);
    readContent_1.read(puzzleParagraph_1);
  } else {
    readContent_1.incorrectPuzzle();
  }
};

exports.solvePuzzle = solvePuzzle;

var rewardPuzzle = function rewardPuzzle(id, puzzleArray) {
  var currentPuzzle = getPuzzle(id, puzzleArray);

  switch (currentPuzzle.reward) {
    case ENUM_1.PuzzleReward.EVIDENCE:
      var stateEv = getLS_1.getStateLS();
      stateEv.addEvidencesId(id);
      updateLS.updateStateLS(stateEv);
      updateDOM.updateEvidencesDOM();
      break;

    case ENUM_1.PuzzleReward.PROGRESSPOINT:
      var statePR = getLS_1.getStateLS();
      statePR.progressPointInc();
      updateLS.updateStateLS(statePR);
      updateDOM.updateProgressDOM();
      break;
  }

  var stateRm = getLS_1.getStateLS();
  stateRm.removePuzzle(id);
  stateRm.addPuzzleSolved(id);
  updateLS.updateStateLS(stateRm);
  updateDOM.updatePuzzleDOM(stateRm, puzzleArray);
  document.querySelector(".puzzle").style.display = 'none';
};

var newPuzzle = function newPuzzle(id, puzzleArray, puzzleCardArray) {
  var state = getLS_1.getStateLS();

  if (state.userPuzzlesId.includes(getPuzzleCard(id, puzzleCardArray).puzzleId)) {
    return;
  }

  var puzzleID = '';
  puzzleArray.forEach(function (e) {
    e.puzzleCards.forEach(function (cardID) {
      if (cardID === id) {
        puzzleID = e.id;
      }
    });
  });

  if (state.puzzlesSolved.includes(puzzleID)) {
    readContent_1.puzzleAlreadySolved();
    return;
  }

  state.addPuzzlesId(puzzleID);
  updateDOM.updatePuzzleDOM(state, puzzleArray);
  updateLS.updateStateLS(state);
};

exports.newPuzzle = newPuzzle;

var newPuzzleCard = function newPuzzleCard(id, puzzleCardArray, puzzleArray) {
  var puzzleCard = getPuzzleCard(id, puzzleCardArray);
  var puzzleObj = getPuzzle(puzzleCard.puzzleId, puzzleArray);
  puzzleObj.addVisitedCard(puzzleCard.id);
  var puzzleArrayMain = puzzleArray;
  updateLS.updatePuzzleLS(puzzleArrayMain);
};

exports.newPuzzleCard = newPuzzleCard;
},{"./ENUM":"src/ENUM.ts","./readContent":"src/readContent.ts","./updateDOM":"src/updateDOM.ts","./getLS":"src/getLS.ts","./updateLS":"src/updateLS.ts"}],"src/board.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stressCardAction = exports.mainAction = exports.checkStatus = exports.checkActions = exports.getBoard = void 0;

var puzzle = __importStar(require("./puzzleAction"));

var ENUM = __importStar(require("./ENUM"));

var readContent_1 = require("./readContent");

var updateDOM = __importStar(require("./updateDOM"));

var getLS_1 = require("./getLS");

var updateLS_1 = require("./updateLS");

var checkStatus = function checkStatus(currentField, state) {
  return state.visitedAreas.includes(currentField._fieldID);
};

exports.checkStatus = checkStatus;

var checkActions = function checkActions(state) {
  return state.actionNumbers > 0;
};

exports.checkActions = checkActions;

var getBoard = function getBoard(id, boardAreas) {
  return boardAreas.find(function (c) {
    return c._fieldID === id;
  });
};

exports.getBoard = getBoard;

var updateAction = function updateAction(numOfPoints, state) {
  state.actionNumbers += numOfPoints;
};

var move = function move(currentField) {
  var state = getLS_1.getStateLS();
  currentField.status = ENUM.BoardState.EXPLORED;
  state.updateVisitedAreas(currentField._fieldID);
  updateDOM.updateAreaDOM(state);
  state.actionNumbers -= 1;
  updateLS_1.updateStateLS(state);
  updateDOM.updateActionDOM(state.actionNumbers);
};

var readParagraph = function readParagraph(id, paragraphsArray) {
  var state = getLS_1.getStateLS();
  var currentParagraph = paragraphsArray.find(function (c) {
    return c.id === id;
  });

  if (currentParagraph) {
    state.addParagraphsId(currentParagraph.id);
  }

  updateLS_1.updateStateLS(state);
  readContent_1.read(currentParagraph);
};

var getAreaContent = function getAreaContent(boardField, puzzleCardArray, puzzleArray) {
  var state = getLS_1.getStateLS();

  switch (boardField.content) {
    case ENUM.BoardContent.CLUE:
      updateAction(ENUM.ActionPointsEnum.CLUE, state);
      updateDOM.updateActionDOM(state.actionNumbers);
      break;

    case ENUM.BoardContent.PUZZLE:
      puzzle.newPuzzle(boardField.fieldID, puzzleArray, puzzleCardArray);
      puzzle.newPuzzleCard(boardField.fieldID, puzzleCardArray, puzzleArray);
      break;

    default:
  }
};

var mainAction = function mainAction(areaID, currentField, paragraphsArray, puzzleCardArray, puzzleArray) {
  move(currentField);
  readParagraph(areaID, paragraphsArray);
  getAreaContent(currentField, puzzleCardArray, puzzleArray);
};

exports.mainAction = mainAction;

var stressCardAction = function stressCardAction(state, stressParagraphs) {
  updateAction(ENUM.ActionPointsEnum.STRESSCARD, state);

  if (state.userEvidencesId.length !== 0) {
    state.removeEvidence();
  }

  updateLS_1.updateStateLS(state);
  updateDOM.updateEvidencesDOM();
  readContent_1.readStressParagraph(stressParagraphs);
  updateDOM.updateActionDOM(state.actionNumbers);
};

exports.stressCardAction = stressCardAction;
},{"./puzzleAction":"src/puzzleAction.ts","./ENUM":"src/ENUM.ts","./readContent":"src/readContent.ts","./updateDOM":"src/updateDOM.ts","./getLS":"src/getLS.ts","./updateLS":"src/updateLS.ts"}],"node_modules/simplebar/node_modules/core-js/internals/global.js":[function(require,module,exports) {
var global = arguments[3];
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

},{}],"node_modules/simplebar/node_modules/core-js/internals/fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

},{}],"node_modules/simplebar/node_modules/core-js/internals/descriptors.js":[function(require,module,exports) {
var fails = require('../internals/fails');

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

},{"../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-property-is-enumerable.js":[function(require,module,exports) {
'use strict';
var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

},{}],"node_modules/simplebar/node_modules/core-js/internals/create-property-descriptor.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"node_modules/simplebar/node_modules/core-js/internals/classof-raw.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"node_modules/simplebar/node_modules/core-js/internals/indexed-object.js":[function(require,module,exports) {
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

},{"../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js","../internals/classof-raw":"node_modules/simplebar/node_modules/core-js/internals/classof-raw.js"}],"node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js":[function(require,module,exports) {
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

},{}],"node_modules/simplebar/node_modules/core-js/internals/to-indexed-object.js":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"node_modules/simplebar/node_modules/core-js/internals/indexed-object.js","../internals/require-object-coercible":"node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js"}],"node_modules/simplebar/node_modules/core-js/internals/is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"node_modules/simplebar/node_modules/core-js/internals/to-primitive.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"../internals/is-object":"node_modules/simplebar/node_modules/core-js/internals/is-object.js"}],"node_modules/simplebar/node_modules/core-js/internals/has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"node_modules/simplebar/node_modules/core-js/internals/document-create-element.js":[function(require,module,exports) {

var global = require('../internals/global');
var isObject = require('../internals/is-object');

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/is-object":"node_modules/simplebar/node_modules/core-js/internals/is-object.js"}],"node_modules/simplebar/node_modules/core-js/internals/ie8-dom-define.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

},{"../internals/descriptors":"node_modules/simplebar/node_modules/core-js/internals/descriptors.js","../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js","../internals/document-create-element":"node_modules/simplebar/node_modules/core-js/internals/document-create-element.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-descriptor.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPrimitive = require('../internals/to-primitive');
var has = require('../internals/has');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

},{"../internals/descriptors":"node_modules/simplebar/node_modules/core-js/internals/descriptors.js","../internals/object-property-is-enumerable":"node_modules/simplebar/node_modules/core-js/internals/object-property-is-enumerable.js","../internals/create-property-descriptor":"node_modules/simplebar/node_modules/core-js/internals/create-property-descriptor.js","../internals/to-indexed-object":"node_modules/simplebar/node_modules/core-js/internals/to-indexed-object.js","../internals/to-primitive":"node_modules/simplebar/node_modules/core-js/internals/to-primitive.js","../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js","../internals/ie8-dom-define":"node_modules/simplebar/node_modules/core-js/internals/ie8-dom-define.js"}],"node_modules/simplebar/node_modules/core-js/internals/an-object.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

},{"../internals/is-object":"node_modules/simplebar/node_modules/core-js/internals/is-object.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-define-property.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var anObject = require('../internals/an-object');
var toPrimitive = require('../internals/to-primitive');

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"../internals/descriptors":"node_modules/simplebar/node_modules/core-js/internals/descriptors.js","../internals/ie8-dom-define":"node_modules/simplebar/node_modules/core-js/internals/ie8-dom-define.js","../internals/an-object":"node_modules/simplebar/node_modules/core-js/internals/an-object.js","../internals/to-primitive":"node_modules/simplebar/node_modules/core-js/internals/to-primitive.js"}],"node_modules/simplebar/node_modules/core-js/internals/create-non-enumerable-property.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"../internals/descriptors":"node_modules/simplebar/node_modules/core-js/internals/descriptors.js","../internals/object-define-property":"node_modules/simplebar/node_modules/core-js/internals/object-define-property.js","../internals/create-property-descriptor":"node_modules/simplebar/node_modules/core-js/internals/create-property-descriptor.js"}],"node_modules/simplebar/node_modules/core-js/internals/set-global.js":[function(require,module,exports) {

var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/create-non-enumerable-property":"node_modules/simplebar/node_modules/core-js/internals/create-non-enumerable-property.js"}],"node_modules/simplebar/node_modules/core-js/internals/shared-store.js":[function(require,module,exports) {

var global = require('../internals/global');
var setGlobal = require('../internals/set-global');

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/set-global":"node_modules/simplebar/node_modules/core-js/internals/set-global.js"}],"node_modules/simplebar/node_modules/core-js/internals/inspect-source.js":[function(require,module,exports) {
var store = require('../internals/shared-store');

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

},{"../internals/shared-store":"node_modules/simplebar/node_modules/core-js/internals/shared-store.js"}],"node_modules/simplebar/node_modules/core-js/internals/native-weak-map.js":[function(require,module,exports) {

var global = require('../internals/global');
var inspectSource = require('../internals/inspect-source');

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/inspect-source":"node_modules/simplebar/node_modules/core-js/internals/inspect-source.js"}],"node_modules/simplebar/node_modules/core-js/internals/is-pure.js":[function(require,module,exports) {
module.exports = false;

},{}],"node_modules/simplebar/node_modules/core-js/internals/shared.js":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

},{"../internals/is-pure":"node_modules/simplebar/node_modules/core-js/internals/is-pure.js","../internals/shared-store":"node_modules/simplebar/node_modules/core-js/internals/shared-store.js"}],"node_modules/simplebar/node_modules/core-js/internals/uid.js":[function(require,module,exports) {
var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

},{}],"node_modules/simplebar/node_modules/core-js/internals/shared-key.js":[function(require,module,exports) {
var shared = require('../internals/shared');
var uid = require('../internals/uid');

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"node_modules/simplebar/node_modules/core-js/internals/shared.js","../internals/uid":"node_modules/simplebar/node_modules/core-js/internals/uid.js"}],"node_modules/simplebar/node_modules/core-js/internals/hidden-keys.js":[function(require,module,exports) {
module.exports = {};

},{}],"node_modules/simplebar/node_modules/core-js/internals/internal-state.js":[function(require,module,exports) {

var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var objectHas = require('../internals/has');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

},{"../internals/native-weak-map":"node_modules/simplebar/node_modules/core-js/internals/native-weak-map.js","../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/is-object":"node_modules/simplebar/node_modules/core-js/internals/is-object.js","../internals/create-non-enumerable-property":"node_modules/simplebar/node_modules/core-js/internals/create-non-enumerable-property.js","../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js","../internals/shared-store":"node_modules/simplebar/node_modules/core-js/internals/shared-store.js","../internals/shared-key":"node_modules/simplebar/node_modules/core-js/internals/shared-key.js","../internals/hidden-keys":"node_modules/simplebar/node_modules/core-js/internals/hidden-keys.js"}],"node_modules/simplebar/node_modules/core-js/internals/redefine.js":[function(require,module,exports) {

var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var setGlobal = require('../internals/set-global');
var inspectSource = require('../internals/inspect-source');
var InternalStateModule = require('../internals/internal-state');

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/create-non-enumerable-property":"node_modules/simplebar/node_modules/core-js/internals/create-non-enumerable-property.js","../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js","../internals/set-global":"node_modules/simplebar/node_modules/core-js/internals/set-global.js","../internals/inspect-source":"node_modules/simplebar/node_modules/core-js/internals/inspect-source.js","../internals/internal-state":"node_modules/simplebar/node_modules/core-js/internals/internal-state.js"}],"node_modules/simplebar/node_modules/core-js/internals/path.js":[function(require,module,exports) {

var global = require('../internals/global');

module.exports = global;

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js"}],"node_modules/simplebar/node_modules/core-js/internals/get-built-in.js":[function(require,module,exports) {

var path = require('../internals/path');
var global = require('../internals/global');

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

},{"../internals/path":"node_modules/simplebar/node_modules/core-js/internals/path.js","../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js"}],"node_modules/simplebar/node_modules/core-js/internals/to-integer.js":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

},{}],"node_modules/simplebar/node_modules/core-js/internals/to-length.js":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer":"node_modules/simplebar/node_modules/core-js/internals/to-integer.js"}],"node_modules/simplebar/node_modules/core-js/internals/to-absolute-index.js":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer":"node_modules/simplebar/node_modules/core-js/internals/to-integer.js"}],"node_modules/simplebar/node_modules/core-js/internals/array-includes.js":[function(require,module,exports) {
var toIndexedObject = require('../internals/to-indexed-object');
var toLength = require('../internals/to-length');
var toAbsoluteIndex = require('../internals/to-absolute-index');

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"node_modules/simplebar/node_modules/core-js/internals/to-indexed-object.js","../internals/to-length":"node_modules/simplebar/node_modules/core-js/internals/to-length.js","../internals/to-absolute-index":"node_modules/simplebar/node_modules/core-js/internals/to-absolute-index.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-keys-internal.js":[function(require,module,exports) {
var has = require('../internals/has');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

},{"../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js","../internals/to-indexed-object":"node_modules/simplebar/node_modules/core-js/internals/to-indexed-object.js","../internals/array-includes":"node_modules/simplebar/node_modules/core-js/internals/array-includes.js","../internals/hidden-keys":"node_modules/simplebar/node_modules/core-js/internals/hidden-keys.js"}],"node_modules/simplebar/node_modules/core-js/internals/enum-bug-keys.js":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

},{}],"node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-names.js":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"node_modules/simplebar/node_modules/core-js/internals/object-keys-internal.js","../internals/enum-bug-keys":"node_modules/simplebar/node_modules/core-js/internals/enum-bug-keys.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-symbols.js":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"node_modules/simplebar/node_modules/core-js/internals/own-keys.js":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var anObject = require('../internals/an-object');

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"node_modules/simplebar/node_modules/core-js/internals/get-built-in.js","../internals/object-get-own-property-names":"node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-names.js","../internals/object-get-own-property-symbols":"node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-symbols.js","../internals/an-object":"node_modules/simplebar/node_modules/core-js/internals/an-object.js"}],"node_modules/simplebar/node_modules/core-js/internals/copy-constructor-properties.js":[function(require,module,exports) {
var has = require('../internals/has');
var ownKeys = require('../internals/own-keys');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

},{"../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js","../internals/own-keys":"node_modules/simplebar/node_modules/core-js/internals/own-keys.js","../internals/object-get-own-property-descriptor":"node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-descriptor.js","../internals/object-define-property":"node_modules/simplebar/node_modules/core-js/internals/object-define-property.js"}],"node_modules/simplebar/node_modules/core-js/internals/is-forced.js":[function(require,module,exports) {
var fails = require('../internals/fails');

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

},{"../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js"}],"node_modules/simplebar/node_modules/core-js/internals/export.js":[function(require,module,exports) {

var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var setGlobal = require('../internals/set-global');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var isForced = require('../internals/is-forced');

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/object-get-own-property-descriptor":"node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-descriptor.js","../internals/create-non-enumerable-property":"node_modules/simplebar/node_modules/core-js/internals/create-non-enumerable-property.js","../internals/redefine":"node_modules/simplebar/node_modules/core-js/internals/redefine.js","../internals/set-global":"node_modules/simplebar/node_modules/core-js/internals/set-global.js","../internals/copy-constructor-properties":"node_modules/simplebar/node_modules/core-js/internals/copy-constructor-properties.js","../internals/is-forced":"node_modules/simplebar/node_modules/core-js/internals/is-forced.js"}],"node_modules/simplebar/node_modules/core-js/internals/a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

},{}],"node_modules/simplebar/node_modules/core-js/internals/function-bind-context.js":[function(require,module,exports) {
var aFunction = require('../internals/a-function');

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"../internals/a-function":"node_modules/simplebar/node_modules/core-js/internals/a-function.js"}],"node_modules/simplebar/node_modules/core-js/internals/to-object.js":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js"}],"node_modules/simplebar/node_modules/core-js/internals/is-array.js":[function(require,module,exports) {
var classof = require('../internals/classof-raw');

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

},{"../internals/classof-raw":"node_modules/simplebar/node_modules/core-js/internals/classof-raw.js"}],"node_modules/simplebar/node_modules/core-js/internals/native-symbol.js":[function(require,module,exports) {
var fails = require('../internals/fails');

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

},{"../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js"}],"node_modules/simplebar/node_modules/core-js/internals/use-symbol-as-uid.js":[function(require,module,exports) {
var NATIVE_SYMBOL = require('../internals/native-symbol');

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":"node_modules/simplebar/node_modules/core-js/internals/native-symbol.js"}],"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js":[function(require,module,exports) {

var global = require('../internals/global');
var shared = require('../internals/shared');
var has = require('../internals/has');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/shared":"node_modules/simplebar/node_modules/core-js/internals/shared.js","../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js","../internals/uid":"node_modules/simplebar/node_modules/core-js/internals/uid.js","../internals/native-symbol":"node_modules/simplebar/node_modules/core-js/internals/native-symbol.js","../internals/use-symbol-as-uid":"node_modules/simplebar/node_modules/core-js/internals/use-symbol-as-uid.js"}],"node_modules/simplebar/node_modules/core-js/internals/array-species-create.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var isArray = require('../internals/is-array');
var wellKnownSymbol = require('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

},{"../internals/is-object":"node_modules/simplebar/node_modules/core-js/internals/is-object.js","../internals/is-array":"node_modules/simplebar/node_modules/core-js/internals/is-array.js","../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/simplebar/node_modules/core-js/internals/array-iteration.js":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var arraySpeciesCreate = require('../internals/array-species-create');

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};

},{"../internals/function-bind-context":"node_modules/simplebar/node_modules/core-js/internals/function-bind-context.js","../internals/indexed-object":"node_modules/simplebar/node_modules/core-js/internals/indexed-object.js","../internals/to-object":"node_modules/simplebar/node_modules/core-js/internals/to-object.js","../internals/to-length":"node_modules/simplebar/node_modules/core-js/internals/to-length.js","../internals/array-species-create":"node_modules/simplebar/node_modules/core-js/internals/array-species-create.js"}],"node_modules/simplebar/node_modules/core-js/internals/array-method-is-strict.js":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

},{"../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js"}],"node_modules/simplebar/node_modules/core-js/internals/array-method-uses-to-length.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var has = require('../internals/has');

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};

},{"../internals/descriptors":"node_modules/simplebar/node_modules/core-js/internals/descriptors.js","../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js","../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js"}],"node_modules/simplebar/node_modules/core-js/internals/array-for-each.js":[function(require,module,exports) {
'use strict';
var $forEach = require('../internals/array-iteration').forEach;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length');

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

},{"../internals/array-iteration":"node_modules/simplebar/node_modules/core-js/internals/array-iteration.js","../internals/array-method-is-strict":"node_modules/simplebar/node_modules/core-js/internals/array-method-is-strict.js","../internals/array-method-uses-to-length":"node_modules/simplebar/node_modules/core-js/internals/array-method-uses-to-length.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.array.for-each.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var forEach = require('../internals/array-for-each');

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});

},{"../internals/export":"node_modules/simplebar/node_modules/core-js/internals/export.js","../internals/array-for-each":"node_modules/simplebar/node_modules/core-js/internals/array-for-each.js"}],"node_modules/simplebar/node_modules/core-js/internals/dom-iterables.js":[function(require,module,exports) {
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

},{}],"node_modules/simplebar/node_modules/core-js/modules/web.dom-collections.for-each.js":[function(require,module,exports) {

var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var forEach = require('../internals/array-for-each');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/dom-iterables":"node_modules/simplebar/node_modules/core-js/internals/dom-iterables.js","../internals/array-for-each":"node_modules/simplebar/node_modules/core-js/internals/array-for-each.js","../internals/create-non-enumerable-property":"node_modules/simplebar/node_modules/core-js/internals/create-non-enumerable-property.js"}],"node_modules/can-use-dom/index.js":[function(require,module,exports) {
var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

module.exports = canUseDOM;
},{}],"node_modules/simplebar/node_modules/core-js/internals/engine-user-agent.js":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');

module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":"node_modules/simplebar/node_modules/core-js/internals/get-built-in.js"}],"node_modules/simplebar/node_modules/core-js/internals/engine-v8-version.js":[function(require,module,exports) {


var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/engine-user-agent":"node_modules/simplebar/node_modules/core-js/internals/engine-user-agent.js"}],"node_modules/simplebar/node_modules/core-js/internals/array-method-has-species-support.js":[function(require,module,exports) {
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

},{"../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js","../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js","../internals/engine-v8-version":"node_modules/simplebar/node_modules/core-js/internals/engine-v8-version.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.array.filter.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $filter = require('../internals/array-iteration').filter;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"node_modules/simplebar/node_modules/core-js/internals/export.js","../internals/array-iteration":"node_modules/simplebar/node_modules/core-js/internals/array-iteration.js","../internals/array-method-has-species-support":"node_modules/simplebar/node_modules/core-js/internals/array-method-has-species-support.js","../internals/array-method-uses-to-length":"node_modules/simplebar/node_modules/core-js/internals/array-method-uses-to-length.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-keys.js":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/object-keys-internal":"node_modules/simplebar/node_modules/core-js/internals/object-keys-internal.js","../internals/enum-bug-keys":"node_modules/simplebar/node_modules/core-js/internals/enum-bug-keys.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-define-properties.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var anObject = require('../internals/an-object');
var objectKeys = require('../internals/object-keys');

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};

},{"../internals/descriptors":"node_modules/simplebar/node_modules/core-js/internals/descriptors.js","../internals/object-define-property":"node_modules/simplebar/node_modules/core-js/internals/object-define-property.js","../internals/an-object":"node_modules/simplebar/node_modules/core-js/internals/an-object.js","../internals/object-keys":"node_modules/simplebar/node_modules/core-js/internals/object-keys.js"}],"node_modules/simplebar/node_modules/core-js/internals/html.js":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');

module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":"node_modules/simplebar/node_modules/core-js/internals/get-built-in.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-create.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var defineProperties = require('../internals/object-define-properties');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = require('../internals/hidden-keys');
var html = require('../internals/html');
var documentCreateElement = require('../internals/document-create-element');
var sharedKey = require('../internals/shared-key');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

},{"../internals/an-object":"node_modules/simplebar/node_modules/core-js/internals/an-object.js","../internals/object-define-properties":"node_modules/simplebar/node_modules/core-js/internals/object-define-properties.js","../internals/enum-bug-keys":"node_modules/simplebar/node_modules/core-js/internals/enum-bug-keys.js","../internals/hidden-keys":"node_modules/simplebar/node_modules/core-js/internals/hidden-keys.js","../internals/html":"node_modules/simplebar/node_modules/core-js/internals/html.js","../internals/document-create-element":"node_modules/simplebar/node_modules/core-js/internals/document-create-element.js","../internals/shared-key":"node_modules/simplebar/node_modules/core-js/internals/shared-key.js"}],"node_modules/simplebar/node_modules/core-js/internals/add-to-unscopables.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var create = require('../internals/object-create');
var definePropertyModule = require('../internals/object-define-property');

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js","../internals/object-create":"node_modules/simplebar/node_modules/core-js/internals/object-create.js","../internals/object-define-property":"node_modules/simplebar/node_modules/core-js/internals/object-define-property.js"}],"node_modules/simplebar/node_modules/core-js/internals/iterators.js":[function(require,module,exports) {
module.exports = {};

},{}],"node_modules/simplebar/node_modules/core-js/internals/correct-prototype-getter.js":[function(require,module,exports) {
var fails = require('../internals/fails');

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-get-prototype-of.js":[function(require,module,exports) {
var has = require('../internals/has');
var toObject = require('../internals/to-object');
var sharedKey = require('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};

},{"../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js","../internals/to-object":"node_modules/simplebar/node_modules/core-js/internals/to-object.js","../internals/shared-key":"node_modules/simplebar/node_modules/core-js/internals/shared-key.js","../internals/correct-prototype-getter":"node_modules/simplebar/node_modules/core-js/internals/correct-prototype-getter.js"}],"node_modules/simplebar/node_modules/core-js/internals/iterators-core.js":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js","../internals/object-get-prototype-of":"node_modules/simplebar/node_modules/core-js/internals/object-get-prototype-of.js","../internals/create-non-enumerable-property":"node_modules/simplebar/node_modules/core-js/internals/create-non-enumerable-property.js","../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js","../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js","../internals/is-pure":"node_modules/simplebar/node_modules/core-js/internals/is-pure.js"}],"node_modules/simplebar/node_modules/core-js/internals/set-to-string-tag.js":[function(require,module,exports) {
var defineProperty = require('../internals/object-define-property').f;
var has = require('../internals/has');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

},{"../internals/object-define-property":"node_modules/simplebar/node_modules/core-js/internals/object-define-property.js","../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js","../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/simplebar/node_modules/core-js/internals/create-iterator-constructor.js":[function(require,module,exports) {
'use strict';
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

},{"../internals/iterators-core":"node_modules/simplebar/node_modules/core-js/internals/iterators-core.js","../internals/object-create":"node_modules/simplebar/node_modules/core-js/internals/object-create.js","../internals/create-property-descriptor":"node_modules/simplebar/node_modules/core-js/internals/create-property-descriptor.js","../internals/set-to-string-tag":"node_modules/simplebar/node_modules/core-js/internals/set-to-string-tag.js","../internals/iterators":"node_modules/simplebar/node_modules/core-js/internals/iterators.js"}],"node_modules/simplebar/node_modules/core-js/internals/a-possible-prototype.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

},{"../internals/is-object":"node_modules/simplebar/node_modules/core-js/internals/is-object.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-set-prototype-of.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

},{"../internals/an-object":"node_modules/simplebar/node_modules/core-js/internals/an-object.js","../internals/a-possible-prototype":"node_modules/simplebar/node_modules/core-js/internals/a-possible-prototype.js"}],"node_modules/simplebar/node_modules/core-js/internals/define-iterator.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createIteratorConstructor = require('../internals/create-iterator-constructor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var Iterators = require('../internals/iterators');
var IteratorsCore = require('../internals/iterators-core');

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

},{"../internals/export":"node_modules/simplebar/node_modules/core-js/internals/export.js","../internals/create-iterator-constructor":"node_modules/simplebar/node_modules/core-js/internals/create-iterator-constructor.js","../internals/object-get-prototype-of":"node_modules/simplebar/node_modules/core-js/internals/object-get-prototype-of.js","../internals/object-set-prototype-of":"node_modules/simplebar/node_modules/core-js/internals/object-set-prototype-of.js","../internals/set-to-string-tag":"node_modules/simplebar/node_modules/core-js/internals/set-to-string-tag.js","../internals/create-non-enumerable-property":"node_modules/simplebar/node_modules/core-js/internals/create-non-enumerable-property.js","../internals/redefine":"node_modules/simplebar/node_modules/core-js/internals/redefine.js","../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js","../internals/is-pure":"node_modules/simplebar/node_modules/core-js/internals/is-pure.js","../internals/iterators":"node_modules/simplebar/node_modules/core-js/internals/iterators.js","../internals/iterators-core":"node_modules/simplebar/node_modules/core-js/internals/iterators-core.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.array.iterator.js":[function(require,module,exports) {
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var addToUnscopables = require('../internals/add-to-unscopables');
var Iterators = require('../internals/iterators');
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"../internals/to-indexed-object":"node_modules/simplebar/node_modules/core-js/internals/to-indexed-object.js","../internals/add-to-unscopables":"node_modules/simplebar/node_modules/core-js/internals/add-to-unscopables.js","../internals/iterators":"node_modules/simplebar/node_modules/core-js/internals/iterators.js","../internals/internal-state":"node_modules/simplebar/node_modules/core-js/internals/internal-state.js","../internals/define-iterator":"node_modules/simplebar/node_modules/core-js/internals/define-iterator.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-assign.js":[function(require,module,exports) {
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var objectKeys = require('../internals/object-keys');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;

},{"../internals/descriptors":"node_modules/simplebar/node_modules/core-js/internals/descriptors.js","../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js","../internals/object-keys":"node_modules/simplebar/node_modules/core-js/internals/object-keys.js","../internals/object-get-own-property-symbols":"node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-symbols.js","../internals/object-property-is-enumerable":"node_modules/simplebar/node_modules/core-js/internals/object-property-is-enumerable.js","../internals/to-object":"node_modules/simplebar/node_modules/core-js/internals/to-object.js","../internals/indexed-object":"node_modules/simplebar/node_modules/core-js/internals/indexed-object.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.object.assign.js":[function(require,module,exports) {
var $ = require('../internals/export');
var assign = require('../internals/object-assign');

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});

},{"../internals/export":"node_modules/simplebar/node_modules/core-js/internals/export.js","../internals/object-assign":"node_modules/simplebar/node_modules/core-js/internals/object-assign.js"}],"node_modules/simplebar/node_modules/core-js/internals/to-string-tag-support.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/simplebar/node_modules/core-js/internals/classof.js":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classofRaw = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

},{"../internals/to-string-tag-support":"node_modules/simplebar/node_modules/core-js/internals/to-string-tag-support.js","../internals/classof-raw":"node_modules/simplebar/node_modules/core-js/internals/classof-raw.js","../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/simplebar/node_modules/core-js/internals/object-to-string.js":[function(require,module,exports) {
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classof = require('../internals/classof');

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

},{"../internals/to-string-tag-support":"node_modules/simplebar/node_modules/core-js/internals/to-string-tag-support.js","../internals/classof":"node_modules/simplebar/node_modules/core-js/internals/classof.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.object.to-string.js":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var redefine = require('../internals/redefine');
var toString = require('../internals/object-to-string');

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}

},{"../internals/to-string-tag-support":"node_modules/simplebar/node_modules/core-js/internals/to-string-tag-support.js","../internals/redefine":"node_modules/simplebar/node_modules/core-js/internals/redefine.js","../internals/object-to-string":"node_modules/simplebar/node_modules/core-js/internals/object-to-string.js"}],"node_modules/simplebar/node_modules/core-js/internals/whitespaces.js":[function(require,module,exports) {
// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],"node_modules/simplebar/node_modules/core-js/internals/string-trim.js":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
var whitespaces = require('../internals/whitespaces');

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

},{"../internals/require-object-coercible":"node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js","../internals/whitespaces":"node_modules/simplebar/node_modules/core-js/internals/whitespaces.js"}],"node_modules/simplebar/node_modules/core-js/internals/number-parse-int.js":[function(require,module,exports) {

var global = require('../internals/global');
var trim = require('../internals/string-trim').trim;
var whitespaces = require('../internals/whitespaces');

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/string-trim":"node_modules/simplebar/node_modules/core-js/internals/string-trim.js","../internals/whitespaces":"node_modules/simplebar/node_modules/core-js/internals/whitespaces.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.parse-int.js":[function(require,module,exports) {
var $ = require('../internals/export');
var parseIntImplementation = require('../internals/number-parse-int');

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});

},{"../internals/export":"node_modules/simplebar/node_modules/core-js/internals/export.js","../internals/number-parse-int":"node_modules/simplebar/node_modules/core-js/internals/number-parse-int.js"}],"node_modules/simplebar/node_modules/core-js/internals/string-multibyte.js":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var requireObjectCoercible = require('../internals/require-object-coercible');

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

},{"../internals/to-integer":"node_modules/simplebar/node_modules/core-js/internals/to-integer.js","../internals/require-object-coercible":"node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.string.iterator.js":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

},{"../internals/string-multibyte":"node_modules/simplebar/node_modules/core-js/internals/string-multibyte.js","../internals/internal-state":"node_modules/simplebar/node_modules/core-js/internals/internal-state.js","../internals/define-iterator":"node_modules/simplebar/node_modules/core-js/internals/define-iterator.js"}],"node_modules/simplebar/node_modules/core-js/internals/redefine-all.js":[function(require,module,exports) {
var redefine = require('../internals/redefine');

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};

},{"../internals/redefine":"node_modules/simplebar/node_modules/core-js/internals/redefine.js"}],"node_modules/simplebar/node_modules/core-js/internals/freezing.js":[function(require,module,exports) {
var fails = require('../internals/fails');

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});

},{"../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js"}],"node_modules/simplebar/node_modules/core-js/internals/internal-metadata.js":[function(require,module,exports) {
var hiddenKeys = require('../internals/hidden-keys');
var isObject = require('../internals/is-object');
var has = require('../internals/has');
var defineProperty = require('../internals/object-define-property').f;
var uid = require('../internals/uid');
var FREEZING = require('../internals/freezing');

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;

},{"../internals/hidden-keys":"node_modules/simplebar/node_modules/core-js/internals/hidden-keys.js","../internals/is-object":"node_modules/simplebar/node_modules/core-js/internals/is-object.js","../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js","../internals/object-define-property":"node_modules/simplebar/node_modules/core-js/internals/object-define-property.js","../internals/uid":"node_modules/simplebar/node_modules/core-js/internals/uid.js","../internals/freezing":"node_modules/simplebar/node_modules/core-js/internals/freezing.js"}],"node_modules/simplebar/node_modules/core-js/internals/is-array-iterator-method.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js","../internals/iterators":"node_modules/simplebar/node_modules/core-js/internals/iterators.js"}],"node_modules/simplebar/node_modules/core-js/internals/get-iterator-method.js":[function(require,module,exports) {
var classof = require('../internals/classof');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"../internals/classof":"node_modules/simplebar/node_modules/core-js/internals/classof.js","../internals/iterators":"node_modules/simplebar/node_modules/core-js/internals/iterators.js","../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/simplebar/node_modules/core-js/internals/iterator-close.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

},{"../internals/an-object":"node_modules/simplebar/node_modules/core-js/internals/an-object.js"}],"node_modules/simplebar/node_modules/core-js/internals/iterate.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var toLength = require('../internals/to-length');
var bind = require('../internals/function-bind-context');
var getIteratorMethod = require('../internals/get-iterator-method');
var iteratorClose = require('../internals/iterator-close');

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

},{"../internals/an-object":"node_modules/simplebar/node_modules/core-js/internals/an-object.js","../internals/is-array-iterator-method":"node_modules/simplebar/node_modules/core-js/internals/is-array-iterator-method.js","../internals/to-length":"node_modules/simplebar/node_modules/core-js/internals/to-length.js","../internals/function-bind-context":"node_modules/simplebar/node_modules/core-js/internals/function-bind-context.js","../internals/get-iterator-method":"node_modules/simplebar/node_modules/core-js/internals/get-iterator-method.js","../internals/iterator-close":"node_modules/simplebar/node_modules/core-js/internals/iterator-close.js"}],"node_modules/simplebar/node_modules/core-js/internals/an-instance.js":[function(require,module,exports) {
module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};

},{}],"node_modules/simplebar/node_modules/core-js/internals/check-correctness-of-iteration.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

},{"../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/simplebar/node_modules/core-js/internals/inherit-if-required.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var setPrototypeOf = require('../internals/object-set-prototype-of');

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

},{"../internals/is-object":"node_modules/simplebar/node_modules/core-js/internals/is-object.js","../internals/object-set-prototype-of":"node_modules/simplebar/node_modules/core-js/internals/object-set-prototype-of.js"}],"node_modules/simplebar/node_modules/core-js/internals/collection.js":[function(require,module,exports) {

'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var isForced = require('../internals/is-forced');
var redefine = require('../internals/redefine');
var InternalMetadataModule = require('../internals/internal-metadata');
var iterate = require('../internals/iterate');
var anInstance = require('../internals/an-instance');
var isObject = require('../internals/is-object');
var fails = require('../internals/fails');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var setToStringTag = require('../internals/set-to-string-tag');
var inheritIfRequired = require('../internals/inherit-if-required');

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

},{"../internals/export":"node_modules/simplebar/node_modules/core-js/internals/export.js","../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/is-forced":"node_modules/simplebar/node_modules/core-js/internals/is-forced.js","../internals/redefine":"node_modules/simplebar/node_modules/core-js/internals/redefine.js","../internals/internal-metadata":"node_modules/simplebar/node_modules/core-js/internals/internal-metadata.js","../internals/iterate":"node_modules/simplebar/node_modules/core-js/internals/iterate.js","../internals/an-instance":"node_modules/simplebar/node_modules/core-js/internals/an-instance.js","../internals/is-object":"node_modules/simplebar/node_modules/core-js/internals/is-object.js","../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js","../internals/check-correctness-of-iteration":"node_modules/simplebar/node_modules/core-js/internals/check-correctness-of-iteration.js","../internals/set-to-string-tag":"node_modules/simplebar/node_modules/core-js/internals/set-to-string-tag.js","../internals/inherit-if-required":"node_modules/simplebar/node_modules/core-js/internals/inherit-if-required.js"}],"node_modules/simplebar/node_modules/core-js/internals/collection-weak.js":[function(require,module,exports) {
var define;
'use strict';
var redefineAll = require('../internals/redefine-all');
var getWeakData = require('../internals/internal-metadata').getWeakData;
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var anInstance = require('../internals/an-instance');
var iterate = require('../internals/iterate');
var ArrayIterationModule = require('../internals/array-iteration');
var $has = require('../internals/has');
var InternalStateModule = require('../internals/internal-state');

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && $has(data, state.id) && delete data[state.id];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && $has(data, state.id);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // 23.4.3.1 WeakSet.prototype.add(value)
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};

},{"../internals/redefine-all":"node_modules/simplebar/node_modules/core-js/internals/redefine-all.js","../internals/internal-metadata":"node_modules/simplebar/node_modules/core-js/internals/internal-metadata.js","../internals/an-object":"node_modules/simplebar/node_modules/core-js/internals/an-object.js","../internals/is-object":"node_modules/simplebar/node_modules/core-js/internals/is-object.js","../internals/an-instance":"node_modules/simplebar/node_modules/core-js/internals/an-instance.js","../internals/iterate":"node_modules/simplebar/node_modules/core-js/internals/iterate.js","../internals/array-iteration":"node_modules/simplebar/node_modules/core-js/internals/array-iteration.js","../internals/has":"node_modules/simplebar/node_modules/core-js/internals/has.js","../internals/internal-state":"node_modules/simplebar/node_modules/core-js/internals/internal-state.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.weak-map.js":[function(require,module,exports) {

'use strict';
var global = require('../internals/global');
var redefineAll = require('../internals/redefine-all');
var InternalMetadataModule = require('../internals/internal-metadata');
var collection = require('../internals/collection');
var collectionWeak = require('../internals/collection-weak');
var isObject = require('../internals/is-object');
var enforceIternalState = require('../internals/internal-state').enforce;
var NATIVE_WEAK_MAP = require('../internals/native-weak-map');

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var isExtensible = Object.isExtensible;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.REQUIRED = true;
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = WeakMapPrototype['delete'];
  var nativeHas = WeakMapPrototype.has;
  var nativeGet = WeakMapPrototype.get;
  var nativeSet = WeakMapPrototype.set;
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete.call(this, key) || state.frozen['delete'](key);
      } return nativeDelete.call(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) || state.frozen.has(key);
      } return nativeHas.call(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
      } return nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else nativeSet.call(this, key, value);
      return this;
    }
  });
}

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/redefine-all":"node_modules/simplebar/node_modules/core-js/internals/redefine-all.js","../internals/internal-metadata":"node_modules/simplebar/node_modules/core-js/internals/internal-metadata.js","../internals/collection":"node_modules/simplebar/node_modules/core-js/internals/collection.js","../internals/collection-weak":"node_modules/simplebar/node_modules/core-js/internals/collection-weak.js","../internals/is-object":"node_modules/simplebar/node_modules/core-js/internals/is-object.js","../internals/internal-state":"node_modules/simplebar/node_modules/core-js/internals/internal-state.js","../internals/native-weak-map":"node_modules/simplebar/node_modules/core-js/internals/native-weak-map.js"}],"node_modules/simplebar/node_modules/core-js/modules/web.dom-collections.iterator.js":[function(require,module,exports) {

var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var ArrayIteratorMethods = require('../modules/es.array.iterator');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}

},{"../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js","../internals/dom-iterables":"node_modules/simplebar/node_modules/core-js/internals/dom-iterables.js","../modules/es.array.iterator":"node_modules/simplebar/node_modules/core-js/modules/es.array.iterator.js","../internals/create-non-enumerable-property":"node_modules/simplebar/node_modules/core-js/internals/create-non-enumerable-property.js","../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/lodash.throttle/index.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

},{}],"node_modules/lodash.debounce/index.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

},{}],"node_modules/lodash.memoize/index.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = memoize;

},{}],"node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */

/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = function () {
  if (typeof Map !== 'undefined') {
    return Map;
  }
  /**
   * Returns index in provided array that matches the specified key.
   *
   * @param {Array<Array>} arr
   * @param {*} key
   * @returns {number}
   */


  function getIndex(arr, key) {
    var result = -1;
    arr.some(function (entry, index) {
      if (entry[0] === key) {
        result = index;
        return true;
      }

      return false;
    });
    return result;
  }

  return (
    /** @class */
    function () {
      function class_1() {
        this.__entries__ = [];
      }

      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function () {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @param {*} key
       * @returns {*}
       */

      class_1.prototype.get = function (key) {
        var index = getIndex(this.__entries__, key);
        var entry = this.__entries__[index];
        return entry && entry[1];
      };
      /**
       * @param {*} key
       * @param {*} value
       * @returns {void}
       */


      class_1.prototype.set = function (key, value) {
        var index = getIndex(this.__entries__, key);

        if (~index) {
          this.__entries__[index][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */


      class_1.prototype.delete = function (key) {
        var entries = this.__entries__;
        var index = getIndex(entries, key);

        if (~index) {
          entries.splice(index, 1);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */


      class_1.prototype.has = function (key) {
        return !!~getIndex(this.__entries__, key);
      };
      /**
       * @returns {void}
       */


      class_1.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      /**
       * @param {Function} callback
       * @param {*} [ctx=null]
       * @returns {void}
       */


      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }

        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };

      return class_1;
    }()
  );
}();
/**
 * Detects whether window and document objects are available in current environment.
 */


var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

var global$1 = function () {
  if (typeof global !== 'undefined' && global.Math === Math) {
    return global;
  }

  if (typeof self !== 'undefined' && self.Math === Math) {
    return self;
  }

  if (typeof window !== 'undefined' && window.Math === Math) {
    return window;
  } // eslint-disable-next-line no-new-func


  return Function('return this')();
}();
/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */


var requestAnimationFrame$1 = function () {
  if (typeof requestAnimationFrame === 'function') {
    // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
  }

  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1000 / 60);
  };
}(); // Defines minimum timeout before adding a trailing call.


var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */

function throttle(callback, delay) {
  var leadingCall = false,
      trailingCall = false,
      lastCallTime = 0;
  /**
   * Invokes the original callback function and schedules new invocation if
   * the "proxy" was called during current request.
   *
   * @returns {void}
   */

  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }

    if (trailingCall) {
      proxy();
    }
  }
  /**
   * Callback invoked after the specified delay. It will further postpone
   * invocation of the original function delegating it to the
   * requestAnimationFrame.
   *
   * @returns {void}
   */


  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  /**
   * Schedules invocation of the original function.
   *
   * @returns {void}
   */


  function proxy() {
    var timeStamp = Date.now();

    if (leadingCall) {
      // Reject immediately following calls.
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      } // Schedule new call to be in invoked when the pending one is resolved.
      // This is important for "transitions" which never actually start
      // immediately so there is a chance that we might miss one if change
      // happens amids the pending invocation.


      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }

    lastCallTime = timeStamp;
  }

  return proxy;
} // Minimum delay before invoking the update of observers.


var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.

var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */

var ResizeObserverController =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserverController.
   *
   * @private
   */
  function ResizeObserverController() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;
    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */

    this.mutationEventsAdded_ = false;
    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */

    this.mutationsObserver_ = null;
    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */

    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */


  ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    } // Add listeners if they haven't been added yet.


    if (!this.connected_) {
      this.connect_();
    }
  };
  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */


  ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer); // Remove observer if it's present in registry.

    if (~index) {
      observers.splice(index, 1);
    } // Remove listeners if controller has no connected observers.


    if (!observers.length && this.connected_) {
      this.disconnect_();
    }
  };
  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */


  ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.

    if (changesDetected) {
      this.refresh();
    }
  };
  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *      dimensions of it's elements.
   */


  ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
      return observer.gatherActive(), observer.hasActive();
    }); // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.

    activeObservers.forEach(function (observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */


  ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
      return;
    } // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.


    document.addEventListener('transitionend', this.onTransitionEnd_);
    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener('DOMSubtreeModified', this.refresh);
      this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
  };
  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */


  ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
      return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
      document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */


  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    var _b = _a.propertyName,
        propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

    var isReflowProperty = transitionKeys.some(function (key) {
      return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
      this.refresh();
    }
  };
  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */


  ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
  };
  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */


  ResizeObserverController.instance_ = null;
  return ResizeObserverController;
}();
/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */


var defineConfigurable = function (target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }

  return target;
};
/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */


var getWindowOf = function (target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
  // provided element.

  return ownerGlobal || global$1;
}; // Placeholder of an empty content rectangle.


var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */

function toFloat(value) {
  return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */


function getBordersSize(styles) {
  var positions = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }

  return positions.reduce(function (size, position) {
    var value = styles['border-' + position + '-width'];
    return size + toFloat(value);
  }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */


function getPaddings(styles) {
  var positions = ['top', 'right', 'bottom', 'left'];
  var paddings = {};

  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles['padding-' + position];
    paddings[position] = toFloat(value);
  }

  return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */


function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */


function getHTMLElementContentRect(target) {
  // Client width & height properties can't be
  // used exclusively as they provide rounded values.
  var clientWidth = target.clientWidth,
      clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
  // detached elements. Though elements with width & height properties less
  // than 0.5 will be discarded as well.
  //
  // Without it we would need to implement separate methods for each of
  // those cases and it's not possible to perform a precise and performance
  // effective test for hidden elements. E.g. even jQuery's ':visible' filter
  // gives wrong results for elements with width & height less than 0.5.

  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }

  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
  // only dimensions available to JS that contain non-rounded values. It could
  // be possible to utilize the getBoundingClientRect if only it's data wasn't
  // affected by CSS transformations let alone paddings, borders and scroll bars.

  var width = toFloat(styles.width),
      height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
  // model is applied (except for IE).

  if (styles.boxSizing === 'border-box') {
    // Following conditions are required to handle Internet Explorer which
    // doesn't include paddings and borders to computed CSS dimensions.
    //
    // We can say that if CSS dimensions + paddings are equal to the "client"
    // properties then it's either IE, and thus we don't need to subtract
    // anything, or an element merely doesn't have paddings/borders styles.
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, 'left', 'right') + horizPad;
    }

    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
  } // Following steps can't be applied to the document's root element as its
  // client[Width/Height] properties represent viewport area of the window.
  // Besides, it's as well not necessary as the <html> itself neither has
  // rendered scroll bars nor it can be clipped.


  if (!isDocumentElement(target)) {
    // In some browsers (only in Firefox, actually) CSS width & height
    // include scroll bars size which can be removed at this step as scroll
    // bars are the only difference between rounded dimensions + paddings
    // and "client" properties, though that is not always true in Chrome.
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
    // E.g. for an element with content width of 314.2px it sometimes gives
    // the client width of 315px and for the width of 314.7px it may give
    // 314px. And it doesn't happen all the time. So just ignore this delta
    // as a non-relevant.

    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }

    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }

  return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */


var isSVGGraphicsElement = function () {
  // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
  // interface.
  if (typeof SVGGraphicsElement !== 'undefined') {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  } // If it's so, then check that element is at least an instance of the
  // SVGElement and that it has the "getBBox" method.
  // eslint-disable-next-line no-extra-parens


  return function (target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
  };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */


function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */


function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }

  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }

  return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */


function createReadOnlyRect(_a) {
  var x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

  var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

  defineConfigurable(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */


function createRectInit(x, y, width, height) {
  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
}
/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */


var ResizeObservation =
/** @class */
function () {
  /**
   * Creates an instance of ResizeObservation.
   *
   * @param {Element} target - Element to be observed.
   */
  function ResizeObservation(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;
    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */

    this.broadcastHeight = 0;
    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */

    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */


  ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */


  ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };

  return ResizeObservation;
}();

var ResizeObserverEntry =
/** @class */
function () {
  /**
   * Creates an instance of ResizeObserverEntry.
   *
   * @param {Element} target - Element that is being observed.
   * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
   */
  function ResizeObserverEntry(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.

    defineConfigurable(this, {
      target: target,
      contentRect: contentRect
    });
  }

  return ResizeObserverEntry;
}();

var ResizeObserverSPI =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback function that is invoked
   *      when one of the observed elements changes it's content dimensions.
   * @param {ResizeObserverController} controller - Controller instance which
   *      is responsible for the updates of observer.
   * @param {ResizeObserver} callbackCtx - Reference to the public
   *      ResizeObserver instance which will be passed to callback function.
   */
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];
    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */

    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
      throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */


  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    } // Do nothing if current environment doesn't have the Element interface.


    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_; // Do nothing if element is already being observed.

    if (observations.has(target)) {
      return;
    }

    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this); // Force the update of observations.

    this.controller_.refresh();
  };
  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */


  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    } // Do nothing if current environment doesn't have the Element interface.


    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_; // Do nothing if element is not being observed.

    if (!observations.has(target)) {
      return;
    }

    observations.delete(target);

    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.gatherActive = function () {
    var _this = this;

    this.clearActive();
    this.observations_.forEach(function (observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
      return;
    }

    var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

    var entries = this.activeObservations_.map(function (observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */


  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };

  return ResizeObserverSPI;
}(); // Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.


var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */

var ResizeObserver =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback that is invoked when
   *      dimensions of the observed elements change.
   */
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError('Cannot call a class as a function.');
    }

    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }

  return ResizeObserver;
}(); // Expose public methods of ResizeObserver.


['observe', 'unobserve', 'disconnect'].forEach(function (method) {
  ResizeObserver.prototype[method] = function () {
    var _a;

    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});

var index = function () {
  // Export existing implementation if available.
  if (typeof global$1.ResizeObserver !== 'undefined') {
    return global$1.ResizeObserver;
  }

  return ResizeObserver;
}();

var _default = index;
exports.default = _default;
},{}],"node_modules/simplebar/node_modules/core-js/internals/array-reduce.js":[function(require,module,exports) {
var aFunction = require('../internals/a-function');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
var toLength = require('../internals/to-length');

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

},{"../internals/a-function":"node_modules/simplebar/node_modules/core-js/internals/a-function.js","../internals/to-object":"node_modules/simplebar/node_modules/core-js/internals/to-object.js","../internals/indexed-object":"node_modules/simplebar/node_modules/core-js/internals/indexed-object.js","../internals/to-length":"node_modules/simplebar/node_modules/core-js/internals/to-length.js"}],"node_modules/simplebar/node_modules/core-js/internals/engine-is-node.js":[function(require,module,exports) {

var classof = require('../internals/classof-raw');
var global = require('../internals/global');

module.exports = classof(global.process) == 'process';

},{"../internals/classof-raw":"node_modules/simplebar/node_modules/core-js/internals/classof-raw.js","../internals/global":"node_modules/simplebar/node_modules/core-js/internals/global.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.array.reduce.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $reduce = require('../internals/array-reduce').left;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length');
var CHROME_VERSION = require('../internals/engine-v8-version');
var IS_NODE = require('../internals/engine-is-node');

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"node_modules/simplebar/node_modules/core-js/internals/export.js","../internals/array-reduce":"node_modules/simplebar/node_modules/core-js/internals/array-reduce.js","../internals/array-method-is-strict":"node_modules/simplebar/node_modules/core-js/internals/array-method-is-strict.js","../internals/array-method-uses-to-length":"node_modules/simplebar/node_modules/core-js/internals/array-method-uses-to-length.js","../internals/engine-v8-version":"node_modules/simplebar/node_modules/core-js/internals/engine-v8-version.js","../internals/engine-is-node":"node_modules/simplebar/node_modules/core-js/internals/engine-is-node.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.function.name.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var defineProperty = require('../internals/object-define-property').f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

},{"../internals/descriptors":"node_modules/simplebar/node_modules/core-js/internals/descriptors.js","../internals/object-define-property":"node_modules/simplebar/node_modules/core-js/internals/object-define-property.js"}],"node_modules/simplebar/node_modules/core-js/internals/regexp-flags.js":[function(require,module,exports) {
'use strict';
var anObject = require('../internals/an-object');

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"../internals/an-object":"node_modules/simplebar/node_modules/core-js/internals/an-object.js"}],"node_modules/simplebar/node_modules/core-js/internals/regexp-sticky-helpers.js":[function(require,module,exports) {
'use strict';

var fails = require('./fails');

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

},{"./fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js"}],"node_modules/simplebar/node_modules/core-js/internals/regexp-exec.js":[function(require,module,exports) {
'use strict';
var regexpFlags = require('./regexp-flags');
var stickyHelpers = require('./regexp-sticky-helpers');

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

},{"./regexp-flags":"node_modules/simplebar/node_modules/core-js/internals/regexp-flags.js","./regexp-sticky-helpers":"node_modules/simplebar/node_modules/core-js/internals/regexp-sticky-helpers.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.regexp.exec.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var exec = require('../internals/regexp-exec');

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

},{"../internals/export":"node_modules/simplebar/node_modules/core-js/internals/export.js","../internals/regexp-exec":"node_modules/simplebar/node_modules/core-js/internals/regexp-exec.js"}],"node_modules/simplebar/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":[function(require,module,exports) {
'use strict';
// TODO: Remove from `core-js@4` since it's moved to entry points
require('../modules/es.regexp.exec');
var redefine = require('../internals/redefine');
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var regexpExec = require('../internals/regexp-exec');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};

},{"../modules/es.regexp.exec":"node_modules/simplebar/node_modules/core-js/modules/es.regexp.exec.js","../internals/redefine":"node_modules/simplebar/node_modules/core-js/internals/redefine.js","../internals/fails":"node_modules/simplebar/node_modules/core-js/internals/fails.js","../internals/well-known-symbol":"node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js","../internals/regexp-exec":"node_modules/simplebar/node_modules/core-js/internals/regexp-exec.js","../internals/create-non-enumerable-property":"node_modules/simplebar/node_modules/core-js/internals/create-non-enumerable-property.js"}],"node_modules/simplebar/node_modules/core-js/internals/advance-string-index.js":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

},{"../internals/string-multibyte":"node_modules/simplebar/node_modules/core-js/internals/string-multibyte.js"}],"node_modules/simplebar/node_modules/core-js/internals/regexp-exec-abstract.js":[function(require,module,exports) {
var classof = require('./classof-raw');
var regexpExec = require('./regexp-exec');

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};


},{"./classof-raw":"node_modules/simplebar/node_modules/core-js/internals/classof-raw.js","./regexp-exec":"node_modules/simplebar/node_modules/core-js/internals/regexp-exec.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.string.match.js":[function(require,module,exports) {
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var toLength = require('../internals/to-length');
var requireObjectCoercible = require('../internals/require-object-coercible');
var advanceStringIndex = require('../internals/advance-string-index');
var regExpExec = require('../internals/regexp-exec-abstract');

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

},{"../internals/fix-regexp-well-known-symbol-logic":"node_modules/simplebar/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js","../internals/an-object":"node_modules/simplebar/node_modules/core-js/internals/an-object.js","../internals/to-length":"node_modules/simplebar/node_modules/core-js/internals/to-length.js","../internals/require-object-coercible":"node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js","../internals/advance-string-index":"node_modules/simplebar/node_modules/core-js/internals/advance-string-index.js","../internals/regexp-exec-abstract":"node_modules/simplebar/node_modules/core-js/internals/regexp-exec-abstract.js"}],"node_modules/simplebar/node_modules/core-js/internals/get-substitution.js":[function(require,module,exports) {
var toObject = require('../internals/to-object');

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

},{"../internals/to-object":"node_modules/simplebar/node_modules/core-js/internals/to-object.js"}],"node_modules/simplebar/node_modules/core-js/modules/es.string.replace.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var toLength = require('../internals/to-length');
var toInteger = require('../internals/to-integer');
var requireObjectCoercible = require('../internals/require-object-coercible');
var advanceStringIndex = require('../internals/advance-string-index');
var getSubstitution = require('../internals/get-substitution');
var regExpExec = require('../internals/regexp-exec-abstract');

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});

},{"../internals/fix-regexp-well-known-symbol-logic":"node_modules/simplebar/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js","../internals/an-object":"node_modules/simplebar/node_modules/core-js/internals/an-object.js","../internals/to-length":"node_modules/simplebar/node_modules/core-js/internals/to-length.js","../internals/to-integer":"node_modules/simplebar/node_modules/core-js/internals/to-integer.js","../internals/require-object-coercible":"node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js","../internals/advance-string-index":"node_modules/simplebar/node_modules/core-js/internals/advance-string-index.js","../internals/get-substitution":"node_modules/simplebar/node_modules/core-js/internals/get-substitution.js","../internals/regexp-exec-abstract":"node_modules/simplebar/node_modules/core-js/internals/regexp-exec-abstract.js"}],"node_modules/simplebar/dist/simplebar.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.for-each");

require("core-js/modules/web.dom-collections.for-each");

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _lodash2 = _interopRequireDefault(require("lodash.debounce"));

var _lodash3 = _interopRequireDefault(require("lodash.memoize"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.function.name");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SimpleBar.js - v5.3.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */
var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;

if (_canUseDom.default) {
  window.addEventListener('resize', function () {
    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
      cachedDevicePixelRatio = window.devicePixelRatio;
      cachedScrollbarWidth = null;
    }
  });
}

function scrollbarWidth() {
  if (cachedScrollbarWidth === null) {
    if (typeof document === 'undefined') {
      cachedScrollbarWidth = 0;
      return cachedScrollbarWidth;
    }

    var body = document.body;
    var box = document.createElement('div');
    box.classList.add('simplebar-hide-scrollbar');
    body.appendChild(box);
    var width = box.getBoundingClientRect().right;
    body.removeChild(box);
    cachedScrollbarWidth = width;
  }

  return cachedScrollbarWidth;
} // Helper function to retrieve options from element attributes


var getOptions = function getOptions(obj) {
  var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);

    if (option) {
      var key = option[1].replace(/\W+(.)/g, function (x, chr) {
        return chr.toUpperCase();
      });

      switch (attribute.value) {
        case 'true':
          acc[key] = true;
          break;

        case 'false':
          acc[key] = false;
          break;

        case undefined:
          acc[key] = true;
          break;

        default:
          acc[key] = attribute.value;
      }
    }

    return acc;
  }, {});
  return options;
};

function getElementWindow(element) {
  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
    return window;
  }

  return element.ownerDocument.defaultView;
}

function getElementDocument(element) {
  if (!element || !element.ownerDocument) {
    return document;
  }

  return element.ownerDocument;
}

var SimpleBar = /*#__PURE__*/function () {
  function SimpleBar(element, options) {
    var _this = this;

    this.onScroll = function () {
      var elWindow = getElementWindow(_this.el);

      if (!_this.scrollXTicking) {
        elWindow.requestAnimationFrame(_this.scrollX);
        _this.scrollXTicking = true;
      }

      if (!_this.scrollYTicking) {
        elWindow.requestAnimationFrame(_this.scrollY);
        _this.scrollYTicking = true;
      }
    };

    this.scrollX = function () {
      if (_this.axis.x.isOverflowing) {
        _this.showScrollbar('x');

        _this.positionScrollbar('x');
      }

      _this.scrollXTicking = false;
    };

    this.scrollY = function () {
      if (_this.axis.y.isOverflowing) {
        _this.showScrollbar('y');

        _this.positionScrollbar('y');
      }

      _this.scrollYTicking = false;
    };

    this.onMouseEnter = function () {
      _this.showScrollbar('x');

      _this.showScrollbar('y');
    };

    this.onMouseMove = function (e) {
      _this.mouseX = e.clientX;
      _this.mouseY = e.clientY;

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseMoveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseMoveForAxis('y');
      }
    };

    this.onMouseLeave = function () {
      _this.onMouseMove.cancel();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseLeaveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseLeaveForAxis('y');
      }

      _this.mouseX = -1;
      _this.mouseY = -1;
    };

    this.onWindowResize = function () {
      // Recalculate scrollbarWidth in case it's a zoom
      _this.scrollbarWidth = _this.getScrollbarWidth();

      _this.hideNativeScrollbar();
    };

    this.hideScrollbars = function () {
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
        _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.y.isVisible = false;
      }

      if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
        _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.x.isVisible = false;
      }
    };

    this.onPointerEvent = function (e) {
      var isWithinTrackXBounds, isWithinTrackYBounds;
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
      } // If any pointer event is called on the scrollbar


      if (isWithinTrackXBounds || isWithinTrackYBounds) {
        // Preventing the event's default action stops text being
        // selectable during the drag.
        e.preventDefault(); // Prevent event leaking

        e.stopPropagation();

        if (e.type === 'mousedown') {
          if (isWithinTrackXBounds) {
            _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();

            if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
              _this.onDragStart(e, 'x');
            } else {
              _this.onTrackClick(e, 'x');
            }
          }

          if (isWithinTrackYBounds) {
            _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();

            if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
              _this.onDragStart(e, 'y');
            } else {
              _this.onTrackClick(e, 'y');
            }
          }
        }
      }
    };

    this.drag = function (e) {
      var eventOffset;
      var track = _this.axis[_this.draggedAxis].track;
      var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
      var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
      var contentSize = _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];
      var hostSize = parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr], 10);
      e.preventDefault();
      e.stopPropagation();

      if (_this.draggedAxis === 'y') {
        eventOffset = e.pageY;
      } else {
        eventOffset = e.pageX;
      } // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).


      var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset; // Convert the mouse position into a percentage of the scrollbar height/width.

      var dragPerc = dragPos / (trackSize - scrollbar.size); // Scroll the content by the same percentage.

      var scrollPos = dragPerc * (contentSize - hostSize); // Fix browsers inconsistency on RTL

      if (_this.draggedAxis === 'x') {
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
      }

      _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
    };

    this.onEndDrag = function (e) {
      var elDocument = getElementDocument(_this.el);
      var elWindow = getElementWindow(_this.el);
      e.preventDefault();
      e.stopPropagation();

      _this.el.classList.remove(_this.classNames.dragging);

      elDocument.removeEventListener('mousemove', _this.drag, true);
      elDocument.removeEventListener('mouseup', _this.onEndDrag, true);
      _this.removePreventClickId = elWindow.setTimeout(function () {
        // Remove these asynchronously so we still suppress click events
        // generated simultaneously with mouseup.
        elDocument.removeEventListener('click', _this.preventClick, true);
        elDocument.removeEventListener('dblclick', _this.preventClick, true);
        _this.removePreventClickId = null;
      });
    };

    this.preventClick = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };

    this.el = element;
    this.minScrollbarWidth = 20;
    this.options = Object.assign({}, SimpleBar.defaultOptions, {}, options);
    this.classNames = Object.assign({}, SimpleBar.defaultOptions.classNames, {}, this.options.classNames);
    this.axis = {
      x: {
        scrollOffsetAttr: 'scrollLeft',
        sizeAttr: 'width',
        scrollSizeAttr: 'scrollWidth',
        offsetSizeAttr: 'offsetWidth',
        offsetAttr: 'left',
        overflowAttr: 'overflowX',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      },
      y: {
        scrollOffsetAttr: 'scrollTop',
        sizeAttr: 'height',
        scrollSizeAttr: 'scrollHeight',
        offsetSizeAttr: 'offsetHeight',
        offsetAttr: 'top',
        overflowAttr: 'overflowY',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      }
    };
    this.removePreventClickId = null; // Don't re-instantiate over an existing one

    if (SimpleBar.instances.has(this.el)) {
      return;
    }

    this.recalculate = (0, _lodash.default)(this.recalculate.bind(this), 64);
    this.onMouseMove = (0, _lodash.default)(this.onMouseMove.bind(this), 64);
    this.hideScrollbars = (0, _lodash2.default)(this.hideScrollbars.bind(this), this.options.timeout);
    this.onWindowResize = (0, _lodash2.default)(this.onWindowResize.bind(this), 64, {
      leading: true
    });
    SimpleBar.getRtlHelpers = (0, _lodash3.default)(SimpleBar.getRtlHelpers);
    this.init();
  }
  /**
   * Static properties
   */

  /**
   * Helper to fix browsers inconsistency on RTL:
   *  - Firefox inverts the scrollbar initial position
   *  - IE11 inverts both scrollbar position and scrolling offset
   * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
   */


  SimpleBar.getRtlHelpers = function getRtlHelpers() {
    var dummyDiv = document.createElement('div');
    dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
    var scrollbarDummyEl = dummyDiv.firstElementChild;
    document.body.appendChild(scrollbarDummyEl);
    var dummyContainerChild = scrollbarDummyEl.firstElementChild;
    scrollbarDummyEl.scrollLeft = 0;
    var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
    var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
    scrollbarDummyEl.scrollLeft = 999;
    var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
    return {
      // determines if the scrolling is responding with negative values
      isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
      // determines if the origin scrollbar position is inverted or not (positioned on left or right)
      isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
    };
  };

  SimpleBar.getOffset = function getOffset(el) {
    var rect = el.getBoundingClientRect();
    var elDocument = getElementDocument(el);
    var elWindow = getElementWindow(el);
    return {
      top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
      left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
    };
  };

  var _proto = SimpleBar.prototype;

  _proto.init = function init() {
    // Save a reference to the instance, so we know this DOM node has already been instancied
    SimpleBar.instances.set(this.el, this); // We stop here on server-side

    if (_canUseDom.default) {
      this.initDOM();
      this.scrollbarWidth = this.getScrollbarWidth();
      this.recalculate();
      this.initListeners();
    }
  };

  _proto.initDOM = function initDOM() {
    var _this2 = this; // make sure this element doesn't have the elements yet


    if (Array.prototype.filter.call(this.el.children, function (child) {
      return child.classList.contains(_this2.classNames.wrapper);
    }).length) {
      // assume that element has his DOM already initiated
      this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
      this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper);
      this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl);
      this.offsetEl = this.el.querySelector("." + this.classNames.offset);
      this.maskEl = this.el.querySelector("." + this.classNames.mask);
      this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder);
      this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
      this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal);
      this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
    } else {
      // Prepare DOM
      this.wrapperEl = document.createElement('div');
      this.contentWrapperEl = document.createElement('div');
      this.offsetEl = document.createElement('div');
      this.maskEl = document.createElement('div');
      this.contentEl = document.createElement('div');
      this.placeholderEl = document.createElement('div');
      this.heightAutoObserverWrapperEl = document.createElement('div');
      this.heightAutoObserverEl = document.createElement('div');
      this.wrapperEl.classList.add(this.classNames.wrapper);
      this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
      this.offsetEl.classList.add(this.classNames.offset);
      this.maskEl.classList.add(this.classNames.mask);
      this.contentEl.classList.add(this.classNames.contentEl);
      this.placeholderEl.classList.add(this.classNames.placeholder);
      this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);

      while (this.el.firstChild) {
        this.contentEl.appendChild(this.el.firstChild);
      }

      this.contentWrapperEl.appendChild(this.contentEl);
      this.offsetEl.appendChild(this.contentWrapperEl);
      this.maskEl.appendChild(this.offsetEl);
      this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
      this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
      this.wrapperEl.appendChild(this.maskEl);
      this.wrapperEl.appendChild(this.placeholderEl);
      this.el.appendChild(this.wrapperEl);
    }

    if (!this.axis.x.track.el || !this.axis.y.track.el) {
      var track = document.createElement('div');
      var scrollbar = document.createElement('div');
      track.classList.add(this.classNames.track);
      scrollbar.classList.add(this.classNames.scrollbar);
      track.appendChild(scrollbar);
      this.axis.x.track.el = track.cloneNode(true);
      this.axis.x.track.el.classList.add(this.classNames.horizontal);
      this.axis.y.track.el = track.cloneNode(true);
      this.axis.y.track.el.classList.add(this.classNames.vertical);
      this.el.appendChild(this.axis.x.track.el);
      this.el.appendChild(this.axis.y.track.el);
    }

    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
    this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);

    if (!this.options.autoHide) {
      this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
      this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
    }

    this.el.setAttribute('data-simplebar', 'init');
  };

  _proto.initListeners = function initListeners() {
    var _this3 = this;

    var elWindow = getElementWindow(this.el); // Event listeners

    if (this.options.autoHide) {
      this.el.addEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, true);
    });
    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, {
        capture: true,
        passive: true
      });
    });
    this.el.addEventListener('mousemove', this.onMouseMove);
    this.el.addEventListener('mouseleave', this.onMouseLeave);
    this.contentWrapperEl.addEventListener('scroll', this.onScroll); // Browser zoom triggers a window resize

    elWindow.addEventListener('resize', this.onWindowResize); // Hack for https://github.com/WICG/ResizeObserver/issues/38

    var resizeObserverStarted = false;
    var resizeObserver = elWindow.ResizeObserver || _resizeObserverPolyfill.default;
    this.resizeObserver = new resizeObserver(function () {
      if (!resizeObserverStarted) return;

      _this3.recalculate();
    });
    this.resizeObserver.observe(this.el);
    this.resizeObserver.observe(this.contentEl);
    elWindow.requestAnimationFrame(function () {
      resizeObserverStarted = true;
    }); // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.

    this.mutationObserver = new elWindow.MutationObserver(this.recalculate);
    this.mutationObserver.observe(this.contentEl, {
      childList: true,
      subtree: true,
      characterData: true
    });
  };

  _proto.recalculate = function recalculate() {
    var elWindow = getElementWindow(this.el);
    this.elStyles = elWindow.getComputedStyle(this.el);
    this.isRtl = this.elStyles.direction === 'rtl';
    var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
    var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
    var contentElOffsetWidth = this.contentEl.offsetWidth;
    var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
    var elOverflowX = this.elStyles.overflowX;
    var elOverflowY = this.elStyles.overflowY;
    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft;
    this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
    var contentElScrollHeight = this.contentEl.scrollHeight;
    var contentElScrollWidth = this.contentEl.scrollWidth;
    this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%'; // Determine placeholder size

    this.placeholderEl.style.width = isWidthAuto ? contentElOffsetWidth + "px" : 'auto';
    this.placeholderEl.style.height = contentElScrollHeight + "px";
    var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
    this.axis.x.isOverflowing = contentElScrollWidth > contentElOffsetWidth;
    this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight; // Set isOverflowing to false if user explicitely set hidden overflow

    this.axis.x.isOverflowing = elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;
    this.axis.y.isOverflowing = elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;
    this.axis.x.forceVisible = this.options.forceVisible === 'x' || this.options.forceVisible === true;
    this.axis.y.forceVisible = this.options.forceVisible === 'y' || this.options.forceVisible === true;
    this.hideNativeScrollbar(); // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

    var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
    var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
    this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
    this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
    this.axis.x.scrollbar.size = this.getScrollbarSize('x');
    this.axis.y.scrollbar.size = this.getScrollbarSize('y');
    this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
    this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
    this.positionScrollbar('x');
    this.positionScrollbar('y');
    this.toggleTrackVisibility('x');
    this.toggleTrackVisibility('y');
  }
  /**
   * Calculate scrollbar size
   */
  ;

  _proto.getScrollbarSize = function getScrollbarSize(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.axis[axis].isOverflowing) {
      return 0;
    }

    var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
    var scrollbarSize;
    var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

    scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

    if (this.options.scrollbarMaxSize) {
      scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
    }

    return scrollbarSize;
  };

  _proto.positionScrollbar = function positionScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.axis[axis].isOverflowing) {
      return;
    }

    var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrollbar = this.axis[axis].scrollbar;
    var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    scrollOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
    var scrollPourcent = scrollOffset / (contentSize - hostSize);
    var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
    handleOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
    scrollbar.el.style.transform = axis === 'x' ? "translate3d(" + handleOffset + "px, 0, 0)" : "translate3d(0, " + handleOffset + "px, 0)";
  };

  _proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var track = this.axis[axis].track.el;
    var scrollbar = this.axis[axis].scrollbar.el;

    if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
      track.style.visibility = 'visible';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
    } else {
      track.style.visibility = 'hidden';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
    } // Even if forceVisible is enabled, scrollbar itself should be hidden


    if (this.axis[axis].isOverflowing) {
      scrollbar.style.display = 'block';
    } else {
      scrollbar.style.display = 'none';
    }
  };

  _proto.hideNativeScrollbar = function hideNativeScrollbar() {
    this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
    this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
  }
  /**
   * On scroll event handling
   */
  ;

  _proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);

    if (isWithinScrollbarBoundsX) {
      this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
    }

    if (this.isWithinBounds(this.axis[axis].track.rect)) {
      this.showScrollbar(axis);
      this.axis[axis].track.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].track.el.classList.remove(this.classNames.hover);
    }
  };

  _proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.el.classList.remove(this.classNames.hover);
    this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
  };
  /**
   * Show scrollbar
   */


  _proto.showScrollbar = function showScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var scrollbar = this.axis[axis].scrollbar.el;

    if (!this.axis[axis].isVisible) {
      scrollbar.classList.add(this.classNames.visible);
      this.axis[axis].isVisible = true;
    }

    if (this.options.autoHide) {
      this.hideScrollbars();
    }
  }
  /**
   * Hide Scrollbar
   */
  ;
  /**
   * on scrollbar handle drag movement starts
   */


  _proto.onDragStart = function onDragStart(e, axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var elDocument = getElementDocument(this.el);
    var elWindow = getElementWindow(this.el);
    var scrollbar = this.axis[axis].scrollbar; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

    var eventOffset = axis === 'y' ? e.pageY : e.pageX;
    this.axis[axis].dragOffset = eventOffset - scrollbar.rect[this.axis[axis].offsetAttr];
    this.draggedAxis = axis;
    this.el.classList.add(this.classNames.dragging);
    elDocument.addEventListener('mousemove', this.drag, true);
    elDocument.addEventListener('mouseup', this.onEndDrag, true);

    if (this.removePreventClickId === null) {
      elDocument.addEventListener('click', this.preventClick, true);
      elDocument.addEventListener('dblclick', this.preventClick, true);
    } else {
      elWindow.clearTimeout(this.removePreventClickId);
      this.removePreventClickId = null;
    }
  }
  /**
   * Drag scrollbar handle
   */
  ;

  _proto.onTrackClick = function onTrackClick(e, axis) {
    var _this4 = this;

    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.options.clickOnTrack) return;
    var elWindow = getElementWindow(this.el);
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var scrollbar = this.axis[axis].scrollbar;
    var scrollbarOffset = scrollbar.rect[this.axis[axis].offsetAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    var t = axis === 'y' ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
    var dir = t < 0 ? -1 : 1;
    var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;

    var scrollTo = function scrollTo() {
      if (dir === -1) {
        if (scrolled > scrollSize) {
          var _this4$contentWrapper;

          scrolled -= _this4.options.clickOnTrackSpeed;

          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper = {}, _this4$contentWrapper[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper));

          elWindow.requestAnimationFrame(scrollTo);
        }
      } else {
        if (scrolled < scrollSize) {
          var _this4$contentWrapper2;

          scrolled += _this4.options.clickOnTrackSpeed;

          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper2 = {}, _this4$contentWrapper2[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper2));

          elWindow.requestAnimationFrame(scrollTo);
        }
      }
    };

    scrollTo();
  }
  /**
   * Getter for content element
   */
  ;

  _proto.getContentElement = function getContentElement() {
    return this.contentEl;
  }
  /**
   * Getter for original scrolling element
   */
  ;

  _proto.getScrollElement = function getScrollElement() {
    return this.contentWrapperEl;
  };

  _proto.getScrollbarWidth = function getScrollbarWidth() {
    // Try/catch for FF 56 throwing on undefined computedStyles
    try {
      // Detect browsers supporting CSS scrollbar styling and do not calculate
      if (getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display === 'none' || 'scrollbarWidth' in document.documentElement.style || '-ms-overflow-style' in document.documentElement.style) {
        return 0;
      } else {
        return scrollbarWidth();
      }
    } catch (e) {
      return scrollbarWidth();
    }
  };

  _proto.removeListeners = function removeListeners() {
    var _this5 = this;

    var elWindow = getElementWindow(this.el); // Event listeners

    if (this.options.autoHide) {
      this.el.removeEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
      _this5.el.removeEventListener(e, _this5.onPointerEvent, true);
    });
    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this5.el.removeEventListener(e, _this5.onPointerEvent, {
        capture: true,
        passive: true
      });
    });
    this.el.removeEventListener('mousemove', this.onMouseMove);
    this.el.removeEventListener('mouseleave', this.onMouseLeave);

    if (this.contentWrapperEl) {
      this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
    }

    elWindow.removeEventListener('resize', this.onWindowResize);

    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    } // Cancel all debounced functions


    this.recalculate.cancel();
    this.onMouseMove.cancel();
    this.hideScrollbars.cancel();
    this.onWindowResize.cancel();
  }
  /**
   * UnMount mutation observer and delete SimpleBar instance from DOM element
   */
  ;

  _proto.unMount = function unMount() {
    this.removeListeners();
    SimpleBar.instances.delete(this.el);
  }
  /**
   * Check if mouse is within bounds
   */
  ;

  _proto.isWithinBounds = function isWithinBounds(bbox) {
    return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
  }
  /**
   * Find element children matches query
   */
  ;

  _proto.findChild = function findChild(el, query) {
    var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    return Array.prototype.filter.call(el.children, function (child) {
      return matches.call(child, query);
    })[0];
  };

  return SimpleBar;
}();

SimpleBar.defaultOptions = {
  autoHide: true,
  forceVisible: false,
  clickOnTrack: true,
  clickOnTrackSpeed: 40,
  classNames: {
    contentEl: 'simplebar-content',
    contentWrapper: 'simplebar-content-wrapper',
    offset: 'simplebar-offset',
    mask: 'simplebar-mask',
    wrapper: 'simplebar-wrapper',
    placeholder: 'simplebar-placeholder',
    scrollbar: 'simplebar-scrollbar',
    track: 'simplebar-track',
    heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
    heightAutoObserverEl: 'simplebar-height-auto-observer',
    visible: 'simplebar-visible',
    horizontal: 'simplebar-horizontal',
    vertical: 'simplebar-vertical',
    hover: 'simplebar-hover',
    dragging: 'simplebar-dragging'
  },
  scrollbarMinSize: 25,
  scrollbarMaxSize: 0,
  timeout: 1000
};
SimpleBar.instances = new WeakMap();

SimpleBar.initDOMLoadedElements = function () {
  document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);
  window.removeEventListener('load', this.initDOMLoadedElements);
  Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (el) {
    if (el.getAttribute('data-simplebar') !== 'init' && !SimpleBar.instances.has(el)) new SimpleBar(el, getOptions(el.attributes));
  });
};

SimpleBar.removeObserver = function () {
  this.globalObserver.disconnect();
};

SimpleBar.initHtmlApi = function () {
  this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this); // MutationObserver is IE11+

  if (typeof MutationObserver !== 'undefined') {
    // Mutation observer to observe dynamically added elements
    this.globalObserver = new MutationObserver(SimpleBar.handleMutations);
    this.globalObserver.observe(document, {
      childList: true,
      subtree: true
    });
  } // Taken from jQuery `ready` function
  // Instantiate elements already present on the page


  if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay init
    window.setTimeout(this.initDOMLoadedElements);
  } else {
    document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);
    window.addEventListener('load', this.initDOMLoadedElements);
  }
};

SimpleBar.handleMutations = function (mutations) {
  mutations.forEach(function (mutation) {
    Array.prototype.forEach.call(mutation.addedNodes, function (addedNode) {
      if (addedNode.nodeType === 1) {
        if (addedNode.hasAttribute('data-simplebar')) {
          !SimpleBar.instances.has(addedNode) && new SimpleBar(addedNode, getOptions(addedNode.attributes));
        } else {
          Array.prototype.forEach.call(addedNode.querySelectorAll('[data-simplebar]'), function (el) {
            if (el.getAttribute('data-simplebar') !== 'init' && !SimpleBar.instances.has(el)) new SimpleBar(el, getOptions(el.attributes));
          });
        }
      }
    });
    Array.prototype.forEach.call(mutation.removedNodes, function (removedNode) {
      if (removedNode.nodeType === 1) {
        if (removedNode.hasAttribute('[data-simplebar="init"]')) {
          SimpleBar.instances.has(removedNode) && SimpleBar.instances.get(removedNode).unMount();
        } else {
          Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function (el) {
            SimpleBar.instances.has(el) && SimpleBar.instances.get(el).unMount();
          });
        }
      }
    });
  });
};

SimpleBar.getOptions = getOptions;
/**
 * HTML API
 * Called only in a browser env.
 */

if (_canUseDom.default) {
  SimpleBar.initHtmlApi();
}

var _default = SimpleBar;
exports.default = _default;
},{"core-js/modules/es.array.for-each":"node_modules/simplebar/node_modules/core-js/modules/es.array.for-each.js","core-js/modules/web.dom-collections.for-each":"node_modules/simplebar/node_modules/core-js/modules/web.dom-collections.for-each.js","can-use-dom":"node_modules/can-use-dom/index.js","core-js/modules/es.array.filter":"node_modules/simplebar/node_modules/core-js/modules/es.array.filter.js","core-js/modules/es.array.iterator":"node_modules/simplebar/node_modules/core-js/modules/es.array.iterator.js","core-js/modules/es.object.assign":"node_modules/simplebar/node_modules/core-js/modules/es.object.assign.js","core-js/modules/es.object.to-string":"node_modules/simplebar/node_modules/core-js/modules/es.object.to-string.js","core-js/modules/es.parse-int":"node_modules/simplebar/node_modules/core-js/modules/es.parse-int.js","core-js/modules/es.string.iterator":"node_modules/simplebar/node_modules/core-js/modules/es.string.iterator.js","core-js/modules/es.weak-map":"node_modules/simplebar/node_modules/core-js/modules/es.weak-map.js","core-js/modules/web.dom-collections.iterator":"node_modules/simplebar/node_modules/core-js/modules/web.dom-collections.iterator.js","lodash.throttle":"node_modules/lodash.throttle/index.js","lodash.debounce":"node_modules/lodash.debounce/index.js","lodash.memoize":"node_modules/lodash.memoize/index.js","resize-observer-polyfill":"node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js","core-js/modules/es.array.reduce":"node_modules/simplebar/node_modules/core-js/modules/es.array.reduce.js","core-js/modules/es.function.name":"node_modules/simplebar/node_modules/core-js/modules/es.function.name.js","core-js/modules/es.regexp.exec":"node_modules/simplebar/node_modules/core-js/modules/es.regexp.exec.js","core-js/modules/es.string.match":"node_modules/simplebar/node_modules/core-js/modules/es.string.match.js","core-js/modules/es.string.replace":"node_modules/simplebar/node_modules/core-js/modules/es.string.replace.js"}],"src/navigation.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var simplebar_1 = __importDefault(require("simplebar"));

function createFormTemplate(nameId, host) {
  var templateElement = document.getElementById(nameId);
  var hostElement = document.getElementById(host);
  var importedNode = document.importNode(templateElement.content, true);
  var element = importedNode.firstElementChild;
  hostElement.insertAdjacentElement("afterbegin", element);
}

function handleClick(oldElem, newElem) {
  oldElem.style.display = "none";
  oldElem.style.opacity = "0";
  newElem.style.display = "block";
  setTimeout(function () {
    newElem.style.opacity = "1";
  }, 10);
}

function boardFromTemplate(num) {
  for (var i = num; i > 0; i--) {
    createFormTemplate("board-map", "board-container");
    var board = document.querySelector(".board__map");
    board.id = "board" + i;
    board.innerHTML = board.innerHTML.replace(/\{\{locationId\}\}/g, "" + i);
    i === 1 && board.classList.toggle("activeBoard");
  }
}

function navigationInit() {
  createFormTemplate("home-page", "app");
  createFormTemplate("menu-page", "app");
  createFormTemplate("game-board", "app");
  boardFromTemplate(3);
}

function navigationActions() {
  var home = document.querySelector(".home-container");
  var menu = document.querySelector(".menu-container");
  var board = document.querySelector(".game-container");
  var startBtn = document.querySelector("#startBtn");
  var newGameBtn = document.querySelector("#newGameBtn");
  var homeBackBtn = document.querySelector("#homeBack");
  var continueBtn = document.querySelector("#continueBtn");
  startBtn.addEventListener("click", function () {
    handleClick(home, menu);

    if (localStorage.getItem("state") === null) {
      continueBtn.classList.add("continue__denied");
    } else {
      continueBtn.classList.remove("continue__denied");
    }
  });
  continueBtn.addEventListener("click", function () {
    handleClick(menu, board);
  });
  newGameBtn.addEventListener("click", function () {
    handleClick(menu, board);
  });
  homeBackBtn.addEventListener("click", function () {
    handleClick(board, home);
  });
  document.addEventListener("click", function (e) {
    if (e.target.id === "ending__close" || e.target === document.querySelector(".ending__modal")) {
      handleClick(board, home);
      document.querySelector(".ending__modal").style.display = "none";
    }
  });
}

function menuInfo() {
  var about = document.querySelector(".menu__info--about");
  var authors = document.querySelector(".menu__info--authors");
  var guide = document.querySelector(".menu__info--guide");
  var btn = document.querySelectorAll(".menu__info--btn");
  new simplebar_1.default(guide, {
    autoHide: false,
    background: "red"
  });
  btn.forEach(function (elem) {
    elem.addEventListener("click", function (_a) {
      var target = _a.target;
      btn.forEach(function (e) {
        e.classList.remove("active");
      });
      elem.classList.toggle("active");

      switch (target.innerText) {
        case "Authors":
          guide.style.display = "none";
          about.style.display = "none";
          authors.style.display = "block";
          break;

        case "Game guide":
          authors.style.display = "none";
          about.style.display = "none";
          guide.style.display = "block";
          break;

        case "About game":
          authors.style.display = "none";
          guide.style.display = "none";
          about.style.display = "block";
          break;

        default:
          "error";
      }
    });
  });
}

function navigation() {
  navigationInit();
  navigationActions();
  menuInfo();
}

exports.default = navigation;
},{"simplebar":"node_modules/simplebar/dist/simplebar.esm.js"}],"src/newGame.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initNewGame = void 0;

var state_1 = require("./state");

var updateDOM = __importStar(require("./updateDOM"));

var data_1 = require("./data");

var getLS = __importStar(require("./getLS"));

var ENUM_1 = require("./ENUM");

var updateLS = __importStar(require("./updateLS"));

var initNewGame = function initNewGame() {
  updateLS.updateStateLS(new state_1.GameState());
  var state = getLS.getStateLS();
  updateLS.updatePuzzleLS(data_1.puzzleArrayMain);
  var puzzleArray = getLS.getPuzzleLS();
  var fields = document.querySelectorAll('.map__square');

  for (var i = 0; i < fields.length; i++) {
    if (fields[i].classList.contains('map__squareVisited')) {
      fields[i].classList.remove('map__squareVisited');
    }
  }

  data_1.boardAreas.forEach(function (e) {
    e.status = ENUM_1.BoardState.PENDING;
  });
  var currentBoard = document.querySelector(".activeBoard");
  var nextBoard = document.querySelector("#board" + 1);
  currentBoard.classList.toggle("activeBoard");
  nextBoard.classList.toggle("activeBoard");
  updateDOM.updateStoryLine();
  updateDOM.initStoryBook();
  updateDOM.updateActionDOM(state.actionNumbers);
  updateDOM.updateEvidencesDOM();
  updateDOM.updatePuzzleDOM(state, puzzleArray);
  updateDOM.updateProgressDOM();
};

exports.initNewGame = initNewGame;
},{"./state":"src/state.ts","./updateDOM":"src/updateDOM.ts","./data":"src/data.ts","./getLS":"src/getLS.ts","./ENUM":"src/ENUM.ts","./updateLS":"src/updateLS.ts"}],"src/continue.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onLoadUpdate = void 0;

var updateDOM = __importStar(require("./updateDOM"));

var getLS = __importStar(require("./getLS"));

var updateLS_1 = require("./updateLS");

var onLoadUpdate = function onLoadUpdate() {
  if (localStorage.getItem('state') !== null) {
    var state = getLS.getStateLS();
    state.currentPageChange(state.currentPage);
    var currentBoard = document.querySelector(".activeBoard");
    var nextBoard = document.querySelector("#board" + state.userLocationId);
    currentBoard.classList.toggle("activeBoard");
    nextBoard.classList.toggle("activeBoard");
    updateLS_1.updateStateLS(state);

    if (state.currentPage === 0) {
      updateDOM.initStoryBook();
    } else {
      updateDOM.updateStoryBook();
    }

    updateDOM.updateStoryLine();
    updateDOM.updateAreaDOM(state);
    updateDOM.updateActionDOM(state.actionNumbers);
    updateDOM.updateEvidencesDOM();
    updateDOM.updatePuzzleDOM(state, getLS.getPuzzleLS());
    updateDOM.updateProgressDOM();
    updateLS_1.updateStateLS(state);
  }
};

exports.onLoadUpdate = onLoadUpdate;
},{"./updateDOM":"src/updateDOM.ts","./getLS":"src/getLS.ts","./updateLS":"src/updateLS.ts"}],"src/goNext.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextLocation = void 0;

var updateDOM = __importStar(require("./updateDOM"));

var getLS = __importStar(require("./getLS"));

var state_1 = require("./state");

var updateLS_1 = require("./updateLS");

var nextLocation = function nextLocation(id) {
  var stateTemp = getLS.getStateLS();
  var paragraphArray = stateTemp.userParagraphsId;
  var evidencesArray = stateTemp.userEvidencesId;
  var storyBookArray = stateTemp.storyBook;
  var storyLine = stateTemp.storyline;
  var storylineID = stateTemp.storylineID;
  updateLS_1.updateStateLS(new state_1.GameState());
  var state = getLS.getStateLS();
  paragraphArray.forEach(function (e) {
    state.addParagraphsId(e);
  });
  evidencesArray.forEach(function (e) {
    state.addEvidencesId(e);
  });
  storyLine.forEach(function (e) {
    state.addStoryLine(e);
  });
  state.addStoryLineID(storylineID);
  state.addStoryBook(storyBookArray);
  state.currentPageChange(stateTemp.currentPage);
  state.userLocationId = ++id;
  updateLS_1.updateStateLS(state);
  updateDOM.updateStoryLine();
  updateDOM.updateStoryBook();
  updateDOM.updateActionDOM(state.actionNumbers);
  updateDOM.updateEvidencesDOM();
  updateDOM.updatePuzzleDOM(state, getLS.getPuzzleLS());
  updateDOM.updateProgressDOM();
};

exports.nextLocation = nextLocation;
},{"./updateDOM":"src/updateDOM.ts","./getLS":"src/getLS.ts","./state":"src/state.ts","./updateLS":"src/updateLS.ts"}],"src/ending.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEndingStory = void 0;

var getLS_1 = require("./getLS");

var readContent_1 = require("./readContent");

var getEndingStory = function getEndingStory() {
  var endingText = '';
  var state = getLS_1.getStateLS();
  var numberOfEvidences = state.userEvidencesId.length;
  var numberOfChoices = state.storylineID;

  switch (numberOfChoices) {
    case 0:
      switch (true) {
        case numberOfEvidences <= 1:
          endingText = "Finally you were able to find that poor girl. Unfortunately you found her dead. The murderer has to know about your presence in the house. Immediately you realize that you are in danger, if you only had a gun. You haven\u2019t even finished your thought when you felt excruciating pain on back of your head, he got you. Everything became blurry and you slowly fell to the ground. This is the end, you weren't even able to save yourself and the perpetrator went unpunished.";
          break;

        case numberOfEvidences >= 2:
          endingText = "Finally you were able to find that poor girl. Unfortunately you found her dead. The murderer has to know about your presence in the house, but he wasn\u2019t quick enough. You managed to capture and send him to the police hands. At last you stopped him, but at what cost.";
          break;
      }

      break;

    case 1:
      switch (true) {
        case numberOfEvidences === 0:
          endingText = "Finally you were able to find that poor girl. Unfortunately you found her dead. The murderer has to know about your presence in the house. Immediately you realize that you are in danger. Murderer came up behind you and you started to fight. You were very stressed and clearly in trouble. Everything happened so fast, in one second you delivered the final blow. Murderer fell dead, you were happy. Then you noticed blood, it\u2019s coming out of your head, perpetrator didn\u2019t give up without a fight, all you can do right now is wait, wait for peace to come.";
          break;

        case numberOfEvidences === 1:
          endingText = "Finally you were able to find that poor girl. Unfortunately you found her dead. The murderer has to know about your presence in the house. Immediately you realize that you are in danger. Murderer came up behind you and you started to fight. You were very stressed and clearly in trouble. Everything happened so fast, suddenly everything become blurry, \u201CI\u2019m dying\u201D \u2013 you thought. You fell on the ground but with a smile, you knew that the police will be on place at any moment to capture him, he won\u2019t get away with that. ";
          break;

        case numberOfEvidences >= 2:
          endingText = "Finally you were able to find that poor girl. She was still alive. You immediately approached them and started a fight with the murderer, everything happened so fast. You were trying to fight back, but to no avail. He beat you. You felt your life was slipping away. But you were happy, you completed your mission, you saved that girl, and knew that the police will be in any second on the place to capture him. So after all, you win.";
          break;
      }

      break;

    case 2:
      switch (true) {
        case numberOfEvidences <= 1:
          endingText = "Finally you were able to find that poor girl. She was still alive. You immediately approached them and started a fight with the murderer. You were trying to hold him as long as you can, but unfortunately he was much stronger, and he has managed to escape. Mission complete, you did save that girl, but how many lives will he take, until we finally capture him?";
          break;

        case numberOfEvidences >= 2:
          endingText = "Finally you were able to find that poor girl. She was still alive. You immediately approached them and started a fight with the murderer. Successfully you manage to overthrow him, he lost consciousness. You approach the crying girl and try to reassure her that everything is fine. It\u2019s done, all you have to do now is wait for the police to come.";
          break;
      }

      break;

    default:
      endingText = 'Something went wrong, reset the game.';
  }

  readContent_1.endingStory(endingText);
  localStorage.clear();
};

exports.getEndingStory = getEndingStory;
},{"./getLS":"src/getLS.ts","./readContent":"src/readContent.ts"}],"src/choose.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.choose = void 0;

var updateLS_1 = require("./updateLS");

var updateDOM_1 = require("./updateDOM");

var choose = function choose(value, state) {
  switch (value) {
    case 'l1c0':
      state.addStoryLine('Old oil lamp, I hope I can make use of that');
      break;

    case 'l1c1':
      state.addStoryLine("I don't know if I am going to use this weapon, but for sure I'm feeling much more safer with it");
      break;

    case 'l2c1':
      state.addStoryLine("I have to keep my head cool, I don't know what to expect down here");
      break;

    case 'l2c0':
      state.addStoryLine("I have to hurry! Hope that I won't make much noise");
      break;
  }

  var charArr = Object.assign([], value);
  state.addStoryLineID(parseInt(charArr[3], 10));
  updateLS_1.updateStateLS(state);
  updateDOM_1.updateStoryLine();
};

exports.choose = choose;
},{"./updateLS":"src/updateLS.ts","./updateDOM":"src/updateDOM.ts"}],"src/index.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var data = __importStar(require("./data"));

var boardAction = __importStar(require("./board"));

var puzzleAction_1 = require("./puzzleAction");

var readContent = __importStar(require("./readContent"));

var navigation_1 = __importDefault(require("./navigation"));

var updateDOM = __importStar(require("./updateDOM"));

var newGame_1 = require("./newGame");

var continue_1 = require("./continue");

var getLS = __importStar(require("./getLS"));

var goNext_1 = require("./goNext");

var updateLS_1 = require("./updateLS");

var ending_1 = require("./ending");

var choose_1 = require("./choose");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("map__square")) {
    var state = getLS.getStateLS();
    var areaID = e.target.id;
    var currentField = boardAction.getBoard(areaID, data.boardAreas);

    if (boardAction.checkStatus(currentField, state)) {
      readContent.areaExplored();
      return;
    }

    if (!boardAction.checkActions(state)) {
      readContent.notEnoughPoints();
      return;
    }

    var puzzleArrayMain = getLS.getPuzzleLS();
    boardAction.mainAction(areaID, currentField, data.paragraphsArray, data.puzzleCardArray, puzzleArrayMain);
  }
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("interface__puzzle__container")) {
    var puzzleArray = getLS.getPuzzleLS();
    var puzzleID = e.target.id;
    document.querySelector(".puzzle").style.display = "block";
    updateDOM.solvePuzzleModal(puzzleID, puzzleArray, data.puzzleCardArray);
  } else if (e.target.classList.contains("puzzle__solve__submit")) {
    var puzzleArray = getLS.getPuzzleLS();
    var puzzleID = e.target.id;
    puzzleAction_1.solvePuzzle(puzzleID, puzzleArray, data.paragraphsArray);
  }
});
document.addEventListener("click", function (e) {
  var puzzleCnt = document.querySelector(".puzzle");

  if (e.target.id === "puzzle__close" || puzzleCnt === e.target) {
    puzzleCnt.style.display = "none";
  }
});
document.addEventListener("click", function (e) {
  var paragraphCnt = document.querySelector(".paragraph");

  if (e.target.id === "paragraph__close" || paragraphCnt === e.target) {
    paragraphCnt.style.display = "none";
  }
});
document.addEventListener("click", function (e) {
  if (e.target.className === "board__storybook__arrowLeft" || e.target.className === "fas fa-reply") {
    var state = getLS.getStateLS();
    state.previousStoryBookPage();
    updateLS_1.updateStateLS(state);
    updateDOM.updateStoryBook();
  } else if (e.target.className === "board__storybook__arrowRight" || e.target.className === "fas fa-share") {
    var state = getLS.getStateLS();
    state.nextStoryBookPage();
    updateLS_1.updateStateLS(state);
    updateDOM.updateStoryBook();
  }
});
document.addEventListener("click", function (e) {
  if (e.target.id === "displayInstruction") {
    document.querySelector(".instructionModal").style.display = "block";
  }

  if (e.target.id === "instruction__close" || document.querySelector(".instructionModal") === e.target) {
    document.querySelector(".instructionModal").style.display = "none";
  }
});
document.addEventListener("click", function (e) {
  if (e.target.id === "interface__stressCard" || e.target.id === "interface__stressCard__title") {
    var state = getLS.getStateLS();
    boardAction.stressCardAction(state, data.stressParagraphs);
  }
});
document.addEventListener("click", function (e) {
  if (e.target.id === "noPoints__close" || e.target === document.querySelector(".noPoints__modal")) {
    document.querySelector(".noPoints__modal").style.display = "none";
  }
});
document.addEventListener("click", function (e) {
  if (e.target.id === "areaExplored__close" || e.target === document.querySelector(".areaExplored__modal")) {
    document.querySelector(".areaExplored__modal").style.display = "none";
  }
});
document.addEventListener("click", function (e) {
  if (/goNext/.test(e.target.className)) {
    var state = getLS.getStateLS();

    if (state.progressPoints === 2) {
      if (state.userLocationId !== 3) {
        switch (state.userLocationId) {
          case 1:
            document.querySelector('#first__choose').style.display = 'block';
            break;

          case 2:
            document.querySelector('#second__choose').style.display = 'block';
            break;
        }
      } else {
        ending_1.getEndingStory();
      }
    } else {
      readContent.readNotEnughPR();
    }
  }
});
document.addEventListener('click', function (e) {
  if (e.target.className === 'choose') {
    var state = getLS.getStateLS();
    choose_1.choose(e.target.value, state);
    e.target.parentElement.parentElement.parentElement.style.display = 'none';
    var currentBoard = document.querySelector(".activeBoard");
    var currentId = parseInt(currentBoard.id.toString().match(/\d/)[0]);
    var nextBoard = document.querySelector("#board" + (state.userLocationId + 1));
    currentBoard.classList.toggle("activeBoard");
    nextBoard.classList.toggle("activeBoard");
    goNext_1.nextLocation(currentId);
  }
});
document.addEventListener("click", function (e) {
  if (e.target === document.querySelector("#newGameBtn") || e.target === document.querySelector("#resetGame")) {
    newGame_1.initNewGame();
  }
});
document.addEventListener("click", function (e) {
  if (e.target === document.querySelector("#continueBtn")) {
    continue_1.onLoadUpdate();
  }
});
window.onload = continue_1.onLoadUpdate;
navigation_1.default();
},{"./data":"src/data.ts","./board":"src/board.ts","./puzzleAction":"src/puzzleAction.ts","./readContent":"src/readContent.ts","./navigation":"src/navigation.ts","./updateDOM":"src/updateDOM.ts","./newGame":"src/newGame.ts","./continue":"src/continue.ts","./getLS":"src/getLS.ts","./goNext":"src/goNext.ts","./updateLS":"src/updateLS.ts","./ending":"src/ending.ts","./choose":"src/choose.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51860" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map