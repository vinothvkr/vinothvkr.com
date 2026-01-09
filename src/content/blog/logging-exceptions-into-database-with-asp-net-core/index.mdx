---
title: 'Logging Exceptions into Database with ASP.NET Core'
description: 'Learn how to implement a robust database exception logger using Exception Filters in ASP.NET Core MVC. This tutorial covers creating a separate DbContext for logging and handling unhandled exceptions gracefully.'
date: '2018-08-07'
tags: ['ASP.NET Core', '.NET Core', 'Exception Handling', 'Logging', 'Database']
image: './banner.webp'
authors: ['vinothvkr']
---

import Callout from '@/components/Callout.astro';

## Overview

Proper exception logging is critical for maintaining application reliability and debugging issues in production. This tutorial demonstrates how to implement a database logger using Exception Filters in ASP.NET Core MVC projects.

<Callout variant="note">
**Why a Separate DbContext?** When an exception occurs during database operations, using the same DbContext for logging can cause issues. The original DbContext remains in a failed state and cannot save new data. A separate DbContext ensures exception logs are saved independently.
</Callout>

## Step 1: Create the LogEntry Model

First, create a model to represent exception log entries in the database:

```csharp
// Models/LogEntry.cs
public class LogEntry
{
    public int Id { get; set; }
    public DateTime TimeStamp { get; set; }
    public string RequestId { get; set; }
    public string Message { get; set; }
    public string Type { get; set; }
    public string Source { get; set; }
    public string StackTrace { get; set; }
    public string RequestPath { get; set; }
    public string User { get; set; }
    public string ActionDescriptor { get; set; }
    public string IpAddress { get; set; }
}
```

This model captures all essential exception information for debugging and auditing purposes.

## Step 2: Create a Separate LogDbContext

Create a separate DbContext specifically for exception logging:

```csharp
// Data/LogDbContext.cs

public class LogDbContext : DbContext
{
    public LogDbContext(DbContextOptions<LogDbContext> options)
        : base(options)
    {
    }

    public DbSet<LogEntry> LogEntries { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
    }
}
```

<Callout variant="note">
A separate DbContext ensures that logging exceptions won't fail even if the main DbContext is in a failed state. This isolation prevents cascading failures during error handling.
</Callout>

## Step 3: Create the Exception Filter

Now create an exception filter to catch and log exceptions to the database:

```csharp
// Filters/DblExceptionFilter.cs

public class DblExceptionFilter : ExceptionFilterAttribute
{
    private readonly LogDbContext _context;

    public DblExceptionFilter(LogDbContext context)
    {
        _context = context;
    }

    public override void OnException(ExceptionContext context)
    {
        LogEntry log = new LogEntry
        {
            TimeStamp = DateTime.UtcNow,
            ActionDescriptor = context.ActionDescriptor.DisplayName,
            IpAddress = context.HttpContext.Connection.RemoteIpAddress.ToString(),
            Message = context.Exception.Message,
            RequestId = Activity.Current?.Id ?? context.HttpContext.TraceIdentifier,
            RequestPath = context.HttpContext.Request.Path,
            Source = context.Exception.Source,
            StackTrace = context.Exception.StackTrace,
            Type = context.Exception.GetType().ToString(),
            User = context.HttpContext.User.Identity.Name
        };

        _context.LogEntries.Add(log);
        _context.SaveChanges();

        base.OnException(context);
    }
}
```

This filter captures comprehensive exception details including the timestamp, request information, user, and full stack trace.

## Step 4: Register the Filter in Startup

Add the `DblExceptionFilter` to the service collection in your `Startup.cs`:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    // ... other services ...
    
    services.AddScoped<DblExceptionFilter>();
    
    // ... remaining services ...
}
```

## Step 5: Create a Base Controller

Create a `BaseController` class that applies the filter to all controllers:

```csharp
// Controllers/BaseController.cs
using System;
using ExceptionDbLogger.Filters;
using Microsoft.AspNetCore.Mvc;

namespace ExceptionDbLogger.Controllers
{
    [ServiceFilter(typeof(DblExceptionFilter))]
    public class BaseController : Controller
    {
    }
}
```

## Implementation

Inherit all your custom controllers from `BaseController`:

```csharp
public class YourController : BaseController
{
    public IActionResult Index()
    {
        // Your controller logic
        return View();
    }
}
```

Now any unhandled exceptions that occur in `YourController` will be automatically logged to the database.

## Benefits of This Approach

- **Centralized Logging**: All exceptions are logged to a single database table
- **Request Context**: Captures user, IP address, request path, and request ID
- **Audit Trail**: Maintains a complete history of exceptions for analysis
- **Easy Debugging**: Stack traces are stored for detailed error investigation
- **Scalable**: Add the filter to any controller by inheriting from `BaseController`

<Callout variant="warning">
**Important:** Ensure proper error handling in the filter itself. If logging fails, consider adding try-catch blocks to prevent logging errors from disrupting the application flow.
</Callout>

## Complete Example

For a complete working implementation, check out the source code on [GitHub](https://github.com/vinothvkr/ExceptionDbLogger).

## Database Schema

You'll also need to create a database table to store the log entries:

```sql
CREATE TABLE LogEntries (
    Id INT PRIMARY KEY IDENTITY(1,1),
    TimeStamp DATETIME NOT NULL,
    RequestId NVARCHAR(MAX),
    Message NVARCHAR(MAX),
    Type NVARCHAR(MAX),
    Source NVARCHAR(MAX),
    StackTrace NVARCHAR(MAX),
    RequestPath NVARCHAR(MAX),
    User NVARCHAR(MAX),
    ActionDescriptor NVARCHAR(MAX),
    IpAddress NVARCHAR(MAX)
);
```

## Conclusion

This exception logging approach provides a robust way to track and diagnose issues in production. By maintaining a separate DbContext and using a base controller, you ensure that all unhandled exceptions are consistently logged without risking the loss of log data.

If you have any questions or run into issues with the implementation, feel free to ask in the comments below!
