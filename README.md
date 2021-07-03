# Electron, Vue, Bootstrap and Bootstrap-vue boilerplate

This is a desktop application built with
<a href="https://www.electronjs.org/">Electron</a>,
<a href="https://vuejs.org/">Vue 2</a>,
<a href="https://getbootstrap.com/">Bootstrap</a> and
<a href="https://bootstrap-vue.org">BootstrapVue</a>.

It includes a secure bridged api endpoint as a starting point for providing integrations
without exposing user data, e.g. API_KEYS, to 'world facing' render processes.
See <a href="https://www.electronjs.org/docs/tutorial/process-model">Electron's process model</a>
and
<a href="https://www.electronjs.org/docs/api/ipc-main">Electron's inter process communication</a>

Built using node: v16.4.0 (installed via Brew on a Mac)

Clone this repo and `rm -r .git` from it to use it as quick start for your own application.

```sh
npm install
npm run build
npm start
```
