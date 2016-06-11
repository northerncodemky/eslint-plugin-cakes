# eslint-plugin-cakes

Provides an ESLint environment for working with Cakes BDD specs

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-cakes`:

```
$ npm install eslint-plugin-cakes --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-cakes` globally.

## Usage

Add `cakes` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "cakes"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "cakes/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





