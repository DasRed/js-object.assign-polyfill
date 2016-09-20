'use strict';

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return root.Object.assign = factory(root.Object);
        });

    } else if (typeof exports !== 'undefined') {
        root.Object.assign = factory(root.Object);

    } else {
        root.Object.assign = factory(root.Object);
    }
}(this, function (Object) {
    if (Object.assign !== undefined) {
        return Object.assign;
    }

    return function (target) {
        if (target == null || target === undefined) {
            target = {};
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}));
