<template>
  <div id="subapp-viewport"></div>
</template>

<script>
import microApps from "./micro-apps";

export default {
  name: "App",
  data() {
    return {
      microApps,
      current: "/reactapp",
    };
  },
  methods: {
    // Binds the current path to the current Path in the main shell
    bindCurrent() {
      const path = window.location.pathname;
      if (this.microApps.findIndex((item) => item.activeRule === path) >= 0) {
        this.current = path;
      }
    },
    // Will listen to any router changes
    listenRouterChange() {
      const _wr = function (type) {
        const orig = history[type];
        return function () {
          const rv = orig.apply(this, arguments);
          const e = new Event(type);
          e.arguments = arguments;
          window.dispatchEvent(e);
          return rv;
        };
      };
      history.pushState = _wr("pushState");

      // will listen when navigating to another micro application
      window.addEventListener("pushState", this.bindCurrent);
      window.addEventListener("popstate", this.bindCurrent);

      this.$once("hook:beforeDestroy", () => {
        window.removeEventListener("pushState", this.bindCurrent);
        window.removeEventListener("popstate", this.bindCurrent);
      });
    },
  },
  created() {
    this.bindCurrent();
  },
  mounted() {
    this.listenRouterChange();
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0 !important;
  padding: 0;
}
</style>
