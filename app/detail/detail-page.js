import {Frame, Observable, ObservableArray} from "@nativescript/core";

var book;
export function onLoaded(args)
{
  var page = args.object;
  var index = page.navigationContext.index;

  book = page.navigationContext.model;
  
  page.bindingContext = book.pages.getItem(index);
}

export function onTap(args)
{
  let page = args.object;
  Frame.topmost().navigate({
    moduleName: "./home/home-page",
    context: {model:book}
  });
}