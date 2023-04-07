# Vite.NET-Auth-Example

This is a simple example of how to use the Vite.NET for easily authenticating access to your SPA.

To do this we will leverage ASP.NET Core Identity and keep the default razor pages as they are.

## Getting Started

To make this sample work. You will need to run `npm install` in the ClientApp folder.
Then you will need to run the migrations for the database. You can do this by running `dotnet ef database update` in the root of the project.

With all of this done you can run the project and you should be able to login and see the protected page with an integrated Vite SPA.