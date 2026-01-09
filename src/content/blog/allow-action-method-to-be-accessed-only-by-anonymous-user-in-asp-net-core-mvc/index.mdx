---
title: 'Allow action method to be accessed only by anonymous user in Asp.Net Core MVC'
description: 'In this tutorial let''s see how to allow a controller/action method to be accessed only by an anonymous user in Asp.Net Core MVC project.'
date: '2018-08-31'
tags: ['Asp.Net Core']
image: './banner.webp'
authors: ['vinothvkr']
---

import Callout from '@/components/Callout.astro';

## Overview

In a typical ASP.NET Core application, you globally restrict access to authenticated users. The built-in `[AllowAnonymous]` attribute allows specific actions for anonymous users. However, the opposite scenario—restricting an action to **only** anonymous users—requires a custom filter.

This tutorial demonstrates how to create a custom `AnonymousOnlyFilter` attribute to prevent authenticated users from accessing specific pages or actions.

<Callout variant="note">
Use cases include:
- Login and registration pages (should only be accessible before authentication)
- Password reset pages (prevent authenticated users from resetting another user's password)
- Public signup forms (keep authenticated users from accessing)
</Callout>

## Creating the AnonymousOnlyFilter

First, create a class file `AnonymousOnlyFilter.cs`

```csharp
public class AnonymousOnlyFilter : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        if (context.HttpContext.User.Identity.IsAuthenticated)
        {
            context.Result = new RedirectToActionResult("Index", "Home", "");
        }
    }
}
```

### How It Works

This custom filter:

1. **Derives from `ActionFilterAttribute`** — This base class provides the `OnActionExecuting` hook, which executes before any controller action runs
2. **Checks user authentication** — `context.HttpContext.User.Identity.IsAuthenticated` returns true if the user is logged in
3. **Redirects authenticated users** — If the user is authenticated, they're redirected to the home page (you can change this redirect target)

<Callout variant="tip">
You can customize the redirect target by changing `new RedirectToActionResult("Index", "Home", "")`. The parameters are: action name, controller name, and route values.
</Callout>

## Applying the Filter

Use the `[AnonymousOnlyFilter]` attribute on specific actions or the entire controller:

### Example: On Individual Actions

```csharp
public class HomeController : Controller
{
    // This action is accessible to everyone
    public IActionResult Index()
    {
        return View();
    }

    // Only anonymous users can access this
    [AnonymousOnlyFilter]
    public IActionResult Login()
    {
        return View();
    }

    // Only anonymous users can access this
    [AnonymousOnlyFilter]
    public IActionResult Register()
    {
        return View();
    }

    // Regular authenticated-only action
    [Authorize]
    public IActionResult Dashboard()
    {
        return View();
    }
}
```

### Example: On Entire Controller

```csharp
[AnonymousOnlyFilter]
public class AuthController : Controller
{
    // All actions in this controller are anonymous-only
    public IActionResult Login() => View();
    public IActionResult Register() => View();
    public IActionResult ForgotPassword() => View();
}
```

<Callout variant="warning" title="Filter Execution Order">
If you apply both `[AnonymousOnlyFilter]` and `[Authorize]` to the same action, `[Authorize]` is checked first, so the AnonymousOnly filter never executes. Remove `[Authorize]` when using `[AnonymousOnlyFilter]`.
</Callout>

## Summary

With this custom filter, you can easily protect anonymous-only pages from being accessed by authenticated users. It's a simple but powerful way to enforce your application's access control logic beyond the standard `[Authorize]` and `[AllowAnonymous]` attributes.
