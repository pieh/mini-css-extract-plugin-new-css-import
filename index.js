import "./first.css";
// import "./second.css";

console.log("hello");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
