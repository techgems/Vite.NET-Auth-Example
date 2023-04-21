# Vite.NET-Auth-Example

This is a simple example of how to use the Vite.NET for easily authenticating access to your SPA.

To do this we will leverage ASP.NET Core Identity and keep the default razor pages as they are.

## Getting Started

By compiling the solution you will also do the installation of the npm dependencies. So there's no need to run NPM commands.
But you will need to run the migrations for the database for the project to work. 
You can do this by running `dotnet ef database update` in the root of the project.

With this done you can run the project and you should be able to create your account. 

Once you create your account, you can access the route "/Secret" and see the protected page with an integrated Vite SPA.
