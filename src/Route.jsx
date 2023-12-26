import { useEffect, useState } from "react";
import { EVENTS } from "./assets/const";
import {match} from 'path-to-regexp'
export function Router({
    routes = [],
    defaultComponent: DefaultComponent = () => <h1>404</h1>,
  }) {
    const [currentPath, setCurrentePath] = useState(window.location.pathname);
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentePath(window.location.pathname);
      };
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onlanguagechange);
      };
    }, []);

    let routeParams = {}

    const Page = routes.find(({ path }) => {
    if(path === currentPath) return true
     const matcherUrl= match(path,{decode:decodeURIComponent})
     const matched = matcherUrl(currentPath)
     if(!matched)return false
     routeParams = matched.params
     return true
    })?.element;
    return Page ? <Page routeParams={routeParams}/> : <DefaultComponent routeParams={routeParams}/>;
  }