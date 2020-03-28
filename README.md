# ASP.NET Core Web API with Angular Basic CRUD (Create-Read-Update-Delete) Operations 

## Overview
This sample ASP.NET Core Web API (v3.1) and Angular (v9) with Typescript projects demonstrate a basic implementation of CRUD (Create-Read-Update-Delete) Operations. 

The [webapi](https://github.com/deanilvincent/ASP.NET-Core-Web-API-with-Angular-Basic-Crud/tree/master/webapi) serves as the backend web api or the RESTful Service that handles different requests like `get`,`post`,`put` & `delete` methods. While the project [angular](https://github.com/deanilvincent/ASP.NET-Core-Web-API-with-Angular-Basic-Crud/tree/master/angular) serves as the frontend that consumes the requests from our web api project. 

Additionally, I added a `signalr` feature in this project. So, every time there's a new changes or update made by the server, it will automatically trigger the angular list of data and refresh it. To learn more about `SignalR` visit this [link](https://dotnet.microsoft.com/apps/aspnet/signalr)

## Setup
After you download/clone this project, you need to restore the packages on each project.

### For Angular Project
Navigate to the `angular` folder path and do the following:
**To restore**
```
npm i // to restore the packages
```
**To run the app:**
```
ng start
```
**To build for production:**
```
ng build
```
**To run test:**
```
ng test
```
### For ASP.NET Core Web API Project
Navigate to the `webapi` folder path and do the following:
**To restore**
```
dotnet restore
```
**To build and check some errors (if there's any)**
```
dotnet build
```
**To run the app**
```
dotnet run
```
### Connect to database
Another thing, make sure to change the connection string in the `Startup.cs` class of the project `webapi`. If you have no database yet, do the migration. 

Update the database:
```
dotnet ef database update
```

## Project Overview

**ASP.NET Core Web API 3.1**  - version `<TargetFramework>netcoreapp3.1</TargetFramework>`

**Angular 9**
| Packages | Versions |
| - | - |
| angular | ~9.0.5 |
| typescript | ~3.7.5 |
| @aspnet/signalr | ^1.1.4 |
| buefy (style for this project) | ^0.8.12 |

You can view all of the angular packages and dependencies in the [`package.json`]([https://github.com/deanilvincent/ASP.NET-Core-Web-API-with-Angular-Basic-Crud/blob/master/angular/package.json](https://github.com/deanilvincent/ASP.NET-Core-Web-API-with-Angular-Basic-Crud/blob/master/angular/package.json)) file of this project.

Feel free to clone or fork this project:  `https://github.com/deanilvincent/ASP.NET-Core-Web-API-with-Angular-Basic-Crud.git`

Contributions & pull requests are welcome!

I'll be glad if you give this project a ★ on  [Github](https://github.com/deanilvincent/ASP.NET-Core-Web-API-with-Angular-Basic-Crud)  :))

### License

This project is licensed under the MIT License - see the  [LICENSE.md](https://github.com/deanilvincent/ASP.NET-Core-Web-API-with-Angular-Basic-Crud/blob/master/LICENSE)  file for details.