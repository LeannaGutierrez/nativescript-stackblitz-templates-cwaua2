import {ObservableArray, fromObject, Observable , Frame} from "@nativescript/core";

function studentModel()
{
  var model = new Observable();
  model.type = ["HW", "Quiz", "Test", "Project", "Presentation", "Exam"];
  model.calcPoints = function(score, max)
  {
    if (score >= max){
      console.log("Error");
    }
    else 
    {
      return 0;
    } 
  }
  return model;
}

export function onLoaded(args)
{
  var page = args.object;
  var studentList;
  if (page.navigationContext != null)
  {
    studentList = page.navigationContext.model;
  }
  else 
  {
    //var newStudent= new studentModel();
    studentList = new fromObject({
      pages: new ObservableArray(new studentModel())
    });
  }

  page.bindingContext=studentList;
}

export function onItemTap(args)
{
  var page = args.object;
  var students = page.bindingContext;
  Frame.topmost().navigate({
    moduleName: "./detail/detail-page", 
    context: {model: students, index:args.index}
  });
}

export function onAdd(args)
{
  var page = args.object;
  var students = page.bindingContext;
  students.pages.push(new studentModel());

  Frame.topmost().navigate({
    moduleName: "./detail/detail-page",
    context: {model:students, index:students.pages.length-1}
  });
}