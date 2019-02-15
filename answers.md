Mention two parts of Express that you learned about this week.

    When using express you can break pieces of the api up into individual routers--so having multiple routers would be my first thing I learned about. And secondly, each router can have its own middleware and routing that are unique to just it--so the use of middleware I guess would be my second thing.

 Describe Middleware?

    Middleware is any software that acts as a bridge or go-between that connects two parts of an application or connects an application to a database or an operating system. It's really just a term for software that connects two pieces together because it's in the middle.

Describe a Resource?

    In Express a resource is anything that has it's own specific operation, so it would be accessible by a specific router and have a unique uri and handle just the logic and functions for that one unique part of the api.

What can the API return to help clients know if a request was successful?

    A 200 level http status code and a customized success message to go with it.

 How can we partition our application into sub-applications?
    
    By breaking it up into individual routers that all pertain to a specific uri.