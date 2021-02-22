# Reproduction for adding new css import not resulting in styles being updated

## Steps

1. Install deps (`npm install` / `yarn`)
2. Run `npm run start` / `yarn start`
3. Open browser at url printed by `webpack-dev-server` in terminal
4. Uncomment line 2 in `index.js` (`// import "./second.css";`)
5. Styles are not applied (font-size should increase)
6. Re-save `second.css` (even without making any changes) - styles finally get hot-applied.
