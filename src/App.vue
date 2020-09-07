<template>
  <div id="app">
    <div class="long-date">
      {{ i18n.d(new Date(), "long") }}
    </div>
    <h2>
      {{ i18n.t("welcome") }}
    </h2>
    <LocaleSelector
      :availableLocales="availableLocales"
      @clicked="onLocaleClicked"
    />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { MutationType, StoreModuleNames } from "@/models/store";
import { store } from "@/store";
import { LocaleInfoInterface } from "@/models/localization/LocaleInfo.interface";
import LocaleSelector from "@/components/locale-selector/LocaleSelector.component.vue";

export default defineComponent({
  name: "App",
  components: {
    LocaleSelector,
  },
  setup() {
    const i18n = useI18n();

    const availableLocales = computed(() => {
      return store.state.localesState.availableLocales;
    });
    // not sure why the TS type causes strange error
    // const onLocaleClicked = (localeInfo: LocaleInfoInterface) => {
    const onLocaleClicked = (localeInfo) => {
      store.dispatch(
        `${StoreModuleNames.localesState}/${MutationType.locales.selectLocale}`,
        localeInfo
      );
    };
    return {
      i18n,
      availableLocales,
      onLocaleClicked,
    };
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
