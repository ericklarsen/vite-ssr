import { Route, Switch } from "react-router-dom";

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.globEager("./pages/*.jsx");

console.log(pages)

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: pages[path].default,
  };
});

export function App() {
  return (
    <Switch>
      {routes.map(({ path, component: RouteComp }) => {
        return (
          <Route key={path} path={path}>
            <RouteComp />
          </Route>
        );
      })}
    </Switch>
  );
}
