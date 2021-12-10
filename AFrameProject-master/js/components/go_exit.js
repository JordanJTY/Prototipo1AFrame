AFRAME.registerComponent('go-exit', {
    schema: {
        exit: { type: 'string' },
    },

    init: function () {
        // Do something when component first attached.
        const el = this.el;
        document.getElementById("my-box").onclick = function () {
            location.href = "index.html";
        };
    },

    update: function () {
        // Do something when component's data is updated.
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    }
});