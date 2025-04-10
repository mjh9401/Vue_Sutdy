const { rules } = require("eslint-plugin-vue");

module.exports={
    env: {
        browser : true,
        node : true
    },
    extends: [
        // vue
        //'plugin:vue/vue3-essentail', // LV1
        "plugin:vue/recommended", // LV2
        //'plugin:vue/vue3-recommended', // LV#
        // js
        "eslint:recommended"
    ],
    parserOptions : {
        parser: 'babel-eslint',
    },
    rules : {
        "vue/html-closing-bracket-newline": ["error",{
                "singleline": "never",
                "multiline": "never",
        }],
        "vue/html-self-closing": ["error", {
            "html": {
            "void": "always",
            "normal": "never",
            "component": "always"
            },
            "svg": "always",
            "math": "always"
        }]       
    }
}