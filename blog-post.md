# About impostors and doubles

Well into the project, with the deadline looming,in the middle of the sprint, and you have half or more of your team browsing the internet because some upstream system is down and no development/testing/showcase can be done.

If you are part of a high performant team, that have all their microservices architecture and pipelines working this kind of problem probably does not occur to you. 

But to most of us it does.

All the time.

You may actually have already tried _stubbing_(or _mocking_) some or all of your upstream endpoints but there is always a case that you haven't thought or it is too hard to recreate with a _stub_(_mock_).

(In case you did not understand, or are vaguely familiar with, the last paragraph, _stubs_ or _mocks_ are simple versions of your complex backends that allow your team to keep working towards the project goals even when your backend is down.)

_Mocks_ and _stubs_, more generally: __test doubles__, also are very useful in the early stages of the project when you have a team of developers but neither the requirements nor the design are yet complete and you don't want to waste their valuable hourly rates but instead let them help in the initial contracts of the application.

So a very common approach is to create dummy servers that respond to specific requests. For example an end point that returns with a fixed address that can act as a __double__ for an address lookup in your form.

This traditional approach involves some work with a stubbing framework or a simple webserver for which a developer prepares a suite of fixed responses.



<!-- As a enterprise developer, tech lead, business analyst or tester you have probably experienced it.  -->